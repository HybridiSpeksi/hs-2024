import type { ProductionType } from "./production.type";

export type SongType = {
    // "id": string,
    "title": string,
    "year": number,
    "production"?: string,
    "scene"?: number|null,
    "type": string,
    "original_artist"?: string,
    "original_song"?: string,
    "lyrics": string,
}