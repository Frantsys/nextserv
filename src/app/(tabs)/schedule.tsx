import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCHEDULES } from "@/mocks";
import { colors, fonts } from "@/theme";

const WEEK_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const WEEK_FULL = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const MONTHS = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const EVENT_COLORS = [
    { bar: colors.secondary["DEFAULT"], text: "#0F766E" },
    { bar: colors.primary["DEFAULT"], text: colors.primary["DEFAULT"] },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ScheduleScreen() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const [selected, setSelected] = useState(today.getDate());

    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (number | null)[] = [
        ...Array(firstWeekday).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
    while (cells.length % 7) cells.push(null);
    const weeks = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));

    const eventsOn = (d: number) => SCHEDULES.filter((s) => s.day === `${year}-${pad(month + 1)}-${pad(d)}`);
    const selectedEvents = eventsOn(selected);
    const weekday = WEEK_FULL[new Date(year, month, selected).getDay()];

    return (
        <SafeAreaView style={styles.safeArea} edges={["top"]}>
            <View style={styles.calendar}>
                <View style={styles.row}>
                    {WEEK_SHORT.map((label) => (
                        <Text key={label} style={styles.weekLabel}>{label}</Text>
                    ))}
                </View>
                {weeks.map((week, i) => (
                    <View key={i} style={styles.row}>
                        {week.map((d, j) => {
                            if (d === null) return <View key={j} style={styles.cell} />;
                            const isSelected = d === selected;
                            const events = eventsOn(d);
                            return (
                                <Pressable
                                    key={j}
                                    onPress={() => setSelected(d)}
                                    style={[styles.cell, isSelected && styles.cellSelected]}
                                    accessibilityRole="button"
                                    accessibilityState={{ selected: isSelected }}
                                    accessibilityLabel={`${d} de ${MONTHS[month]}, ${events.length} agendamentos`}
                                >
                                    <View style={styles.bars}>
                                        {events.slice(0, 2).map((e, k) => (
                                            <View key={e.id} style={[styles.bar, { backgroundColor: EVENT_COLORS[k % 2].bar }]} />
                                        ))}
                                    </View>
                                    <Text style={styles.dayText}>{d}</Text>
                                </Pressable>
                            );
                        })}
                    </View>
                ))}
            </View>

            <View style={styles.sheet}>
                <ScrollView contentContainerStyle={styles.sheetContent}>
                    <Text style={styles.sheetTitle}>{weekday} - {selected} de {MONTHS[month]}</Text>
                    <View style={styles.divider} />
                    {selectedEvents.length === 0 && <Text style={styles.empty}>Nenhum agendamento neste dia.</Text>}
                    {selectedEvents.map((event, k) => {
                        const color = EVENT_COLORS[k % 2];
                        return (
                            <View key={event.id} style={[styles.event, { borderLeftColor: color.bar }]}>
                                <Text style={styles.eventName} numberOfLines={1}>{event.service.name}</Text>
                                <Text style={[styles.eventTime, { color: color.text }]}>{event.start_time} - {event.end_time}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background["DEFAULT"],
    },
    calendar: {
        paddingHorizontal: 4,
        paddingTop: 24,
        paddingBottom: 16,
        gap: 4,
    },
    row: {
        flexDirection: "row",
    },
    weekLabel: {
        flex: 1,
        textAlign: "center",
        fontFamily: fonts.sans.regular,
        fontSize: 13,
        color: "#64748B",
        paddingBottom: 12,
    },
    cell: {
        flex: 1,
        height: 64,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 8,
        paddingTop: 10,
        paddingBottom: 12,
        paddingHorizontal: 6,
    },
    cellSelected: {
        backgroundColor: "#E5E7EB",
    },
    bars: {
        alignSelf: "stretch",
        gap: 4,
    },
    bar: {
        height: 6,
        borderRadius: 3,
    },
    dayText: {
        fontFamily: fonts.sans.medium,
        fontSize: 14,
        color: colors.foreground["DEFAULT"],
    },
    sheet: {
        flex: 1,
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
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 140,
        gap: 12,
    },
    sheetTitle: {
        fontFamily: fonts.sans.medium,
        fontSize: 20,
        color: colors.foreground["DEFAULT"],
        paddingHorizontal: 8,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border["80"],
        marginTop: 12,
        marginBottom: 12,
    },
    empty: {
        fontFamily: fonts.sans.regular,
        fontSize: 14,
        color: colors.muted_foreground["DEFAULT"],
        paddingHorizontal: 8,
    },
    event: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        minHeight: 52,
        marginHorizontal: 8,
        paddingLeft: 12,
        borderLeftWidth: 4,
        borderRadius: 2,
    },
    eventName: {
        flex: 1,
        fontFamily: fonts.sans.regular,
        fontSize: 14,
        color: colors.foreground["DEFAULT"],
    },
    eventTime: {
        fontFamily: fonts.sans.medium,
        fontSize: 14,
    },
});
