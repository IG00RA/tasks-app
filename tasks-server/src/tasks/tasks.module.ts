import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity'; // Імпортуємо сутність

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Додаємо Task як частину модуля
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
