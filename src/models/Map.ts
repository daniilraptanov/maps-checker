import { IChipDTO } from "../types/dto/chip.dto";
import { IMapDTO } from "../types/dto/map.dto";
import { IMap, IMapStorage } from "../types/models/map.models";


export class Map implements IMap {
    constructor () {
        this.storage = MapStorage.getInstance();
    }
    storage: IMapStorage;

    id: string;
    name: string;
    chips: IChipDTO[];
}

class MapStorage implements IMapStorage {
    private constructor () {}
    private static _instance: IMapStorage;
    private storage: IMapDTO[];


    static getInstance() {
        if (!MapStorage._instance) {
            MapStorage._instance = new MapStorage();
        }

        return MapStorage._instance;
    }

    addToStorage(model: IMapDTO): boolean {
        if (!model) {
            return false;
        }

        return this.storage.push(model) && true;
    }

    removeFromStorage(mapId: string): boolean {
        if(!mapId) {
            return false;
        }

        this.storage = this.storage.filter(map => map.id !== mapId);
        return true;
    }
}