import { colors } from "@/theme";
import { BottomTabBarProps } from "expo-router/build/react-navigation/bottom-tabs";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  state: BottomTabBarProps["state"];
  descriptors: BottomTabBarProps["descriptors"];
  navigation: BottomTabBarProps["navigation"];
};


export function TabBar({
    state, descriptors, navigation
}: Props) {

    return (
        <View style={{
            width: "100%",
            height: "10%",
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        }}>
            <View style={{
                backgroundColor: "#FFFF",
                minWidth: "80%",
                height: "70%",
                borderRadius: 48,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}>
                {
                    state.routes.map((route, index) => {
                        const { options } = descriptors[route.key]

                        const isFocused = state.index == index;

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

                        return (
                            <TouchableOpacity
                                key={route.key}
                                onPress={onPress}
                                style={{
                                    width: 96,
                                    borderRadius: 48,
                                    
                                    display: "flex",
                                    height: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {Icon &&
                                    Icon({
                                    focused: isFocused,
                                    color: isFocused ? options.tabBarActiveTintColor || "#0000" : options.tabBarInactiveTintColor || "#9b9494",
                                    size: 24,
                                })}

                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        </View>
    )
}