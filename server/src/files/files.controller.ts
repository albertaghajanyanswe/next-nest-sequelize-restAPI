// src/upload/file.controller.ts
import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { join } from 'path';

@ApiTags('Files')
// @ApiBearerAuth()
@Controller('files')
export class FileController {
  @Get(':filename')
  async serveFile(@Param('filename') filename: string, @Res() res: Response) {
    const file = join(process.cwd(), 'uploads', filename);
    res.sendFile(file);
  }
}
