import type { ProductionType } from "./production.type";

enum SongTypes {
    "Pääbiisi",
    "1. Omstart",
    "2. Omstart"
}

export type SongType = {
    "id": string,
    "title": string,
    "year": number,
    "production": ProductionType,
    "scene"?: number,
    "type"?: SongTypes,
    "original_artist"?: string,
    "original_song"?: string,
    "lyrics": string[],
}