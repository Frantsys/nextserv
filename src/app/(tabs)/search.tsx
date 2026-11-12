import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MapPin, Search } from "lucide-react-native";
import { EstablishmentCard } from "@/components/molecules/EstablishmentCard";
import { InputGroup } from "@/components/molecules/InputGroup";
import { ESTABLISHMENTS } from "@/mocks";
import { assets, colors, fonts } from "@/theme";

export default function SearchScreen() {
    const insets = useSafeAreaInsets();
    const [query, setQuery] = useState("");

    const normalized = query.trim().toLowerCase();
    const results = ESTABLISHMENTS.filter((item) =>
        item.displayName.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized) ||
        item.services.some((service) => service.name.toLowerCase().includes(normalized))
    );

    return (
        <View style={styles.container}>
            <Image source={assets.mapBackground} style={styles.map} contentFit="cover" />
            <View style={styles.pin}>
                <MapPin size={28} color="#fff" fill={colors.primary["DEFAULT"]} />
            </View>

            <View style={[styles.controls, { top: insets.top + 24 }]}>
                <View style={styles.searchBar}>
                    <InputGroup
                        value={query}
                        onChangeText={setQuery}
                        placeholder="Pesquisar serviço ou local"
                        placeholderTextColor="#64748B"
                        style={styles.input}
                        leftElements={<Search size={20} color="#64748B" />}
                    />
                </View>
                <Pressable style={styles.locate} onPress={() => setQuery("")} accessibilityRole="button" accessibilityLabel="Usar minha localização">
                    <MapPin size={28} color="#fff" fill="#94A3B8" />
                </Pressable>
            </View>

            <View style={styles.sheet}>
                <ScrollView contentContainerStyle={styles.sheetContent}>
                    <Text style={styles.title}>
                        Exibindo {results.length} {results.length === 1 ? "resultado" : "resultados"}
                    </Text>
                    {results.length === 0 && <Text style={styles.empty}>Nenhum local encontrado.</Text>}
                    {results.map((item) => (
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
    controls: {
        position: "absolute",
        left: 36,
        right: 36,
        zIndex: 2,
        gap: 12,
        alignItems: "flex-end",
    },
    searchBar: {
        alignSelf: "stretch",
        borderRadius: 32,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    input: {
        minHeight: 48,
    },
    locate: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
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
    empty: {
        fontFamily: fonts.sans.regular,
        fontSize: 14,
        color: colors.muted_foreground["DEFAULT"],
    },
});
