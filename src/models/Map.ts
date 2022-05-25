import { IMapDTO } from "../types/dto/map.dto";
import { IMap, IMapStorage } from "../types/models/map.models";
import { Chip } from "./Chip";


export class Map implements IMap {
    constructor () {
        this._storage = MapStorage.getInstance();
    }

    private _storage: IMapStorage;

    getAll(): IMapDTO[] {
        const result = [];
        
        this._storage.getStorage().forEach(map => {
            map.chips = new Chip().getAllByMapId(map.id)

            result.push(map);
        });

        return result;
    }

    create(model: IMapDTO): IMapDTO {
        if (!model || !model.id) {
            return null;
        }

        this._storage.addToStorage(model);
        return model;
    }
}

class MapStorage implements IMapStorage {
    private constructor () {
        this._storage = [{
            id: "0b700802-ebe2-4a34-8a35-8cf3995aa814",
            name: "Test Map",
            chips: []
        }];
    }
    private static _instance: IMapStorage;
    private _storage: IMapDTO[];


    static getInstance() {
        if (!MapStorage._instance) {
            MapStorage._instance = new MapStorage();
        }

        return MapStorage._instance;
    }

    getStorage(): IMapDTO[] {
        return this._storage;
    }

    addToStorage(model: IMapDTO): boolean {
        if (!model) {
            return false;
        }

        return this._storage.push(model) && true;
    }

    removeFromStorage(mapId: string): boolean {
        if(!mapId) {
            return false;
        }

        this._storage = this._storage.filter(map => map.id !== mapId);
        return true;
    }
}