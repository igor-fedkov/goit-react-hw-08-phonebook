import PropTypes from 'prop-types';

import { Input, Container, InputContainer } from './Filter.css';

const Filter = ({ filter, changeFilter }) => {
	return (
		<Container>
			<InputContainer>
				<Input
					type="text"
					name="filter"
					value={filter}
					onChange={changeFilter}
					label="Поиск контактов по имени"
					variant="outlined"
				/>
			</InputContainer>
		</Container>
	)
}

Filter.propTypes = {
	filter: PropTypes.string,
	changeFilter: PropTypes.func
}

export default Filter;