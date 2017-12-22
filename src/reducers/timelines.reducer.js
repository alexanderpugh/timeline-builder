const defaultState = {
  isLoading: false,
  isError: false,
  data: [],
  serverLoaded: false
};

const timelines = (state = defaultState, action) => {
  switch (action.type) {
    case 'TIMELINES_ARE_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'TIMELINES_HAS_ERROR':
      return { ...state, isError: action.isError };

    case 'TIMELINES_FETCH_SUCCESS':
      return { ...state, data: action.data };

    default:
      return state;
  }
};

export default timelines;
