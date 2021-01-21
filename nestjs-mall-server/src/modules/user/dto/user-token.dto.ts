import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { User } from '../entities';

export class UserTokenDto {
  @ApiProperty()
  token: string;

  @Expose()
  @Type(() => User)
  @ApiProperty()
  user: User;
}
