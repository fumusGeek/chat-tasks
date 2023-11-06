import { UserDocument } from 'src/users/schemas/user.schema';
import { Request } from 'express';

export default interface RequestWithUser extends Request {
  user: UserDocument;
}
