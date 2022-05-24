import { API_ENDPOINTS } from "../../types/enums/api-endpoints.enum";
import { IBaseValidate } from "../../types/validations/base.validate";
import ChipValidate from "./chip.validate";
import MapsValidate from "./maps.validate";

export function validateFactory(entity: API_ENDPOINTS): IBaseValidate {
    if (entity === API_ENDPOINTS.MAPS) {
        return new MapsValidate();
    }

    return new ChipValidate();
}