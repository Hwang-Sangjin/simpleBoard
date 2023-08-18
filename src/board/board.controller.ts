import { BoardService } from './board.service';
import { Controller, Get, Param, Post, Body, Put, Delete, Injectable } from '@nestjs/common';

@Controller('board')
export class BoardController {
    constructor(
        private readonly boardService: BoardService
    ){

    }

    @Get()
    findAll(){
        return this.boardService.findAll();
    }

    @Get(':id')
    find(
        @Param('id') id: string
    ) {
        return this.boardService.find(id);
    }

    @Post()
    create(
        @Body() data
    ) {
        return 'create';
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() data
    ){
        return 'update';
    }

    @Delete(':id')
    remove(
        @Param('id') id: number
    ){
        return 'delete';

    }
}
