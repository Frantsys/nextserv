import { Button } from "@/components/atoms/Button";
import { LoginForm } from "@/components/organisms/LoginForm";
import { SignUpForm } from "@/components/organisms/SignUpForm";
import { assets, colors, constants, fonts } from "@/theme";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { DismissKeyboard } from "@/components/atoms/DismissKeyboard";



export default function SignUp() {

    const router = useRouter();

    return(
        <DismissKeyboard>
            <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}>
            <View style={styles.header}>
                <Button
                    variant="secondary"
                    styles={styles.backButton}

                    onPress={() => router.replace("/")}
                >
                    <ChevronLeft size={24} />
                </Button>
            </View>

                <Image
                    source={assets.map}
                    style={styles.background}
                />
                <View style={styles.overlay} />
                <View style={styles.logo}>
                    <Image
                        source={assets.logo}
                        style={styles.logoImage}
                    />
                    <Text style={styles.logoText}>
                        NextServ
                    </Text>
                </View>

               <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.contentHeaderTitle}>
                        Cadastrar
                    </Text>
                    <Text style={styles.contentHeaderSub}>
                        Crie sua conta e agende qualquer serviço de qualquer lugar.
                    </Text>
                </View>
                        <SignUpForm />
               </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    )
}


const styles = StyleSheet.create({
    backButton: {
        zIndex: 6,
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    background: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: colors.primary["60"],
        zIndex: 2,
    },
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: colors.primary["60"],
        position: "relative",
    },
    header: {
        width: "100%",
        height: "6%",
        zIndex: 6,
        padding: 24,
        paddingInline: 24
    },
    content: {
        width: "100%",
        minHeight: "80%",
        height: "80%",
        backgroundColor: colors.background["DEFAULT"],
        borderTopEndRadius: constants.radius,
        borderTopStartRadius: constants.radius,
        padding: 24,
        zIndex: 10,
    },
    contentHeader: {
        width: "100%",
        height: "20%",
        gap: 4
    },
    contentHeaderTitle: {
        fontFamily: fonts.heading.semiBold,
        fontSize: 32
    },
    contentHeaderSub: {
        fontFamily: fonts.sans.regular,
        fontSize: 16,
        color: colors.muted_foreground["DEFAULT"]
    },
    logo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "12%",
        zIndex: 5

    },
    logoImage: {
        width: 72,
        height: 72
    }, 
    logoText: {
        fontFamily: fonts.heading.semiBold,
        color: "#fff",
        fontSize: 32
    }
})