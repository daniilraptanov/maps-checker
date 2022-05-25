import { ChipDTO } from "./ChipDTO";

export interface MapDTO {
    id?: string;
    name: string;
    chips?: ChipDTO[]; 
}