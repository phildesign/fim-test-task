import { IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { TaskProps } from './Task.props';

const TaskStyled = styled('div')({
	display: 'grid',
	gridTemplateColumns: '200px 1fr 200px 150px',
	gap: '20px',
	alignItems: 'center',
	backgroundColor: 'lightgrey',
	marginBottom: 10,
	borderRadius: 10,
	boxShadow: '10px, 10px, 10px grey',
	padding: '15px 20px',
	textAlign: 'left',
});

const TaskItemLast = styled('div')({
	display: 'flex',
	justifyContent: 'flex-end',
});

const Task = ({ type, description, timeToDo }: TaskProps) => {
	return (
		<TaskStyled>
			<div>{type}</div>
			<div>{description}</div>
			<div>{timeToDo}</div>
			<TaskItemLast>
				<IconButton
					aria-label="close"
					sx={{
						color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
			</TaskItemLast>
		</TaskStyled>
	);
};

export default Task;
