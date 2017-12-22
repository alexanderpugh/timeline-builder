const defaultState = {
  data: {
    name: '',
    author: '',
    displayImage: '',
    id: null,
    timelineEntries: []
  },
  isEditMode: false,
  isLoading: false,
  isSaving: false,
  isError: false,
  uploadingImage: false,
  uploadingImageError: false
};

const timeline = (state = defaultState, action) => {
  switch (action.type) {
    case 'TIMELINE_IS_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'TIMELINE_IS_SAVING':
      return { ...state, isSaving: action.isSaving };

    case 'TIMELINE_IS_ERROR':
      return { ...state, isError: action.isError };

    case 'TIMELINE_IS_EDIT_MODE':
      return { ...state, isEditMode: action.isEditMode };

    case 'TIMELINE_EDIT_NAME':
      return { ...state, data: { ...state.data, name: action.name } };

    case 'TIMELINE_EDIT_AUTHOR':
      return { ...state, data: { ...state.data, author: action.author } };

    case 'TIMELINE_EDIT_DISPLAY_IMAGE':
      return { ...state, data: { ...state.data, displayImage: action.displayImage } };

    case 'TIMELINE_DISPLAY_IMAGE_UPLOADING':
      return { ...state, uploadingImage: action.uploadingImage };

    case 'TIMELINE_DISPLAY_IMAGE_UPLOAD_ERROR':
      return { ...state, uploadingImageError: action.uploadingImageError };

    case 'TIMELINE_SET_DATA':
      return { ...state, data: action.data }

    case 'TIMELINE_RESET':
      return defaultState

    default:
      return state;
  }
};

export default timeline;
