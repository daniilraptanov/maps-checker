import { sendQuery } from "../tools/requests";
import { ChipDTO } from "../types/dto/ChipDTO";
import { ChipService } from "../types/services/ChipService";

export class ChipServiceImpl implements ChipService {
    private constructor () {}
    private static _instance: ChipService;

    static getInstance(): ChipService {
        if (!ChipServiceImpl._instance) {
            ChipServiceImpl._instance = new ChipServiceImpl();
        }

        return ChipServiceImpl._instance;
    }

    async createOrUpdateChip(data: ChipDTO): Promise<ChipDTO> {
        if (!data) {
            return;
        }

        return (await sendQuery("/chip"), "post", data)["data"];
    }

    async removeChipById(chipId: string): Promise<boolean> {
        if (!chipId) {
            return;
        }

        const result = (await sendQuery(`/chip/${chipId}`), "delete")["data"];

        return result["status"];
    }
}