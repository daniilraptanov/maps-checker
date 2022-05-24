import { IMapDTO } from "../dto/map.dto";

export interface IMap {
    getAll(): IMapDTO[];
    create(model: IMapDTO): IMapDTO;
}

export interface IMapStorage {
    addToStorage(model: IMapDTO): boolean;
    removeFromStorage(mapId: string): boolean;
    getStorage(): IMapDTO[];
}
