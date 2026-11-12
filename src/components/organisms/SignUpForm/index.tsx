import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { UserRound, MailIcon, LockIcon } from "lucide-react-native";
import { InputGroup } from "@/components/molecules/InputGroup";
import { colors, fonts } from "@/theme";
import { validateSignUp } from "@/validation";
import { Button } from "@/components/atoms/Button";
import { GoogleAuthButton } from "@/components/molecules/GoogleAuthButton";

export function SignUpForm() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState<string | null>(null);

    const submit = () => {
        const message = validateSignUp(username, email, password, confirm);
        setError(message);
        if (!message) router.replace("/(tabs)/home");
    };

    return(
            <View style={styles.container}>

                <GoogleAuthButton />

                <View style={styles.divider} />

                <View style={styles.field}>
                    <Text style={styles.label}>Nome de usuário</Text>
                    <InputGroup
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                        autoComplete="username"
                        leftElements={<UserRound size={16} color={colors.muted_foreground["DEFAULT"]} />}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Email</Text>
                    <InputGroup
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        leftElements={<MailIcon size={16} color={colors.muted_foreground["DEFAULT"]} />}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Senha</Text>
                    <InputGroup
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoComplete="new-password"
                        leftElements={<LockIcon size={16} color={colors.muted_foreground["DEFAULT"]} />}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Confirmar Senha</Text>
                    <InputGroup
                        value={confirm}
                        onChangeText={setConfirm}
                        secureTextEntry
                        autoComplete="new-password"
                        onSubmitEditing={submit}
                        leftElements={<LockIcon size={16} color={colors.muted_foreground["DEFAULT"]} />}
                    />
                </View>

                {error && (
                    <Text accessibilityRole="alert" style={styles.error}>
                        {error}
                    </Text>
                )}

                <Button
                onPress={submit}
                styles={error ? styles.submitWithError : styles.submit}
                >
                    <Text style={styles.primaryLabel}>
                        Cadastrar
                    </Text>
                </Button>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "95%",
        display: "flex",
        gap: 12,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: colors.border["80"],
        marginBlock: 2,
    },
    field: {
        display: "flex",
        gap: 4,
    },
    label: {
        fontFamily: fonts.sans.medium,
    },
    error: {
        fontFamily: fonts.sans.regular,
        fontSize: 13,
        color: colors.destructive["DEFAULT"],
    },
    submit: {
        marginTop: 32,
    },
    submitWithError: {
        marginTop: 12,
    },
    primaryLabel: {
        fontFamily: fonts.sans.medium,
        fontSize: 16,
        color: "#fff",
    },
});
