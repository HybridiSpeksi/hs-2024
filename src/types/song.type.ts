import type { ProductionType } from "./production.type";

export type SongType = {
    // "id": string,
    "title": string,
    "year": string,
    "production": string,
    "scene"?: number,
    "type": string,
    "original_artist"?: string,
    "original_song"?: string,
    "lyrics": string,
}