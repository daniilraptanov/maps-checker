import { ChipDTO } from "../dto/ChipDTO";

export interface ChipService {
    createOrUpdateChip(data: ChipDTO): Promise<ChipDTO>;
    removeChipById(data: ChipDTO): Promise<boolean>;
}