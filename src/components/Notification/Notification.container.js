import { connect } from 'react-redux';

import { globalDataSelectors, globalDataActions } from '../../redux';

import Notification from './Notification';

const mapStateToProps = state => ({
  errorText: globalDataSelectors.getErrorText(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
    deleteErrorText: () => dispatch(globalDataActions.deleteErrorText()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);