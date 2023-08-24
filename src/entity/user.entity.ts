import { ApiProperty } from '@nestjs/swagger';
import { Entity ,PrimaryGeneratedColumn,Column, OneToMany} from 'typeorm';
import Board from './board.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: '유저 아이디', example: 'admin'})
    @Column({unique: true})
    username: string;

    @ApiProperty({description: '유저 비밀번호', example: '12341234'})
    @Column({select:false})
    password: string

    @ApiProperty({description: '이름', example: '황상진'})
    @Column()
    name: string;

    @ApiProperty({description: '작성한 게시글'})
    @OneToMany(() => Board, (board) => board.user)
    boards: Board[]
}