import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { InputGroup } from "@/components/molecules/InputGroup";
import { LockIcon, MailIcon } from "lucide-react-native";
import { colors, fonts } from "@/theme";
import { validateLogin } from "@/validation";
import { GoogleAuthButton } from "@/components/molecules/GoogleAuthButton";
import { Button } from "@/components/atoms/Button";
import { Link, useRouter } from "expo-router";


export function LoginForm() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const submit = () => {
        const message = validateLogin(email, password);
        setError(message);
        if (!message) router.replace("/(tabs)/home");
    };

    return(
            <View style={styles.container}>

                <GoogleAuthButton />

                <View style={styles.divider} />

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
                        autoComplete="password"
                        onSubmitEditing={submit}
                        leftElements={<LockIcon size={16} color={colors.muted_foreground["DEFAULT"]} />}
                    />
                </View>

                {error && (
                    <Text accessibilityRole="alert" style={styles.error}>
                        {error}
                    </Text>
                )}

                <Link href={"/"}>
                    <Text style={styles.link}>
                        Esqueceu a senha?
                    </Text>
                </Link>

                <Button
                onPress={submit}
                styles={styles.submit}
                >
                    <Text style={styles.primaryLabel}>
                        Entrar
                    </Text>
                </Button>
                <Button
                onPress={() => router.push("/signup")}
                variant="outline"
                >
                    <Text style={styles.outlineLabel}>
                        Cadastrar
                    </Text>
                </Button>

                <Button
                variant="light"
                onPress={() => router.replace("/(tabs)/home")}
                styles={styles.guest}
                >
                    <Text style={styles.guestLabel}>
                        Entrar como visitante
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
        gap: 16,
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
    link: {
        fontFamily: fonts.sans.medium,
        textAlign: "center",
        color: colors.primary["DEFAULT"],
    },
    submit: {
        marginTop: 16,
    },
    primaryLabel: {
        fontFamily: fonts.sans.medium,
        fontSize: 16,
        color: "#fff",
    },
    outlineLabel: {
        fontFamily: fonts.sans.medium,
        fontSize: 16,
        color: colors.foreground["DEFAULT"],
    },
    guest: {
        alignSelf: "center",
    },
    guestLabel: {
        fontFamily: fonts.sans.medium,
        fontSize: 14,
        color: colors.primary["DEFAULT"],
    },
});
