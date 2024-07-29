import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ROLE_REPOSITORY, SEQUELIZE, STATIC_FILES_REPOSITORY } from 'src/shared/constants';
import { StaticFiles } from './staticFiles.model';
import { CreateStaticFileDto } from './dto/staticFiles.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class RolesService {
  constructor(
    @Inject(STATIC_FILES_REPOSITORY) private staticFilesRepository: typeof StaticFiles,
    @Inject(SEQUELIZE) private readonly sequelize: Sequelize,
  ) { }

  async updateStaticFile({ names, userId, productId, fileType }: { names: string[], userId: number, productId: number, fileType: string }) {
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      const res = await this.staticFilesRepository.update(
        { productId, userId },
        {
          where: { name: names },
          transaction
        },
      )
      transaction.commit();
      return res;
    } catch (err) {
      if (transaction) {
        transaction.rollback();
      }
    }
  }
}
