import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '../../assets/uploads/'),
  filename(req, file, cb) {
    cb(null, `${
      new Date().toISOString().toLowerCase().replace(/ /g, '-').replace(/:/g, '-')
    }-${file.originalname}`);
  }
});

const upload = multer({ storage });

export default upload.single('file');
