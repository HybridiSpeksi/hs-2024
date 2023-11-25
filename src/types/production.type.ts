import type { SongType } from "./song.type"

export type ProductionType = {
    "id": string,
    "title": string,
    "year": number,
    "synopsis": string,
    "statistics": {[key: string]: string}[],
    "colors": string[],
    "poster"?: string,
    "banner"?: string,
    "songs"?: SongType[]
    
}