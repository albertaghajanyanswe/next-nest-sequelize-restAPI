import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PostLoginDto, PostLoginGuestDto } from './dto/post-login.dto.ts';
import { CustomUnauthorizedException } from '../exceptions/unauthorized.exception';
import { UserDto } from 'src/users/dto/user.dto';
import { CustomUserNotActiveException } from 'src/exceptions/userNotActive.exception';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.getUser({ where: { email } });
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    const passwordValid = await this.comparePassword(password, user.password);
    if (user.dataValues && passwordValid) {
      return user.dataValues;
    }
    return null;
  }

  async validatePostUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.getUser({ where: { email } });
    if (!user) {
      throw new NotAcceptableException('Could not find the user.');
    }
    if (!user.isActive) {
      throw new CustomUserNotActiveException();
    }
    const passwordValid = await this.comparePassword(password, user.password);
    if (user.dataValues && passwordValid) {
      return { user: user.dataValues, success: true };
    }
    throw new NotAcceptableException('Could not find the user.');
  }

  async validatePostUserGuest(nickName: string, password: string): Promise<any> {
    const user = await this.usersService.getUser({ where: { nickName } });
    if (!user) {
      throw new NotAcceptableException('Could not find the user.');
    }
    const passwordValid = await this.comparePassword(password, user.password);
    if (user.dataValues && passwordValid) {
      return { user: user.dataValues, success: true };
    }
    return { user: null, success: false };
  }

  async login(user: any): Promise<{ user: UserDto; token: string }> {
    const token = await this.generateToken({ ...user, sub: user.id });
    return { user: { ...user, password: '' }, token };
  }

  async postLogin(user: PostLoginDto): Promise<any> {
    const result = await this.validatePostUser(user.email, user.password);
    if (!result.success) {
      throw new CustomUnauthorizedException();
    }
    const token = await this.generateToken({ ...result.user, sub: result.user.id });
    return { user: { ...result.user, password: '' }, token, success: true };
  }

  async postLoginGuest(user: PostLoginGuestDto): Promise<any> {
    const result = await this.validatePostUserGuest(user.nickName, user.password);
    if (!result.success) {
      throw new CustomUnauthorizedException();
    }
    const token = await this.generateToken({ ...result.user, sub: result.user.id });
    return { user: { ...result.user, password: '' }, token, success: true };
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}
