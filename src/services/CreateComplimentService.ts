import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IComplementRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

class CreateComplimentService {

    async execute({tag_id, user_sender, user_receiver, message}: IComplementRequest) {

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Tag Exists?

        if(user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver!");
        }

        const userReceiverExists = usersRepositories.findOne(user_receiver);

        if(!userReceiverExists) {
            throw new Error("User Receiver don't exists!");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }