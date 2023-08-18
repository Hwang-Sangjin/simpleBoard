import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {

    private boards = [
        {
            name: 'jin',
            contents: 'contents 1',
            id: '1',
         },
         {
            name: 'lee',
            contents: 'contents 2',
            id: '2',
         },
         {
            name: 'kim',
            contents: 'contents 3',
            id: '3',
         },
         {
            name: 'hyun',
            contents: 'contents 4',
            id: '4',
         },
         {
            name: 'park',
            contents: 'contents 5',
            id: '5',
         },
         {
            name: 'hwang',
            contents: 'contents 6',
            id: '6',
         },
         {
            name: 'cha',
            contents: 'contents 7',
            id: '7',
         },
         {
            name: 'jo',
            contents: 'contents 8',
            id: '8',
         },
         {
            name: 'bae',
            contents: 'contents 9',
            id: '9',
         },

    ];

    findAll() {
        return this.boards;
    }

    find(id: string) {
        const index = this.boards.findIndex((board) => board.id ===id);
        return this.boards[index];
    }
}
