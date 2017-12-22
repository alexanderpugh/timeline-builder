import { connect } from 'react-redux';

import * as createActions from '../../actions/create.actions';
import Form from './Form';

const mapStateToProps = state => ({
  displayImagePath: state.create.displayImage.path,
  name: state.create.name,
  author: state.create.author,
  id: state.create.id
});

const mapDispatchToProps = dispatch => ({
  handleFileUpload: e => {
    const target = e.target;
    const file = target.files[0];

    dispatch(createActions.displayImageUploadFileRequest(file))
  },

  handleInputChange: e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case 'name':
        dispatch(createActions.changeName(value));
        break;

      case 'author':
        dispatch(createActions.changeAuthor(value));
        break;

      default:
        break;
    }
  },

  handleSubmit: (e, { name, author, displayImage }) => {
    e.preventDefault();
    dispatch(createActions.saveNewTimeline({ name, author, displayImage }))
  },

  handleReset: e => {
    dispatch(createActions.resetAll());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
