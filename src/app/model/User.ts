import {BaseTypeormModel} from "../../@base"
import {Column, Entity} from "typeorm"

@Entity()
class User extends BaseTypeormModel
{
   @Column()
   readonly username: string

   @Column()
   email: string

   @Column()
   password: string
}

export {User}