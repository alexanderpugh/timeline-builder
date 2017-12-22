import axios from 'axios';

import { timelines as timelinesUrl } from '../config/api';

export const timelinesAreLoading = isLoading => ({
  type: 'TIMELINES_ARE_LOADING',
  isLoading
});

export const timelinesFetchError = isError => ({
  type: 'TIMELINES_HAS_ERROR',
  isError
});

export const timelinesFetchSuccess = data => ({
  type: 'TIMELINES_FETCH_SUCCESS',
  data
});

export const timelinesFetchData = () => {
  return dispatch => {
    dispatch(timelinesAreLoading(true));

    axios.get(timelinesUrl)
      .then(response => {
        dispatch(timelinesAreLoading(false));
        dispatch(timelinesFetchSuccess(response.data.data));
      })
      .catch(() => dispatch(timelinesFetchError(true)));
  };
};
