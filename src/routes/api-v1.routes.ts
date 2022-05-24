import { controllerFactory } from "../controllers/controller.factory";
import { validateFactory } from "../middleware/validations/validate.factory";
import { API_ENDPOINTS } from "../types/enums/api-endpoints.enum";

const { Router } = require("express");

export default class API {
    private static router = Router();
    
    registerEndpoints(): any {
        this.maps();
        this.chip();

        return API.router;
    }

    private maps() {
        API.router.get(
            "/maps",
            validateFactory(API_ENDPOINTS.MAPS).validate,
            controllerFactory(API_ENDPOINTS.MAPS).getAll
        );
    }

    private chip() {
        API.router.post(
            "/chip",
            validateFactory(API_ENDPOINTS.CHIPS).validate,
            controllerFactory(API_ENDPOINTS.CHIPS).createOrUpdate
        );

        API.router.delete(
            "/chip/:chipId",
            controllerFactory(API_ENDPOINTS.CHIPS).removeById
        );
    }
}