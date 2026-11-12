import { Tabs } from "expo-router";
import { CalendarDays, House, Search } from "lucide-react-native";
import { TabBar } from "@/components/organisms/TabBar";
import { colors } from "@/theme";

export default function TabsLayout() {
    return (
        <Tabs
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary["DEFAULT"],
                tabBarInactiveTintColor: "#64748B",
            }}
        >
            <Tabs.Screen
                name="home"
                options={{ title: "Início", tabBarIcon: ({ color, size, focused }) => <House color={color} size={size} fill={focused ? color : "none"} strokeWidth={1.8} /> }}
            />
            <Tabs.Screen
                name="schedule"
                options={{ title: "Agenda", tabBarIcon: ({ color, size }) => <CalendarDays color={color} size={size} strokeWidth={2} /> }}
            />
            <Tabs.Screen
                name="search"
                options={{ title: "Busca", tabBarIcon: ({ color, size, focused }) => <Search color={color} size={size} strokeWidth={focused ? 2.6 : 2} /> }}
            />
        </Tabs>
    );
}
