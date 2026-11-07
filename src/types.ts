

export interface Address {
    city: string
    district: string
    street: string
    number: number
    zipCode: string
}

export type TagType = "closer" | "best_price" | "best_rating"

export type ScheduleState = "pending" | "done"


export interface ServiceDto {
    id: string
    name: string
    price: number
    duration_minutes: string

}

export interface EstablishmentDto {
    id: string
    slug: string
    displayName: string
    category: string
}

export interface EstablishmentSearchResultDto {
    id: string,
    slug: string

    displayName: string
    address: Address
    category: string
    rating: number

    tags: TagType[]
    proximity_meters: number

    services: ServiceDto[]
}

export interface Schedule {
    id: string

    day: string
    start_time: string
    end_time: string

    service: ServiceDto
    establishment: EstablishmentDto
    state: ScheduleState
}

