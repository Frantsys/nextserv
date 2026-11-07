import { colors, constants } from "@/theme"
import { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

type BadgeVariant = "primary" | "secondary" | "outline"

type BadgeProps = {
    variant?: BadgeVariant
    children: ReactNode
}

export function Badge({
    variant = "primary",
    children
}: BadgeProps) {

    const styleMapper: Record<BadgeVariant, object> = {
        primary: styles.primary,
        secondary: styles.secondary,
        outline: styles.outline
    }

    return(
        <View style={[
            styles._,
            styleMapper[variant]
        ]}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    _: {
        padding: 6,
        paddingInline: 16,
        borderRadius: constants.radius
    },
    primary: {
        backgroundColor: colors.primary["20"]
    },
    secondary: {
        backgroundColor: colors.secondary["20"]
    },
    outline: {
        borderWidth: 2,
        borderColor: colors.border["DEFAULT"]
    }
});
