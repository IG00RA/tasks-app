import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    const taskId = parseInt(id, 10);

    if (isNaN(taskId)) {
      throw new BadRequestException('Invalid task ID');
    }

    const task = await this.tasksService.findOne(taskId);
    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  @Post()
  async create(@Body() task: Partial<Task>): Promise<Task> {
    if (!task.title && !task.description) {
      throw new BadRequestException('Missing task title or description');
    }

    return this.tasksService.create(task);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() task: Partial<Task>,
  ): Promise<Task> {
    const taskId = parseInt(id, 10);

    if (isNaN(taskId)) {
      throw new BadRequestException('Invalid task ID');
    }

    const existingTask = await this.tasksService.findOne(taskId);
    if (!existingTask) {
      throw new NotFoundException('Task not found');
    }

    if (!task.title && !task.description) {
      throw new BadRequestException('Nothing to update');
    }

    return this.tasksService.update(taskId, task);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    const taskId = parseInt(id, 10);

    if (isNaN(taskId)) {
      throw new BadRequestException('Invalid task ID');
    }

    const task = await this.tasksService.findOne(taskId);
    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return this.tasksService.remove(taskId);
  }
}
