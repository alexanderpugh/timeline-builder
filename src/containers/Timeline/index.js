import { connect } from 'react-redux';

import Timeline from './Timeline';
import * as actions from '../../actions/timeline.actions';
import * as newEntryActions from '../../actions/newEntry.actions';

const mapStateToProps = state => ({
  id: state.timeline.data.id,
  name: state.timeline.data.name,
  author: state.timeline.data.author,
  displayImage: state.timeline.data.displayImage,
  isError: state.timeline.isError,
  entries: state.timeline.data.timelineEntries,
  newEntrySaved: state.newEntry.hasSaved
});

const mapDispatchToProps = dispatch => ({
  resetAll: () => dispatch(actions.timelineResetAll()),
  fetchTimeline: id => dispatch(actions.timelineFetchData(id)),
  toogleEditMode: isEditMode => dispatch(actions.timelineIsEditMode(isEditMode)),
  resetNewEntry: () => dispatch(newEntryActions.resetAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
