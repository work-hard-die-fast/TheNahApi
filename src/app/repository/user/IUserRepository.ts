import {IBaseTypeormRepository} from "../../../@base"
import {User} from "../../model"

interface IUserRepository extends IBaseTypeormRepository<User>
{

}

export {IUserRepository}