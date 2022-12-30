import {PrimaryGeneratedColumn} from "typeorm";

abstract class BaseTypeormModel
{
   @PrimaryGeneratedColumn()
   readonly id: string
}

export {BaseTypeormModel}