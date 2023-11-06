import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
// import { Match } from '../decorators/match.decorator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'username props of a user and ensure it is unique',
    example: 'John',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
    description: 'password props of a user',
    example: 'password',
    required: true,
  })
  password: string;

  //   @ApiProperty({
  //     type: String,
  //     description: 'allows user to confirm previous entered pass',
  //     example: 'password',
  //     required: true,
  //   })
  //   @IsString()
  //   @IsNotEmpty()
  //   @Match('password', { message: 'Passwords should match' })
  //   passwordConfirm: string;

  @ApiProperty({
    type: String,
    description: 'email props of a user and validates if its unique',
    example: 'john@example.com',
    required: true,
  })
  email: string;

  refreshToken: string;
}
