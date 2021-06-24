import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({name, email, admin} : IUserRequest) {

        const usersRepository = getCustomRepository(UsersRepositories);
        
        if(!name) {
            return ({
                "status": 404,
                "message": "Name field is required!"
            })
        } 
        
        if(!email) {
            return ({
                "status": 404,
                "message": "Email field is required!"
            })
        } 

        const UserAlreadyExists = await usersRepository.findOne({ 
            email,
        })

        if(UserAlreadyExists) {
            return ({
                "status": 404,
                "message": "User already exists"
            })
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user);
        
        return user;
    }
}

export { CreateUserService }