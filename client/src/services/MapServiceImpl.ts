import { sendQuery } from "../tools/requests";
import { MapDTO } from "../types/dto/MapDTO";
import { MapService } from "../types/services/MapService";

export class MapServiceImpl implements MapService {
    private constructor () {}

    private static _instance: MapService;
    private Maps: MapDTO[];

    static getInstance(): MapService {
        if (!MapServiceImpl._instance) {
            MapServiceImpl._instance = new MapServiceImpl();
        }

        return MapServiceImpl._instance;
    }

    private async getMaps(): Promise<MapDTO[]> {
        const result = await sendQuery("/maps", "get");
        return result.data
    }
    
    async getCachedMaps(): Promise<MapDTO[]> {
        if (!this.Maps) {
            this.Maps = await this.getMaps();
        }

        return this.Maps;
    }

    async updateMaps(): Promise<MapDTO[]> {
        this.Maps = await this.getMaps();

        return this.Maps;
    }

    getTotalLevels(mapId: string): number {
        if (!mapId) {
            return 0;
        }

        return Math.max(...this.Maps.find(map => map.id === mapId).chips.map(chip => chip.level));
    }

    defineArrowsPoints(mapId: any, startLevel: number): { start: string; end: string; } {
        if (!mapId || !startLevel) {
            return;
        } 

        const map = this.Maps.find(map => map.id === mapId);

        return {
            start: map.chips.filter(chip => chip.level === startLevel)[0].id,
            end: map.chips.filter(chip => chip.level === startLevel + 1)[0].id
        }
    }
}