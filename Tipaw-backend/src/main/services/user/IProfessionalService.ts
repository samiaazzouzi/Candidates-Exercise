import { Professional } from "../../models/professional";

export interface IProfessionalService {
    getAllProfessionals(): Professional[];
    getProfessionalById(id: string): Promise<Professional>;
    createProfessional(professional: Professional): Promise<Professional>;

}