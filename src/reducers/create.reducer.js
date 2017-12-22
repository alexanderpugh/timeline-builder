const defualtState = {
  name: '',
  displayImage: {
    uploading: false,
    isError: false,
    path: ''
  },
  author: '',
  isSaving: false,
  isError: false,
  hasSaved: false,
  id: null
};

const createReducer = (state = defualtState, action) => {
  switch (action.type) {
    case 'RESET_ALL':
      return defualtState;

    case 'CHANGE_NAME':
      return { ...state, name: action.name };

    case 'CHANGE_AUTHOR':
      return { ...state, author: action.author };

    case 'CHANGE_DISPLAY_IMAGE_PATH':
      return { ...state, displayImage: { ...state.displayImage, path: action.displayImagePath } };

    case 'DISPLAY_IMAGE_IS_UPLOADING':
      return { ...state, displayImage: { ...state.displayImage, uploading: action.isUploading } };

    case 'DISPLAY_IMAGE_UPLOAD_IS_ERROR':
      return { ...state, displayImage: { ...state.displayImage, isError: action.isError } };

    case 'TIMELINE_IS_SAVING':
      return { ...state, isSaving: action.isSaving };

    case 'TIMELINE_HAS_ERROR':
      return { ...state, isError: action.isError };

    case 'TIMELINE_HAS_SAVED':
      return { ...state, hasSaved: action.hasSaved };

    case 'SET_TIMELINE_ID':
      return { ...state, id: action.id };

    default:
      return state;
  }
};

export default createReducer;
