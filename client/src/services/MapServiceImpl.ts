import { BehaviorSubject } from "rxjs";
import { sendQuery } from "../tools/requests";
import { ChipDTO } from "../types/dto/ChipDTO";
import { MapDTO } from "../types/dto/MapDTO";
import { MapService } from "../types/services/MapService";

export class MapServiceImpl implements MapService {
    private constructor () {}

    private static _instance: MapService;
    private _maps: MapDTO[];

    static maps$ = new BehaviorSubject([]);

    static getInstance(): MapService {
        if (!MapServiceImpl._instance) {
            MapServiceImpl._instance = new MapServiceImpl();
        }

        return MapServiceImpl._instance;
    }

    notifyMapServiceImpl(maps: MapDTO[]): void {
        MapServiceImpl.maps$.next(maps);
    }

    private async getMaps(): Promise<MapDTO[]> {
        const result = await sendQuery("/maps", "get");
        return result.data
    }
    
    async getCachedMaps(): Promise<MapDTO[]> {
        if (!this._maps) {
            this._maps = await this.getMaps();
        }

        return this._maps;
    }

    async updateMaps(): Promise<MapDTO[]> {
        this._maps = await this.getMaps();

        return this._maps;
    }

    getTotalLevels(mapId: string): number {
        if (!mapId) {
            return 0;
        }

        return Math.max(...this._maps.find(map => map.id === mapId).chips.map(chip => chip.level));
    }

    defineArrowsPoints(mapId: any, startLevel: number): { start: string; end: string; } {
        if (!mapId || startLevel === null || startLevel === undefined) {
            return;
        } 

        const map = this._maps.find(map => map.id === mapId);

        return {
            start: map.chips.filter(chip => chip.level === startLevel)[0].id,
            end: map.chips.filter(chip => chip.level === startLevel + 1)[0].id
        }
    }

    addChipToCachedMap(chip: ChipDTO): boolean {
        if (!chip.mapId) {
            return;
        }

        this._maps.forEach(map => {
            if (map.id === chip.mapId) {
                map.chips.push(chip);
            }
        });

        return true;
    }

    updateChipFromCachedMap(chip: ChipDTO): boolean {
        if (!chip.id || !chip.mapId) {
            return;
        }

        this._maps.forEach(map => {
            if (map.id  === chip.mapId) {
                map.chips.forEach(element => {
                    if (element.id === chip.id) {
                        element.isComplete = chip.isComplete;
                    }
                });
            }
        });

        return true;
    }

    removeChipFromCachedMap(chip: ChipDTO): boolean {
        if (!chip.id || !chip.mapId) {
            return;
        }

        this._maps.forEach(map => {
            if (map.id === chip.mapId) {
                map.chips = map.chips.filter(element => element.id !== chip.id);
            }
        });

        return true;
    }
}