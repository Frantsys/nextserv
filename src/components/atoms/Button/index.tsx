import { colors } from "@/theme";
import { ReactNode } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

export type ButtonVariant = "primary" | "secondary" | "outline" | "light"

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
        light: buttonStyles.light,
    }

    const rippleColor = variant === "primary" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)";

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
                    pressed && !disabled ? buttonStyles.pressed : null,
                    pressed && !disabled && variant === "light" ? buttonStyles.lightPressed : null,
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
    light: {
        backgroundColor: "transparent",
    },
    lightPressed: {
        backgroundColor: colors.primary["20"],
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: colors.accent["DEFAULT"]
    },
    pressed: {
        opacity: 0.8 
    }
});