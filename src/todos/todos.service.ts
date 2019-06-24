import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {

    getAllTodos() {
        return [
            {
                id: 1,
                name: 'tarea 1'
            },
            {
                id: 2,
                name: 'tarea 2'
            }
        ];
    }

    getTodo(id: string){
        return {
            id,
            name: `tarea ${id}`
        };
    }

}
