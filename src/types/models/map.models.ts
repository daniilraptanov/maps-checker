import { IMapDTO } from "../dto/map.dto";
import { IChip } from "./chip.models";

export interface IMap extends IMapDTO {
    storage: IMapStorage;
}

export interface IMapStorage {
    addToStorage(model: IMapDTO): boolean;
    removeFromStorage(mapId: string): boolean;
}
