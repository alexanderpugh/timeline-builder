import _ from 'lodash';

import db from '../config/db';

export const createTimeline = async (props) => {
  try {
    if (!(_.has(props, 'name') && _.has(props, 'displayImage') && _.has(props, 'author'))) {
      throw new Error('createTimeline needs a name, displayImage and an author');
    }

    return await db.timelines.create({ ...props });
  } catch (error) {
    throw error;
  }
};

export const createEntry = async (props) => {
  try {
    if (!(
      _.has(props, 'name') &&
      _.has(props, 'displayImage') &&
      _.has(props, 'date') &&
      _.has(props, 'timelineId') &&
      _.has(props, 'description')
    )) {
      throw new Error('createEntry needs a name, displayImage, a date, a timelineId and a description');
    }

    return await db.timelineEntries.create({ ...props });
  } catch (error) {
    throw error;
  }
};

export const fetchAll = async () => {
  try {
    return await db.timelines.findAll({});
  } catch (error) {
    throw error;
  }
};

export const fetchSingle = async id => {
  try {
    const timeline = await db.timelines.findOne({
      where: { id },
      order: [ [ { model: db.timelineEntries }, 'date', 'ASC' ] ],
      include: { model: db.timelineEntries }
    });
    if (_.isNull(timeline)) {
      throw new Error('ERROR: timeline does not exist');
    }
    return timeline;
  } catch (error) {
    throw error;
  }
};
