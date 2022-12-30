import {IBaseTypeormRepository} from "../interface"
import {Repository} from "typeorm";
import {MariadbConnection} from "../../config"

abstract class BaseTypeormRepository<T> implements IBaseTypeormRepository<T>
{
   protected readonly self: Repository<T>

   protected constructor(repoType: any)
   {
      this.self = MariadbConnection.getRepository<T>(repoType)
   }
}

export {BaseTypeormRepository}