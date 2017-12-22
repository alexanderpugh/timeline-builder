import * as timelineService from '../../services/timelines.service';
import jsonResponse from '../../utils/jsonResponse';
import { fileMimeValid, deleteFile } from '../../utils/fileupload.util';
import { appRoot } from '../../config';

export const fetchAll = async ({ req, res, next }) => {
  const response = jsonResponse();

  try {
    response.data = await timelineService.fetchAll();
  } catch (error) {
    response.message = 'Unable to fetch date';
    response.success = false;
  } finally {
    res.json(response);
  }
};

export const fetchSingle = async ({ req, res, next }) => {
  const response = jsonResponse();
  const id = req.params.id;

  try {
    if (!Boolean(id)) {
      throw new Error('ERROR: id is not valid');
    }

    response.data = await timelineService.fetchSingle(id);
  } catch (error) {
    response.message = 'Unable to fetch date';
    response.success = false;
  } finally {
    res.json(response);
  }
};

export const createTimeline = async ({ req, res, next }) => {
  const response = jsonResponse();

  try {
    response.data = await timelineService.createTimeline({
      name: req.body.name,
      author: req.body.author,
      displayImage: req.body.displayImage
    });
  } catch (error) {
    response.message = 'Unable to create new timeline';
    response.success = false;
  } finally {
    res.json(response);
  }
};

export const createTimelineFormAction = async ({ req, res, next }) => {
  try {
    if (!req.file) {
      throw new Error('ERROR: file not uploaded');
    }

    const file = req.file;

    if (!fileMimeValid(file.mimetype)) {
      await deleteFile(file.path);
      throw new Error('ERROR: only images can be uploaded');
    }
    const { name, author } = req.body;
    const displayImage = `${appRoot}uploads/${file.filename}`;

    const newTimeline = await timelineService.createTimeline({ name, author, displayImage });

    res.redirect(`/view/${newTimeline.id}`);

  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
};

export const createEntry = async ({ req, res, next }) => {
  const response = jsonResponse();
  try {
    response.data = await timelineService.createEntry({
      name: req.body.name,
      description: req.body.description,
      displayImage: req.body.displayImage,
      date: req.body.date,
      timelineId: req.params.id
    });
  } catch (error) {
    response.message = 'Unable to create new Entry';
    response.success = false;
  } finally {
    res.json(response);
  }
};
