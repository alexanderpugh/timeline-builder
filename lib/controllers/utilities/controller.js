import jsonResponse from '../../utils/jsonResponse';
import { fileMimeValid, deleteFile } from '../../utils/fileupload.util';
import { appRoot } from '../../config';

export const fileupload = async ({ req, res, next }) => {
  const response = jsonResponse();
  const file = req.file;
  try {
    if (!req.file) {
      throw new Error('ERROR: file not uploaded');
    }

    if (!fileMimeValid(file.mimetype)) {
      await deleteFile(file.path);
      throw new Error('ERROR: only images can be uploaded');
    }

    response.data = `${appRoot}uploads/${file.filename}`;
  } catch (error) {
    response.message = 'Unable to upload image';
    response.success = false;
  } finally {
    res.json(response);
  }
};
