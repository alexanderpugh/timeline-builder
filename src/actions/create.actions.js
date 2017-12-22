import axios from 'axios';

import {
  fileUploads as fileUploadUrl,
  timelines as timelinesUrl
} from '../config/api';

export const resetAll = () => ({
  type: 'RESET_ALL'
});

export const changeDisplayImagePath = displayImagePath => ({
  type: 'CHANGE_DISPLAY_IMAGE_PATH',
  displayImagePath
});

export const displayImageIsUploading = isUploading => ({
  type: 'DISPLAY_IMAGE_IS_UPLOADING',
  isUploading
});

export const displayImageUploadFail = isError => ({
  type: 'DISPLAY_IMAGE_UPLOAD_IS_ERROR',
  isError
});

export const changeAuthor = author => ({
  type: 'CHANGE_AUTHOR',
  author
});

export const changeName = name => ({
  type: 'CHANGE_NAME',
  name
});

export const savingTimeline = isSaving => ({
  type: 'TIMELINE_IS_SAVING',
  isSaving
});

export const timelineSaveFail = isError => ({
  type: 'TIMELINE_HAS_ERROR',
  isError
});

export const timelineHasSaved = hasSaved => ({
  type: 'TIMELINE_HAS_SAVED',
  hasSaved
});

export const setTimelineId = id => ({
  type: 'SET_TIMELINE_ID',
  id
});

export const displayImageUploadFileRequest = file => {
  const data = new FormData();
  data.append('file', file);

  return (dispatch) => {
    dispatch(displayImageIsUploading(true));

    axios.post(fileUploadUrl, data)
      .then(response => {
        return response.data.success ?
          dispatch(changeDisplayImagePath(response.data.data)) :
          dispatch(displayImageUploadFail(response.data.message));
      })
      .catch(error => dispatch(displayImageUploadFail(error)))
      .then(() => dispatch(displayImageIsUploading(false)));
  };
};

export const saveNewTimeline = props => {
  return (dispatch) => {
    dispatch(savingTimeline(true));

    axios.post(timelinesUrl, { ...props })
      .then(response => {
        if (response.data.success) {
          dispatch(setTimelineId(response.data.data.id));
          dispatch(timelineHasSaved(true));
          dispatch(resetAll());
        } else {
          dispatch(timelineSaveFail(false));
        }
      })
      .catch(error => dispatch(timelineSaveFail(false)))
      .then(() => dispatch(savingTimeline(false)));
  };
};
