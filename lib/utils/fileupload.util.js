import _ from 'lodash';

import { promisify } from 'util';
import fs from 'fs';

export const fileMimeValid = mime => _.includes(['image/jpeg', 'image/png', 'image/gif'], mime);
export const deleteFile = promisify(fs.unlink);
