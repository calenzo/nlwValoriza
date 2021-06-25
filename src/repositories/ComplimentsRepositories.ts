import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/compliments";

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories }