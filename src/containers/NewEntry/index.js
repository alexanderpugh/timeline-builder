import { connect } from 'react-redux';

import Form from './Form';
import * as actions from '../../actions/newEntry.actions';

const mapStateToProps = state => ({
  name: state.newEntry.data.name,
  displayImage: state.newEntry.data.displayImage,
  description: state.newEntry.data.description,
  date: state.newEntry.data.date,
  timelineId: state.timeline.data.id,
  isSaving: state.newEntry.isSaving,
  uploadingImageError: state.newEntry.uploadingImageError,
  isError: state.newEntry.isError,
});

const mapDispatchToProps = dispatch => ({
  handleFileUpload: e => {
    const target = e.target;
    const file = target.files[0];

    dispatch(actions.displayImageUploadFileRequest(file))
  },

  handleInputChange: e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case 'name':
        dispatch(actions.editName(value));
        break;

      case 'description':
        dispatch(actions.editDescription(value));
        break;

      case 'date':
        dispatch(actions.editDate(value));
        break;

      default:
        break;
    }
  },

  handleSubmit: (e, { name, description, displayImage, date, timelineId }) => {
    e.preventDefault();
    dispatch(actions.saveNewEntrty({ name, description, displayImage, date, timelineId }))
  },

  resetAll: () => {
    dispatch(actions.resetAll());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
