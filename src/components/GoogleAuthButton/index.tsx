import { Text } from "react-native";
import { Button } from "../Button";
import { fonts } from "@/theme";
import { Image } from "expo-image";


export function GoogleAuthButton() {
    return(
        <Button
        variant="outline"
        >
            <Image
            source={"https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail"}

            style={{
                width: 20,
                height: 20,
                marginInline: 12
            }}
            />
            <Text
            style={{
                fontFamily: fonts.sans.medium
            }}
            >
                Entrar com o Google
            </Text>
        </Button>
    )
}