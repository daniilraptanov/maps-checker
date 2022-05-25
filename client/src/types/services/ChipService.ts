import { ChipDTO } from "../dto/ChipDTO";

export interface ChipService {
    createOrUpdateChip(data: ChipDTO): Promise<ChipDTO>;
    removeChipById(chipId: string): Promise<boolean>;
}