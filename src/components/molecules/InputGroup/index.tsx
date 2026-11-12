import { colors, constants, fonts } from "@/theme";
import { ReactNode, useState } from "react"
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";



export type InputGroupProps = TextInputProps & {
    leftElements?: ReactNode;
    rightElements?: ReactNode;
};

export function InputGroup({
    leftElements,
    rightElements,
    style,
    ...rest
}: InputGroupProps) {

    const [focused, setFocus] = useState(false);
    const isPassword = !!rest.secureTextEntry;
    const [hidden, setHidden] = useState(true);


return (
    
            <View style={[styles.container,
                focused ? styles.focused : null
            ]}>
                {leftElements && (
                    <View style={styles.addonContainer}>
                        {leftElements}
                    </View>
                )}
    
                <TextInput
                    style={[styles.input, style,
    
                    ]}
                    placeholderTextColor={colors.muted_foreground["DEFAULT"]}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}

                    {...rest}
                    secureTextEntry={isPassword && hidden}
                />

                {isPassword && (
                    <Pressable
                        onPress={() => setHidden((value) => !value)}
                        hitSlop={8}
                        style={styles.addonContainer}
                        accessibilityRole="button"
                        accessibilityLabel={hidden ? "Mostrar senha" : "Ocultar senha"}
                    >
                        {hidden
                            ? <EyeOff size={18} color={colors.muted_foreground["DEFAULT"]} />
                            : <Eye size={18} color={colors.muted_foreground["DEFAULT"]} />}
                    </Pressable>
                )}

                {rightElements && (
                    <View style={styles.addonContainer}>
                        {rightElements}
                    </View>
                )}
            </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.border["DEFAULT"],
        borderRadius: constants.radius,
        backgroundColor: "#fff",
        overflow: "hidden",
        paddingHorizontal: 16,
    },
    focused: {
        borderColor: colors.primary["DEFAULT"]
    },
    addonContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        flex: 1, 
        minHeight: 42,
        paddingHorizontal: 16,
        fontSize: 16,
        color: colors.foreground["DEFAULT"],
        fontFamily: fonts.sans.regular,
        outlineStyle: "solid",
        outlineWidth: 0,
    }
});



export type TextareaGroupProps = TextInputProps & {
    leftElements?: ReactNode;
    rightElements?: ReactNode;
    minHeight?: number; 
};

export function TextareaGroup({
    leftElements,
    rightElements,
    style,
    minHeight = 120,
    ...rest
}: TextareaGroupProps) {
    return (
        <View style={[textarea_styles.container, { minHeight }]}>
            {leftElements && (
                <View style={textarea_styles.addonContainer}>
                    {leftElements}
                </View>
            )}

            <TextInput 
                multiline={true}
                numberOfLines={rest.numberOfLines || 4} 
                textAlignVertical="top"
                style={[textarea_styles.input, style]}
                placeholderTextColor={colors.muted_foreground["DEFAULT"]}
                {...rest}
            />
            
            {rightElements && (
                <View style={textarea_styles.addonContainer}>
                    {rightElements}
                </View>
            )}
        </View>
    );
}

const textarea_styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start", 
        borderWidth: 1,
        borderColor: colors.border["DEFAULT"],
        outlineWidth: 1,
        outlineColor: colors.border["DEFAULT"],
        borderRadius: constants.radius,
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        paddingHorizontal: 12,
        paddingVertical: 12, 
        
    },
    addonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
        margin: 10
    },
    input: {
        flex: 1, 
        paddingHorizontal: 10,
        fontSize: 16,
        color: colors.foreground["DEFAULT"],
        fontFamily: fonts.sans.regular,
    }
});