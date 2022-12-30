import {BaseTypeormRepository} from "../../../@base"
import {IUserRepository} from "./IUserRepository"
import {User} from "../../model";

class UserRepository extends BaseTypeormRepository<UserRepository> implements IUserRepository
{
   constructor()
   {
      super(User)
   }
}

export {UserRepository}