import { controllerFactory } from "../controllers/controller.factory";
import { validateFactory } from "../middleware/validations/validate.factory";
import { API_ENDPOINTS } from "../types/enums/api-endpoints.enum";

const { Router } = require("express");

const router = Router();

router.get(
    "/maps",
    controllerFactory(API_ENDPOINTS.MAPS).getAll
);

router.post(
    "/chip",
    validateFactory(API_ENDPOINTS.CHIPS).validate,
    controllerFactory(API_ENDPOINTS.CHIPS).createOrUpdate
);

router.delete(
    "/chip/:chipId",
    controllerFactory(API_ENDPOINTS.CHIPS).removeById
);

module.exports = router;