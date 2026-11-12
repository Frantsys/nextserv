import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { MapPin } from "lucide-react-native";
import { EstablishmentCard } from "@/components/molecules/EstablishmentCard";
import { ESTABLISHMENTS } from "@/mocks";
import { assets, colors, fonts } from "@/theme";

const NEARBY = [...ESTABLISHMENTS].sort((a, b) => a.proximity_meters - b.proximity_meters);

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={assets.mapBackground} style={styles.map} contentFit="cover" />
            <View style={styles.pin}>
                <MapPin size={28} color="#fff" fill={colors.primary["DEFAULT"]} />
            </View>

            <View style={styles.sheet}>
                <ScrollView contentContainerStyle={styles.sheetContent}>
                    <Text style={styles.title}>Locais Próximos</Text>
                    {NEARBY.map((item) => (
                        <EstablishmentCard key={item.id} item={item} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background["DEFAULT"],
    },
    map: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 380,
    },
    pin: {
        position: "absolute",
        left: "70%",
        top: 158,
    },
    sheet: {
        flex: 1,
        marginTop: 355,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: -2 },
        elevation: 4,
    },
    sheetContent: {
        paddingHorizontal: 32,
        paddingTop: 32,
        paddingBottom: 140,
        gap: 20,
    },
    title: {
        fontFamily: fonts.sans.medium,
        fontSize: 16,
        color: colors.foreground["DEFAULT"],
        paddingBottom: 8,
    },
});
