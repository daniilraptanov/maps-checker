import { v4 as uuidv4 } from 'uuid';
import { Chip } from '../models/Chip';
import { Map } from '../models/Map';
import { IChipDTO } from '../types/dto/chip.dto';

describe("Chip-model => create and return model", () => {
    const CHIP = new Chip();
    let exampleId: string = null;
    let exampleMapId: string = null;
    const exampleChipModel: IChipDTO = {
        name: "Test-1",
        isComplete: false,
        level: 0,
    }

    beforeAll(() => {
        const result = CHIP.createOrUpdate(exampleChipModel);
        exampleId = result.id;
        exampleMapId = result.mapId
    });

    test("Should contain exampleChipModel in chips", () => {
        const chips = CHIP.getAllByMapId(exampleMapId);

        expect(typeof exampleMapId).toBe("string");
        expect(chips).toContainEqual({
            ...exampleChipModel,
            id: exampleId,
            mapId: exampleMapId
        });
    });

    test("Should return true after removed-function call", () => {
        const isRemoved = CHIP.removeById(exampleId);

        expect(isRemoved).toBe(true);
    });
});