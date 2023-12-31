import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn,Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export default class Board{
    @PrimaryGeneratedColumn({name:'id'})
    id: number;
    
    @ApiProperty({description: '유저 아이디'})
    @Column()
    userId: string;

    @ApiProperty({description: '내용'})
    @Column()
    contents: string;

    @ApiProperty({description: '수정일'})
    @UpdateDateColumn()
    updateAt: Date;

    @ApiProperty({description: '생성일'})
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({description: '유저 정보'})
    @ManyToOne(()=>User)
    @JoinColumn({name:'userId'})
    user: User
}