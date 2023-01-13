import { Get, Controller, Render, Patch, Param, Body, Put, Post } from '@nestjs/common';
import { AddSchedulesDto } from '../dto/add-schedules.dto';
import { EditSchedulesDto } from '../dto/edit-schedules.dto';
import { SchedulesService } from '../service/schedules.service';

@Controller('api/v1/schedules')
export class SchedulesController {
  constructor(
    private schedulesService: SchedulesService,
  ) {}

  @Get(':id') 
  async find(@Param('id') id:number) {
    return await this.schedulesService.findOne(id) ;
  }

  @Get() 
  async findAll() {
    return await this.schedulesService.findAll();
  }

  @Post() 
  async addUser(@Body() addSchedulesDto: AddSchedulesDto) {
    return await this.schedulesService.createSchedule(addSchedulesDto);

  }

  @Put(':id') 
  async editUser(@Body() editSchedulesDto: EditSchedulesDto, @Param('id') id:number) {
    return await this.schedulesService.updateSchedule(editSchedulesDto, id);
  }


  @Patch(':id') 
  async deleteUser(@Param('id') id:number) {
    return await this.schedulesService.deleteSchedule(id);
  }
}