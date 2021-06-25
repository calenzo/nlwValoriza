import { Request, Response } from "express";
import { ListUserReceiveComplemetsService } from "../services/ListUserReceiveComplementsService";


class ListUserReceiveComplementsController {

    async handle(request: Request, response: Response) {
        
        const { user_id } = request;

        const listUserReceiveComplemetsService = new ListUserReceiveComplemetsService();

        const complements = await listUserReceiveComplemetsService.execute(user_id);

        return response.json(complements);
    }
}

export { ListUserReceiveComplementsController }