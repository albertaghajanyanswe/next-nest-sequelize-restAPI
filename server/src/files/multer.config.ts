import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerOptions = {
  storage: diskStorage({
    destination: './uploads', // Define the destination directory for uploaded files
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const fileExtension = extname(file.originalname);
      callback(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
  }),
};