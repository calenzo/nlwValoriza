import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplemetsService {

    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const complements = complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tagId"]
        })

        return complements;
    }
}

export { ListUserReceiveComplemetsService }