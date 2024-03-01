import { Controller, Req, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { AuthService } from './auth.service';
import { PostLoginDto, PostLoginGuestDto } from './dto/post-login.dto.ts';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, type: User })
  @Post('auth/postLogin')
  postLogin(@Body() userDto: PostLoginDto) {
    return this.authService.postLogin(userDto);
  }

  @ApiOperation({ summary: 'Login guest' })
  @ApiResponse({ status: 200, type: User })
  @Post('auth/postLogin/guest')
  postLoginGuest(@Body() userDto: PostLoginGuestDto) {
    return this.authService.postLoginGuest(userDto);
  }
}
