import { Get, Controller, Post, Put, Patch, Body, Param } from '@nestjs/common';
import { AddUserDto } from '../dto/add-user.dto';
import { UsersService } from '../service/users.service';
import { EditUserDto } from '../dto/edit-user.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(
    private userService: UsersService,
  ) {}

  @Get(':id') 
  async find(@Param('id') id:number) {
    return await this.userService.findOne(id) ;
  }

  @Get() 
  async findAll() {
    return await this.userService.findAll();
  }

  @Post() 
  async addUser(@Body() addUserDto: AddUserDto) {
    return await this.userService.createUser(addUserDto);

  }

  @Put(':id') 
  async editUser(@Body() editUserDto: EditUserDto, @Param('id') id:number) {
    return await this.userService.updateUser(editUserDto, id);
  }


  @Patch(':id') 
  async deleteUser(@Param('id') id:number) {
    return await this.userService.deleteUser(id);
  }
}