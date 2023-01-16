import { Module } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { JwtStrategy } from '../jwt.strategy';
import { UsersModule } from '../../users/module/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/domains/users/entity/users.entity';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([Users])
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}