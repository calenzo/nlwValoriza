import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplemetsService {

    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const complements = complimentsRepositories.find({
            where: {
                user_sender: user_id
            }
        })

        return complements;
    }
}

export { ListUserSendComplemetsService }