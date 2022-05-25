import { MapDTO } from "../dto/MapDTO";

export interface MapService {
    getCachedMaps(): Promise<MapDTO[]>;
    updateMaps(): Promise<MapDTO[]>;

    getTotalLevels(mapId: string): number;
    defineArrowsPoints(mapId, startLevel: number): {
        start: string;
        end: string;
    };
}