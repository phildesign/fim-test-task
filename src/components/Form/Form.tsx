import { useState, BaseSyntheticEvent } from 'react';
import { Button, styled } from '@mui/material';

import { FormProps } from './Form.props';
import { Mock } from '../../interfaces/mock.interface';

const InputStyled = styled('input')({
	display: 'block',
	border: '1px solid black',
	padding: 10,
	borderRadius: 5,
	marginTop: 10,
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
		<div className="form-wrapper">
			<form action="#" className="form">
				<label htmlFor="type">
					Task Type
					<InputStyled
						value={formState.type}
						onChange={handleInputChange}
						type="text"
						name="type"
						id="type"
					/>
				</label>
				<label htmlFor="description">
					Description
					<InputStyled
						value={formState.description}
						onChange={handleInputChange}
						type="text"
						name="description"
					/>
				</label>
				<label htmlFor="timeToDo">
					Time to do
					<InputStyled
						value={formState.timeToDo}
						onChange={handleInputChange}
						type="text"
						name="timeToDo"
					/>
				</label>

				<Button variant="outlined" type="submit" onClick={handleSubmit}>
					Add
				</Button>
			</form>
		</div>
	);
};

export default Form;
