import axios from 'axios';

import {
  fileUploads as fileUploadUrl,
  timelines as timelinesUrl
} from '../config/api';

export const timelineIsLoading = isLoading => ({
  type: 'TIMELINE_IS_LOADING',
  isLoading
});

export const timelineIsSaving = isSaving => ({
  type: 'TIMELINE_IS_SAVING',
  isSaving
});

export const timelineIsError = isError => ({
  type: 'TIMELINE_IS_ERROR',
  isError
});

export const timelineIsEditMode = isEditMode => ({
  type: 'TIMELINE_IS_EDIT_MODE',
  isEditMode
});

export const timelineEditName = name => ({
  type: 'TIMELINE_EDIT_NAME',
  name
});

export const timelineEditAuthor = author => ({
  type: 'TIMELINE_EDIT_AUTHOR',
  author
});

export const timelineEditDisplayImage = displayImage => ({
  type: 'TIMELINE_EDIT_DISPLAY_IMAGE',
  displayImage
});

export const timelineDisplayImageUploading = uploadingImage => ({
  type: 'TIMELINE_DISPLAY_IMAGE_UPLOADING',
  uploadingImage
});

export const timelineDisplayImageError = uploadingImageError => ({
  type: 'TIMELINE_DISPLAY_IMAGE_UPLOAD_ERROR',
  uploadingImageError
});

export const timelineSetData = data => ({
  type: 'TIMELINE_SET_DATA',
  data
});

export const timelineResetAll = () => ({
  type: 'TIMELINE_RESET'
});

export const timelineFetchData = id => {
  return dispatch => {
    dispatch(timelineIsLoading(true));

    axios.get(`${timelinesUrl}/${id}`)
      .then(response => {
        dispatch(timelineIsLoading(false));

        if (response.data.success) {
          dispatch(timelineSetData(response.data.data));
        } else {
          dispatch(timelineIsError(true));
        }
      })
      .catch(() => dispatch(timelineIsError(true)))
      .then(() => dispatch(timelineIsLoading(false)));
  };
};
