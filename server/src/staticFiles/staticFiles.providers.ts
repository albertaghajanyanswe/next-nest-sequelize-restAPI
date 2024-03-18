import { STATIC_FILES_REPOSITORY } from 'src/shared/constants';
import { StaticFiles } from './staticFiles.model';

export const staticFilesProviders = [
  {
    provide: STATIC_FILES_REPOSITORY,
    useValue: StaticFiles,
  },
];
