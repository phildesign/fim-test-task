import { useState, BaseSyntheticEvent } from 'react';
import { Button, styled, TextField } from '@mui/material';

import { FormProps } from './Form.props';
import { Mock } from '../../interfaces/mock.interface';

const FormStyled = styled('form')({
	display: 'flex',
	gap: '20px',
	justifyContent: 'space-between',
	borderBottom: '1px solid #000',
	paddingBottom: '30px',
	marginBottom: '30px',
});

const FormFieldsStyled = styled('div')({
	display: 'flex',
	gap: '20px',
});

const Form = ({ setTasks }: FormProps) => {
	const initialFormState = {
		type: '',
		description: '',
		timeToDo: 0,
	};

	const [formState, setFormState] = useState<Mock>(initialFormState);

	const handleInputChange = (event: BaseSyntheticEvent) => {
		const target = event.target;
		const name = target.name;
		setFormState((prevState) => ({
			...prevState,
			[name]: name === 'timeToDo' ? +target.value : target.value,
		}));
	};

	const handleSubmit = (event: BaseSyntheticEvent) => {
		event.preventDefault();
		setTasks((prevState) => {
			return [...prevState, formState];
		});
		setFormState(initialFormState);
	};

	return (
		<FormStyled onSubmit={handleSubmit}>
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
			</FormFieldsStyled>
			<Button variant="contained" color="inherit" type="submit">
				Add
			</Button>
		</FormStyled>
	);
};

export default Form;
