import { View, Text } from "react-native";
import { UserRound, MailIcon, LockIcon } from "lucide-react-native";
import { InputGroup } from "@/components/InputGroup";
import { colors, fonts } from "@/theme";
import { Button } from "../Button";
import { GoogleAuthButton } from "../GoogleAuthButton";

export function SignUpForm() {
    return(
            <View style={{
                width: "100%",
                height: "95%",
                display: "flex",
                gap: 12
            }}>

                <GoogleAuthButton />

                <View
                style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: colors.border["80"],
                    marginBlock: 2,
                    
                }}
                />

                <View style={{ display: "flex", gap: 4 }}>
                    <Text style={{ fontFamily: fonts.sans.medium }}>Nome de usuário</Text>
                    <InputGroup leftElements={<UserRound size={16} color={colors.muted_foreground["DEFAULT"]} />} />
                </View>

                <View style={{ display: "flex", gap: 4 }}>
                    <Text style={{ fontFamily: fonts.sans.medium }}>Email</Text>
                    <InputGroup leftElements={<MailIcon size={16} color={colors.muted_foreground["DEFAULT"]} />} />
                </View>

                <View style={{ display: "flex", gap: 4 }}>
                    <Text style={{ fontFamily: fonts.sans.medium }}>Senha</Text>
                    <InputGroup leftElements={<LockIcon size={16} color={colors.muted_foreground["DEFAULT"]} />} />
                </View>

                <View style={{ display: "flex", gap: 4 }}>
                    <Text style={{ fontFamily: fonts.sans.medium }}>Confirmar Senha</Text>
                    <InputGroup leftElements={<LockIcon size={16} color={colors.muted_foreground["DEFAULT"]} />} />
                </View>

                <Button
                styles={{
                    marginTop: 32
                }}
                >
                    <Text
                    style={{
                        fontFamily: fonts.sans.medium,
                        fontSize: 16,
                        color: "#fff"
                    }}
                    >
                        Cadastrar
                    </Text>
                </Button>
            </View>
    )
}