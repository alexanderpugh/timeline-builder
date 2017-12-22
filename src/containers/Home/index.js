import { connect } from 'react-redux';

import { timelinesFetchData } from '../../actions/timelines.actions';
import Timelines from './Timelines';

const mapStateToProps = state => ({
  timelines: state.timelines.data || [],
  serverLoaded: Boolean(state.timelines.serverLoaded),
  isLoading: Boolean(state.timelines.isLoading),
  isError: Boolean(state.timelines.isError)
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(timelinesFetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timelines);
