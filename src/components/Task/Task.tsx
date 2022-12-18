import React from 'react';
import { IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { TaskProps } from './Task.props';

const ItemWrapperStyled = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	backgroundColor: 'lightgrey',
	marginBottom: 10,
	borderRadius: 15,
	boxShadow: '10px, 10px, 10px grey',
	padding: '5px 25px',
	textAlign: 'left',
});

const Task = ({ task, ...other }: TaskProps) => {
	return (
		<>
			<ItemWrapperStyled>
				<p style={{ width: '20%', fontSize: 20 }}>{task.type}</p>
				<p style={{ width: '50%' }}>{task.description}</p>
				<p style={{ width: '20%' }}>{task.timeToDo}</p>
				<div style={{ width: '10%' }}>
					<IconButton
						aria-label="close"
						sx={{
							color: (theme) => theme.palette.grey[500],
						}}>
						<CloseIcon />
					</IconButton>
				</div>
			</ItemWrapperStyled>
		</>
	);
};

export default Task;
