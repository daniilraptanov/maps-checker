import { v4 as uuidv4 } from 'uuid';
import { IChipDTO } from "../types/dto/chip.dto";
import { IChip, IChipStorage } from "../types/models/chip.models";
import { Map } from "./Map";

export class Chip implements IChip {
    constructor () {
        this._storage = ChipStorage.getInstance();
    }
    
    private _storage: IChipStorage;

    getAllByMapId(mapId: string): IChipDTO[] {
        return this._storage.getStorage().filter(chip => chip.mapId === mapId);
    }

    removeById(chipId: string): boolean {
        if (!chipId) {
            return false;
        }

        return this._storage.removeFromStorage(chipId);
    }

    createOrUpdate(model: IChipDTO): IChipDTO {
        if (!model) {
            return null;
        }

        if (model.id) {
            this._storage.updateFromStorage(model);
        } else {
            model.id = uuidv4();
            model.mapId = uuidv4();
            this._storage.addToStorage(model);
        }
 
        if (model.level === 0) {
            new Map().create({
                id: model.mapId,
                name: model.name,
            })
        }

        return model;
    }
}

class ChipStorage implements IChipStorage {
    private constructor () {
        this._storage = [];
    }
    private static _instance: IChipStorage;
    private _storage: IChipDTO[];


    static getInstance() {
        if (!ChipStorage._instance) {
            ChipStorage._instance = new ChipStorage();
        }

        return ChipStorage._instance;
    }
    
    getStorage(): IChipDTO[] {
        return this._storage;
    }

    addToStorage(model: IChipDTO): boolean {
        if (!model) {
            return false;
        }

        return this._storage.push(model) && true;
    }

    updateFromStorage(model: IChipDTO): boolean {
        if (!model.id) {
            return false;
        }

        this._storage.forEach(chip => {
            if (chip.id === model.id) {
                chip.name = model.name;
                chip.level = model.level;
                chip.isComplete = model.isComplete;
            }
        });

        return true;
    }

    removeFromStorage(chipId: string): boolean {
        if(!chipId) {
            return false;
        }

        this._storage = this._storage.filter(chip => chip.id !== chipId);
        return true;
    }
}