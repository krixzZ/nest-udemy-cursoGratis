import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { get } from 'https';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {

    constructor(
        private todos: TodosService){

        }

    @Get('/all')
    getAllTodos() {
        return this.todos.getAllTodos();
    }

    @Get(':id')
    findTodo(@Param('id')  id){
        return this.todos.getTodo(id);
    }

    @Post()
    createTodo(@Body() body) {
        console.log(body);
        return body;
    }

}