export class PostgresService {
    static instance: PostgresService = null;
    public client: any;
 

    private construct() { }

    public static getInstance(): PostgresService {
        if (!PostgresService.instance) {
            PostgresService.instance = new PostgresService();
        }
        return PostgresService.instance;
     }

    public async connect(uri: string){


    }



}