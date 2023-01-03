import {IEmailHelper} from "./IEmailHelper"
import {EmailConfig} from "../../../config"

class EmailHelper implements IEmailHelper
{
   async send(): Promise<any>
   {
      // await EmailConfig.sendMail()
   }
}

export {EmailHelper}