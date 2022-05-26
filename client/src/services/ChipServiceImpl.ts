import { sendQuery } from "../tools/requests";
import { ChipDTO } from "../types/dto/ChipDTO";
import { ChipService } from "../types/services/ChipService";
import { MapService } from "../types/services/MapService";
import { MapServiceImpl } from "./MapServiceImpl";

export class ChipServiceImpl implements ChipService {
    private constructor () {
        this.mapService = MapServiceImpl.getInstance();
    }
    private static _instance: ChipService;
    private mapService: MapService;

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

        const addedChip = this.mapService.addChipToCachedMap(data);
        if (!addedChip) {
            return;
        }

        return (await sendQuery("/chip", "post", data))["data"];
    }

    async removeChipById(data: ChipDTO): Promise<boolean> {
        if (!data) {
            return;
        }

        const removedChip = this.mapService.removeChipFromCachedMap(data);
        if (!removedChip) {
            return;
        }

        const result = (await sendQuery(`/chip/${data.id}`, "delete"))["data"];

        return result["status"];
    }
}