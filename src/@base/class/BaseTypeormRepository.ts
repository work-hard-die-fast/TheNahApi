import {IBaseTypeormRepository} from "../interface"
import {Repository} from "typeorm";
import {MariadbConnection} from "../../config"

abstract class BaseTypeormRepository<T> implements IBaseTypeormRepository<T>
{
   protected readonly self: Repository<T>

   protected constructor(repoType: {new(): T})
   {
      this.self = MariadbConnection.getRepository<T>(repoType)
   }
}

export {BaseTypeormRepository}