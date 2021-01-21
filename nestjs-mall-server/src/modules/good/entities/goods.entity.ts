import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'goods' })
export class Goods {
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: 'number', title: '主键Id' })
  id: number;

  @CreateDateColumn({ name: 'create_time' })
  @ApiProperty({ type: 'datatime', title: '创建时间' })
  @ApiProperty()
  createTime: Date;
}
