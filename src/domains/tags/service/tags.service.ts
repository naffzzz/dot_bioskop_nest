import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { IsNull, Not, Repository } from 'typeorm';
import { AddTagsDto } from '../dto/add-tags.dto';
import { EditTagsDto } from '../dto/edit-tags.dto';
import { Tags } from '../entity/tags.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tags)
    private tagsRepository: Repository<Tags>,
  ) {}

  async findAll(): Promise<Tags[]> {
    return await this.tagsRepository.find();
  }

  async createMovie(addTagsDto : AddTagsDto): Promise<Tags> {
    const tags = new Tags();
    tags.name = addTagsDto.name;
    tags.created_at = new Date();

    return await this.tagsRepository.save(tags);

  }

  async updateMovie(editTagsDto : EditTagsDto, id: number): Promise<Tags> {
    const tags = await this.findOne(id);
    
    tags.name = editTagsDto.name;
    tags.updated_at = new Date();

    await this.tagsRepository.update(id, tags);

    return tags;

  }

  async deleteTag(id: number): Promise<Tags> {
    const tags = await this.findOne(id);

    tags.deleted_at = new Date();

    await this.tagsRepository.update(id, tags);

    return tags;

  }

  async findOne(id: number): Promise<Tags> {
    const found = await this.tagsRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Tag with ID ${id} is not found`);
    }

    return found;
  }

  async remove(id: string): Promise<void> {
    await this.tagsRepository.delete(id);
  }
}