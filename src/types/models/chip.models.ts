import { IChipDTO } from "../dto/chip.dto";

export interface IChip {
    createOrUpdate(model: IChipDTO): IChipDTO;
    getAllByMapId(mapId: string): IChipDTO[];
    removeById(chipId: string): boolean;
}

export interface IChipStorage {
    addToStorage(model: IChipDTO): boolean;
    removeFromStorage(chipId: string): boolean;
    updateFromStorage(model: IChipDTO): boolean;
    getStorage(): IChipDTO[];
}