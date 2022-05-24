import { IChipDTO } from "../dto/chip.dto";

export interface IChip extends IChipDTO {
    storage: IChipStorage;
}

export interface IChipStorage {
    addToStorage(model: IChipDTO): boolean;
    removeFromStorage(chipId: string): boolean;
}