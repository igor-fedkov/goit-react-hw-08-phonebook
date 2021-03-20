import PropTypes from 'prop-types';
import { Component } from 'react';

import { Form, Input, StyledButton, InputContainer } from './InputForm.css';

class InputForm extends Component {
	static propTypes = {
		name: PropTypes.string,
		number: PropTypes.string,
	}
	
	constructor(props) {
		super(props);

		const { fields } = this.props;    
		const stateObjects = fields.reduce((acc, { name, startValue }) => {
			acc[name] = startValue;
			return acc;
		}, {})
		
		this.state = { ...stateObjects };
	}

	onInputChange = event => {
    const { name, value } = event.target;
		this.setState(
      { [name]: value }
    )
	}

	onSubmit = event => {
		event.preventDefault();

		const { fields, onSubmitForm } = this.props;
		
		if (onSubmitForm(this.state)) {
			const stateObjects = fields.reduce((acc, { name, startValue }) => {
				acc[name] = startValue;
				return acc;
			}, {})
			this.setState(stateObjects);
		}
	}

	render() {
		const { fields, btnCaption } = this.props;

		return (
      <Form onSubmit={this.onSubmit}>
        {
					fields.map(({ label, type, name }, index) =>
						<InputContainer key={index}>
							<Input								
								type={type}
								name={name}
								value={this.state[name]}
								onChange={this.onInputChange}
								label={label}
								variant="outlined"
							/>
						</InputContainer>
          )
        }

				<StyledButton
					type="submit"
					color="primary"
					variant="contained"
				>
					{btnCaption}
				</StyledButton>
			</Form>
		)
	}
}

InputForm.propTypes = {
	fields: PropTypes.array, 
	onSubmit: PropTypes.func
}

export default InputForm;