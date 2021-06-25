import { Request, Response } from "express";
import { ListUserSendComplemetsService } from "../services/ListUserSendComplementsService";


class ListUserSenderComplementsController {

    async handle(request: Request, response: Response) {
        
        const { user_id } = request;

        const listUserSendComplemetsService = new ListUserSendComplemetsService();

        const complements = await listUserSendComplemetsService.execute(user_id);

        return response.json(complements);
    }
}

export { ListUserSenderComplementsController }