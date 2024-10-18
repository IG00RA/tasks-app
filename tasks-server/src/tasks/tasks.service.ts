import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  async create(task: Partial<Task>): Promise<Task> {
    const newTask = this.tasksRepository.create(task);
    return this.tasksRepository.save(newTask);
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    const existingTask = await this.findOne(id);
    if (!existingTask) {
      throw new NotFoundException('Task not found');
    }

    await this.tasksRepository.update(id, task);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const task = await this.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }

    await this.tasksRepository.delete(id);
  }
}
