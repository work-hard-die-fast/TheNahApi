import {IBaseTypeormRepository} from "../interface"
import {Repository} from "typeorm";
import {MariadbConnection} from "../../config"

class BaseTypeormRepository<T> implements IBaseTypeormRepository<T>
{
   protected readonly self: Repository<T>

   constructor(repoType: {new(): T})
   {
      this.self = MariadbConnection.getRepository<T>(repoType)
   }
}

export {BaseTypeormRepository}