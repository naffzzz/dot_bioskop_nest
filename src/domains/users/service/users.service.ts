import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { IsNull, Not, Repository } from 'typeorm';
import { Users } from '../entity/users.entity';
import { AddUserDto } from '../dto/add-user.dto';
import { EditUserDto } from '../dto/edit-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async createUser(addUserDto : AddUserDto): Promise<Users> {
    const user = new Users();
    user.name = addUserDto.name;
    user.email = addUserDto.email;
    user.password = addUserDto.password;

    user.avatar = addUserDto.avatar;
    user.isAdmin = addUserDto.isAdmin;
    user.created_at = new Date();

    return await this.usersRepository.save(user);

  }

  async updateUser(addUserDto : EditUserDto, id: number): Promise<Users> {
    const user = await this.findOne(id);
    
    user.name = addUserDto.name;
    user.email = addUserDto.email;
    user.password = addUserDto.password;
    
    user.avatar = addUserDto.avatar;
    user.isAdmin = addUserDto.isAdmin;
    user.updated_at = new Date();

    await this.usersRepository.update(id, user);

    return user;

  }

  async deleteUser(id: number): Promise<Users> {
    const user = await this.findOne(id);

    user.deleted_at = new Date();

    await this.usersRepository.update(id, user);

    return user;

  }

  async findOne(id: number): Promise<Users> {
    return await this.usersRepository.findOneByOrFail({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}