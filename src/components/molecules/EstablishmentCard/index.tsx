import { StyleSheet, Text, View } from "react-native";
import { Store } from "lucide-react-native";
import { colors, fonts } from "@/theme";
import { EstablishmentSearchResultDto, TagType } from "@/types";

const TAG_LABELS: Record<TagType, string> = {
    closer: "Mais próximo",
    best_price: "Melhor preço",
    best_rating: "Melhor avaliado",
};

function formatDistance(meters: number) {
    return meters < 1000 ? `${meters}m` : `${(meters / 1000).toFixed(1).replace(".", ",")}km`;
}

export function EstablishmentCard({ item }: { item: EstablishmentSearchResultDto }) {
    const { street, district, number } = item.address;
    return (
        <View style={styles.card}>
            <View style={styles.top}>
                <View style={styles.icon}>
                    <Store size={26} color={colors.primary["DEFAULT"]} strokeWidth={1.8} />
                </View>
                <Text style={styles.name} numberOfLines={1}>{item.displayName}</Text>
                {item.tags[0] && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{TAG_LABELS[item.tags[0]]}</Text>
                    </View>
                )}
            </View>
            <View style={styles.footer}>
                <Text style={styles.address}>{street} - {district}, {number}</Text>
                <Text style={styles.distance}>{formatDistance(item.proximity_meters)} de distância</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        gap: 16,
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border["80"],
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 1,
    },
    top: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    icon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DBE4FB",
    },
    name: {
        flex: 1,
        fontFamily: fonts.sans.medium,
        fontSize: 16,
        color: colors.foreground["DEFAULT"],
    },
    badge: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: "#C9D7FB",
    },
    badgeText: {
        fontFamily: fonts.sans.medium,
        fontSize: 12,
        color: "#1D4ED8",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
    },
    address: {
        flexShrink: 1,
        fontFamily: fonts.sans.regular,
        fontSize: 12,
        color: "#64748B",
    },
    distance: {
        fontFamily: fonts.sans.medium,
        fontSize: 12,
        color: colors.foreground["DEFAULT"],
    },
});
