import { v4 as uuidv4 } from 'uuid';
import { Map } from "../models/Map";
import { IMapDTO } from "../types/dto/map.dto"

describe("Map-model => create and return model", () => {
    const MAP = new Map();
    const exampleMapModel: IMapDTO = {
        id: uuidv4(),
        name: "Test-1",
        chips: []
    }

    beforeAll(() => {
        MAP.create(exampleMapModel);
    });

    test("Should contain exampleMapModel in maps", () => {
        const maps = MAP.getAll();

        expect(maps).toContainEqual(exampleMapModel);
    });
});