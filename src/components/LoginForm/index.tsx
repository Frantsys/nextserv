import { Text, View } from "react-native";
import { InputGroup } from "../InputGroup";
import { LockIcon, MailIcon, UserRound } from "lucide-react-native";
import { colors, fonts } from "@/theme";
import { GoogleAuthButton } from "../GoogleAuthButton";
import { Button } from "../Button";
import { Link, useRouter } from "expo-router";


export function LoginForm() {

    const router = useRouter();

    return(
            <View style={{
                width: "100%",
                height: "95%",
                display: "flex",
                gap: 16
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
                    <Text style={{ fontFamily: fonts.sans.medium }}>Email</Text>
                    <InputGroup leftElements={<MailIcon size={16} color={colors.muted_foreground["DEFAULT"]} />} />
                </View>

                <View style={{ display: "flex", gap: 4 }}>
                    <Text style={{ fontFamily: fonts.sans.medium }}>Senha</Text>
                    <InputGroup leftElements={<LockIcon size={16} color={colors.muted_foreground["DEFAULT"]} />} />
                </View>

                <Link href={"/"}>
                    <Text style={{
                        fontFamily: fonts.sans.medium,
                        textAlign: "center",
                        color: colors.primary["DEFAULT"]
                    }}>
                        Esqueceu a senha?
                    </Text>
                </Link>

                <Button
                styles={{
                    marginTop: 16
                }}
                >
                    <Text style={{
                        fontFamily: fonts.sans.medium,
                        fontSize: 16,
                        color: "#fff",
                        
                    }}>
                        Entrar
                    </Text>


                </Button>
                <Button
                onPress={() => router.push("/signup")}
                variant="outline"
                >
                    <Text style={{
                        fontFamily: fonts.sans.medium,
                        fontSize: 16,
                        color: colors.foreground["DEFAULT"]
                    }}>
                        Cadastrar
                    </Text>
                </Button>
            </View>
    )
}