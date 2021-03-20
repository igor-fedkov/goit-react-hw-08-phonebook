import { connect } from 'react-redux';

import { phoneBookSelectors, phoneBookActions } from '../../redux';

import Filter from './Filter';

const mapStateToProps = state => ({
  filter: phoneBookSelectors.getFilter(state)
})

const mapDispatchToProps = (dispatch) => ({
	changeFilter: event => dispatch(phoneBookActions.changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);