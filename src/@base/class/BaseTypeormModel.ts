import {PrimaryGeneratedColumn} from "typeorm";

class BaseTypeormModel
{
   @PrimaryGeneratedColumn()
   readonly id: string
}

export {BaseTypeormModel}