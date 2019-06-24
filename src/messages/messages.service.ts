import { Injectable } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message-dto';

@Injectable()
export class MessagesService {

    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) {}

    getAllMessages(): Promise<Message[]> {
        return this.messageRepository.find();
    }

    createMessage(newMessage: CreateMessageDto): Promise<Message> {
        const newM = new Message();
        newM.message = newMessage.message;
        newM.nick = newMessage.nick;

        return this.messageRepository.save(newM);
    }

    async updateMessage(id: number, message: CreateMessageDto): Promise<Message> {
        const messageUpdate = await this.messageRepository.findOne(id); //porq es una promesa !!!!
        messageUpdate.nick = message.message;
        messageUpdate.message = message.message;

        return this.messageRepository.save(messageUpdate);
    }

    deleteMessage(id): Promise<any> {
        return this.messageRepository.delete(id);
    }
}
