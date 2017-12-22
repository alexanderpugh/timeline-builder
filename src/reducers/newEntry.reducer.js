const defaultState = {
  data: {
    name: '',
    displayImage: '',
    date: '',
    description: ''
  },
  hasSaved: false,
  isSaving: false,
  isError: false,
  uploadingImage: false,
  uploadingImageError: false
};

const newEntry = (state = defaultState, action) => {
  switch (action.type) {
    case 'ENTRY_IS_SAVING':
      return { ...state, isSaving: action.isSaving };

    case 'ENTRY_HAS_SAVED':
      return { ...state, hasSaved: action.hasSaved };

    case 'ENTRY_IS_ERROR':
      return { ...state, isError: action.isError };

    case 'ENTRY_EDIT_NAME':
      return { ...state, data: { ...state.data, name: action.name } };

    case 'ENTRY_EDIT_DISPLAY_IMAGE':
      return { ...state, data: { ...state.data, displayImage: action.displayImage } };

    case 'ENTRY_EDIT_DESCRIPTION':
      return { ...state, data: { ...state.data, description: action.description } };

    case 'ENTRY_EDIT_DATE':
      return { ...state, data: { ...state.data, date: action.date } };

    case 'ENTRY_DISPLAY_IMAGE_UPLOADING':
      return { ...state, uploadingImage: action.uploadingImage };

    case 'ENTRY_DISPLAY_IMAGE_UPLOAD_ERROR':
      return { ...state, uploadingImageError: action.uploadingImageError };

    case 'ENTRY_RESET':
      return defaultState

    default:
      return state;
  }
};

export default newEntry;
