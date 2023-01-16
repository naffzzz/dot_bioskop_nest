import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/service/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from '../dto/auth.dto';
import { Users } from 'src/domains/users/entity/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { jwtConstants } from '../constants';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async login(authDto : AuthDto): Promise<{ access_token: string }>  {
    const payload = { email: authDto.email, password: authDto.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signIn(authDto: AuthDto): Promise<{ accessToken: string }> {
    const { email, password } = authDto;
    const user = await this.usersRepository.findOne({ where: { 'email': email, 'password' : password } });
    if (user) {
      const payload = { email: authDto.email, password: authDto.password };
      const accessToken: string = await this.jwtService.signAsync(payload, {secret: jwtConstants.secret});
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please enter valid credentials');
    }
  }
}