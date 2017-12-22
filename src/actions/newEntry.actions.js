import axios from 'axios';

import {
  fileUploads as fileUploadUrl,
  timelines as timelinesUrl
} from '../config/api';

export const resetAll = () => ({
  type: 'ENTRY_RESET'
});

export const editDisplayImage = displayImage => ({
  type: 'ENTRY_EDIT_DISPLAY_IMAGE',
  displayImage
});

export const displayImageIsUploading = uploadingImage => ({
  type: 'DISPLAY_IMAGE_IS_UPLOADING',
  uploadingImage
});

export const entryIsSaving = isSaving => ({
  type: 'ENTRY_IS_SAVING',
  isSaving
});

export const entryHasError = isError => ({
  type: 'ENTRY_IS_ERROR',
  isError
});

export const editName = name => ({
  type: 'ENTRY_EDIT_NAME',
  name
});

export const displayImageUploadError = uploadingImageError => ({
  type: 'ENTRY_DISPLAY_IMAGE_UPLOAD_ERROR',
  uploadingImageError
});

export const editDate = date => ({
  type: 'ENTRY_EDIT_DATE',
  date
});

export const editDescription = description => ({
  type: 'ENTRY_EDIT_DESCRIPTION',
  description
});

export const entrySaved = hasSaved => ({
  type: 'ENTRY_HAS_SAVED',
  hasSaved
});

export const displayImageUploadFileRequest = file => {
  const data = new FormData();
  data.append('file', file);

  return (dispatch) => {
    dispatch(displayImageIsUploading(true));

    axios.post(fileUploadUrl, data)
      .then(response => {
        return response.data.success ?
          dispatch(editDisplayImage(response.data.data)) :
          dispatch(displayImageUploadError(response.data.message));
      })
      .catch(error => dispatch(displayImageUploadError(error)))
      .then(() => dispatch(displayImageIsUploading(false)));
  };
};

export const saveNewEntrty = props => {
  return (dispatch) => {
    dispatch(entryIsSaving(true));

    axios.post(`${timelinesUrl}/${props.timelineId}`, { ...props })
      .then(response => {
        if (response.data.success) {
          dispatch(entrySaved(true));
          dispatch(resetAll());
        } else {
          dispatch(entryHasError(false));
        }
      })
      .catch(error => dispatch(entryHasError(false)))
      .then(() => dispatch(entryIsSaving(false)));
  };
};
