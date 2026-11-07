import { colors } from "@/theme";
import { ReactNode } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

export type ButtonVariant = "primary" | "secondary" | "outline"

type ButtonProps = {
    children: ReactNode,
    variant?: ButtonVariant
    onPress?: () => void
    disabled?: boolean,
    styles?: ViewStyle
}

export function Button({
    children,
    variant = "primary",
    onPress = undefined,
    disabled = false,
    styles
}: ButtonProps) {

    const currentStyle: Record<ButtonVariant, object> = {
        primary: buttonStyles.primary,
        secondary: buttonStyles.secondary,
        outline: buttonStyles.outline,
    }

    const rippleColor = variant === "primary" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)";

    /**
     *  O uso de um container por fora do Pressable se dá pela característica do ripple effect
     *  nativo do android não adaptar seu formato ao border radius do próprio pressable
     *  forçando, assim, que uma View container defina o estilo
     */

    return (
        <View style={[
            styles,
            buttonStyles.container,
            disabled ? buttonStyles.disabled : currentStyle[variant],
        ]}>
            <Pressable
                onPress={onPress}
                disabled={disabled}
                android_ripple={{
                    color: rippleColor,
                    borderless: false,
                }}
                style={({ pressed }) => [
                    buttonStyles.pressableArea,
                    /**
                     * IOS não possui ripple nativo, por isso o fallback se torna, Apenas, o estilo padrão do pressed
                     */
                    pressed && !disabled ? buttonStyles.pressed : null 
                ]}
            >
                {children}
            </Pressable>
        </View>
    )
}

const buttonStyles = StyleSheet.create({
    container: {
        borderRadius: 32,
        overflow: "hidden",
    },
    pressableArea: {
        minWidth: 128,
        minHeight: 32,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16, 
        paddingVertical: 10
    },
    primary: {
        backgroundColor: colors.primary["DEFAULT"]
    }, 
    secondary: {
        backgroundColor: "#fff"
    },
    outline: {
        borderColor: colors.border["DEFAULT"],
        backgroundColor: "#fff",
        borderWidth: 1
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: colors.accent["DEFAULT"]
    },
    pressed: {
        opacity: 0.8 
    }
});