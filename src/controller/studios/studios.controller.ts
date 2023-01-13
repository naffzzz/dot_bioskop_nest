import { Get, Controller, Render, Patch, Param, Body, Put, Post } from '@nestjs/common';
import { AddStudiosDto } from '../../domains/studios/dto/add-studios.dto';
import { EditStudiosDto } from '../../domains/studios/dto/edit-studios.dto';
import { StudiosService } from '../../domains/studios/service/studios.service';

@Controller('api/v1/studios')
export class StudiosController {
  constructor(
    private studiosService: StudiosService,
  ) {}

  @Get(':id') 
  async find(@Param('id') id:number) {
    return await this.studiosService.findOne(id) ;
  }

  @Get() 
  async findAll() {
    return await this.studiosService.findAll();
  }

  @Post() 
  async addUser(@Body() addStudiosDto: AddStudiosDto) {
    return await this.studiosService.createStudio(addStudiosDto);

  }

  @Put(':id') 
  async editUser(@Body() editStudiosDto: EditStudiosDto, @Param('id') id:number) {
    return await this.studiosService.updateStudio(editStudiosDto, id);
  }


  @Patch(':id') 
  async deleteUser(@Param('id') id:number) {
    return await this.studiosService.deleteStudio(id);
  }
}