import { Controller, Body, Post, Get, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';
import { MessagesService } from './messages.service';
import { response } from 'express';

@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService) {

    }

    @Post()
    createMessage(@Body() createMessageDto: CreateMessageDto, @Res() response) {
        this.messagesService.createMessage(createMessageDto).then( message => {
            response.status(HttpStatus.CREATED).json(message);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error en la creación.'})
        });
    }

    @Get()
    getAllMessages(@Res() response) {
        this.messagesService.getAllMessages().then(messageList => {
            response.status(HttpStatus.OK).json(messageList);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error en la obtención.'})
        });
    }

    @Put(':id')
    updateMessage(@Body() updateMessageDto: CreateMessageDto, @Param('id') id, @Res() response) {
        this.messagesService.updateMessage(id, updateMessageDto).then(message => {
            response.status(HttpStatus.OK).json(message);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error en la edición.'})
        });
    }

    @Delete(':id')
    deleteMessage (@Res() response, @Param('id') id) {
        this.messagesService.deleteMessage(id).then( res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error en la eliminación.'})
        });
    }
}
