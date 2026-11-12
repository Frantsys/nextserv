import { EstablishmentSearchResultDto, Schedule } from "@/types";

const address = { city: "Natal", district: "Centro", street: "Av. principal", number: 400, zipCode: "59000-000" };

export const ESTABLISHMENTS: EstablishmentSearchResultDto[] = [
    {
        id: "1", slug: "barbearia", displayName: "Barbearia", category: "Barbearia", address,
        rating: 4.9, tags: ["closer"], proximity_meters: 14,
        services: [{ id: "s1", name: "Corte de cabelo", price: 40, duration_minutes: "40" }],
    },
    {
        id: "2", slug: "clinica", displayName: "Clínica", category: "Saúde", address,
        rating: 4.7, tags: [], proximity_meters: 100,
        services: [{ id: "s2", name: "Manutenção de aparelho", price: 120, duration_minutes: "60" }],
    },
    {
        id: "3", slug: "salao", displayName: "Salão de Beleza", category: "Salão", address,
        rating: 4.6, tags: [], proximity_meters: 350,
        services: [{ id: "s3", name: "Manicure", price: 35, duration_minutes: "60" }],
    },
    {
        id: "4", slug: "pet-shop", displayName: "Pet Shop", category: "Pet", address,
        rating: 4.5, tags: [], proximity_meters: 1200,
        services: [{ id: "s4", name: "Banho e tosa", price: 45, duration_minutes: "90" }],
    },
];

const today = new Date();
const day = (d: number) =>
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

const clinica = { id: "2", slug: "clinica", displayName: "Clínica", category: "Saúde" };
const barbearia = { id: "1", slug: "barbearia", displayName: "Barbearia", category: "Barbearia" };

export const SCHEDULES: Schedule[] = [
    { id: "a1", day: day(17), start_time: "7:40", end_time: "8:40", state: "pending", service: ESTABLISHMENTS[1].services[0], establishment: clinica },
    { id: "a2", day: day(17), start_time: "7:40", end_time: "8:40", state: "pending", service: ESTABLISHMENTS[1].services[0], establishment: clinica },
    { id: "a3", day: day(22), start_time: "14:00", end_time: "14:40", state: "pending", service: ESTABLISHMENTS[0].services[0], establishment: barbearia },
];
