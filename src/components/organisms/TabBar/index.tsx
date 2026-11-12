import { colors } from "@/theme";
import { BottomTabBarProps } from "expo-router/build/react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  state: BottomTabBarProps["state"];
  descriptors: BottomTabBarProps["descriptors"];
  navigation: BottomTabBarProps["navigation"];
};

export function TabBar({
    state, descriptors, navigation
}: Props) {
    const insets = useSafeAreaInsets();
    const centerIndex = Math.floor(state.routes.length / 2);

    return (
        <View style={[styles.wrapper, { bottom: Math.max(insets.bottom, 16) + 12 }]} pointerEvents="box-none">
            <View style={styles.pill}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    const isCenter = index === centerIndex;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const Icon = options.tabBarIcon;
                    const color = isCenter
                        ? "#fff"
                        : isFocused
                            ? options.tabBarActiveTintColor ?? colors.primary["DEFAULT"]
                            : options.tabBarInactiveTintColor ?? colors.muted_foreground["DEFAULT"];

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={onPress}
                            accessibilityRole="tab"
                            accessibilityState={{ selected: isFocused }}
                            accessibilityLabel={options.title}
                            style={isCenter ? [styles.center, isFocused && styles.centerFocused] : styles.item}
                        >
                            {Icon?.({ focused: isFocused, color, size: 28 })}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
    },
    pill: {
        width: 268,
        height: 64,
        paddingHorizontal: 12,
        borderRadius: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
    },
    item: {
        width: 56,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
    },
    center: {
        width: 72,
        height: 72,
        borderRadius: 36,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary["DEFAULT"],
        shadowColor: colors.primary["DEFAULT"],
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
    },
    centerFocused: {
        borderRadius: 20,
    },
});
