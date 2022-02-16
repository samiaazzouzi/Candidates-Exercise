import { Professional } from "../../models/professional";
import { IProfessionalService } from "./IProfessionalService";
import { PostgresService } from "../PostgresService";


export class ProfessionalService implements IProfessionalService {
static CLASS_NAME = "ProfessionalService";
public postgresService: PostgresService = PostgresService.getInstance();

 public getAllProfessionals(): Professional[]{
     console.log(ProfessionalService.CLASS_NAME + '.getAllProfessionals');
     return [];
 }

public async getProfessionalById(id: string): Promise<Professional>{
    console.log(ProfessionalService.CLASS_NAME + '.getProfessionalById');
    //return await this.postgresService.getById(id);
    return null;
}

public async createProfessional(professional: Professional): Promise<Professional>{
    console.log(ProfessionalService.CLASS_NAME + '.createProfessional');
    //return await this.postgresService.add(professional);
    return null;

}


}
