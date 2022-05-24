import { IBaseController } from "../types/controllers/base.controller";
import { API_ENDPOINTS } from "../types/enums/api-endpoints.enum";
import { ChipController } from "./chip.controller";
import { MapController } from "./map.controller";


export function controllerFactory(entity: API_ENDPOINTS): IBaseController {
    if (entity === API_ENDPOINTS.MAPS) {
        return new MapController();
    }

    return new ChipController();
}