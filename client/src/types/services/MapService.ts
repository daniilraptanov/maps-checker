import { ChipDTO } from "../dto/ChipDTO";
import { MapDTO } from "../dto/MapDTO";

export interface MapService {
    notifyMapServiceImpl(maps: MapDTO[]): void;

    getCachedMaps(): Promise<MapDTO[]>;
    updateMaps(): Promise<MapDTO[]>;

    addChipToCachedMap(chip: ChipDTO): boolean;
    updateChipFromCachedMap(chip: ChipDTO): boolean;
    removeChipFromCachedMap(chip: ChipDTO): boolean;

    getTotalLevels(mapId: string): number;
    defineArrowsPoints(mapId: string, startLevel: number): {
        start: string;
        end: string[];
    };
}