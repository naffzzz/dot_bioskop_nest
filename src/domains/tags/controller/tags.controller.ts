import { Get, Controller, Render, Patch, Param, Body, Put, Post } from '@nestjs/common';
import { AddTagsDto } from '../dto/add-tags.dto';
import { EditTagsDto } from '../dto/edit-tags.dto';
import { TagsService } from '../service/tags.service';

@Controller('api/v1/tags')
export class TagsController {
  constructor(
    private tagsService: TagsService,
  ) {}

  @Get(':id') 
  async find(@Param('id') id:number) {
    return await this.tagsService.findOne(id) ;
  }

  @Get() 
  async findAll() {
    return await this.tagsService.findAll();
  }

  @Post() 
  async addUser(@Body() addTagsDto: AddTagsDto) {
    return await this.tagsService.createMovie(addTagsDto);

  }

  @Put(':id') 
  async editUser(@Body() editTagsDto: EditTagsDto, @Param('id') id:number) {
    return await this.tagsService.updateMovie(editTagsDto, id);
  }


  @Patch(':id') 
  async deleteUser(@Param('id') id:number) {
    return await this.tagsService.deleteTag(id);
  }
}