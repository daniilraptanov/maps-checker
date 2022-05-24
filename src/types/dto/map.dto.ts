import { IChipDTO } from "./chip.dto";

export interface IMapDTO {
    id?: string;
    name: string;
    chips?: IChipDTO[]; 
}
