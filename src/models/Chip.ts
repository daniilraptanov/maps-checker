import { IChipDTO } from "../types/dto/chip.dto";
import { IChip, IChipStorage } from "../types/models/chip.models";

export class Chip implements IChip {
    constructor () {
        this.storage = ChipStorage.getInstance();
    }
    storage: IChipStorage;

    id: string;
    name: string;
    level: number;
    isComplete: boolean;
    mapId: string;
}

class ChipStorage implements IChipStorage {
    private constructor () {}
    private static _instance: IChipStorage;
    private storage: IChipDTO[];


    static getInstance() {
        if (!ChipStorage._instance) {
            ChipStorage._instance = new ChipStorage();
        }

        return ChipStorage._instance;
    }

    addToStorage(model: IChipDTO): boolean {
        if (!model) {
            return false;
        }

        return this.storage.push(model) && true;
    }

    removeFromStorage(chipId: string): boolean {
        if(!chipId) {
            return false;
        }

        this.storage = this.storage.filter(chip => chip.id !== chipId);
        return true;
    }
}