import {BaseTypeormModel} from "../../@base"
import {Column, Entity} from "typeorm"

@Entity()
class User extends BaseTypeormModel
{
   @Column()
   username: string

   @Column()
   email: string

   @Column()
   password: string
}

export {User}