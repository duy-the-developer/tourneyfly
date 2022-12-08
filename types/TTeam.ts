import type { TCountry } from './TCountry'
import type { ObjectId } from 'mongodb'

export type TTeam = {
    _id: ObjectId
    name: string
    country: TCountry
    members: string[]
    wins: number
    losses: number
    ties: number
    totalPoints: number
    results: {
        [key: string]: any
    }
}
