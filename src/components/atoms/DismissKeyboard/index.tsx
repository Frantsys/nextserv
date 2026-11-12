import { ReactNode } from "react";
import { Keyboard, Platform, Pressable, StyleSheet } from "react-native";

export function DismissKeyboard({ children }: { children: ReactNode }) {
    if (Platform.OS === "web") return children;

    return (
        <Pressable style={styles.area} onPress={Keyboard.dismiss} accessible={false}>
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
    },
});
