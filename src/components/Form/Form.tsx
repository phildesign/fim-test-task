import { useState, BaseSyntheticEvent } from 'react';
import { Button, styled, TextField } from '@mui/material';

import { FormProps } from './Form.props';
import { Mock } from '../../interfaces/mock.interface';

const FormStyled = styled('div')({
	borderBottom: '1px solid #000',
	marginBottom: '30px',
});

const FormFieldsStyled = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: '30px',
});

const Form = ({ setTasks }: FormProps) => {
	const [formState, setFormState] = useState<Mock>({
		type: '',
		description: '',
		timeToDo: 0,
	});

	const handleInputChange = (event: BaseSyntheticEvent) => {
		const target = event.target;
		const name = target.name;
		setFormState((prevState) => ({ ...prevState, [name]: target.value }));
	};

	const handleSubmit = (event: BaseSyntheticEvent) => {
		event.preventDefault();
		setTasks((prevState) => {
			return [...prevState, formState];
		});
	};

	return (
		<FormStyled onClick={handleSubmit}>
			<FormFieldsStyled>
				<TextField
					required
					label="Task Type"
					color="primary"
					name="type"
					value={formState.type}
					onChange={handleInputChange}
				/>
				<TextField
					required
					label="Description"
					name="description"
					value={formState.description}
					onChange={handleInputChange}
				/>
				<TextField
					label="Time to do"
					type="number"
					name="timeToDo"
					value={formState.timeToDo}
					onChange={handleInputChange}
				/>
				<Button variant="outlined" type="submit">
					Add
				</Button>
			</FormFieldsStyled>
		</FormStyled>
	);
};

export default Form;
