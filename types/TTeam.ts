import type { TCountry } from './TCountry'

export type TTeam = {
    _id: string
    name: string
    country: TCountry
    members: string[]
    wins: number
    losses: number
    ties: number
    totalPoints: number
}
