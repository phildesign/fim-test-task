import { IconButton, Box, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { TaskProps } from './Task.props';

const TaskStyled = styled('div')({
	display: 'grid',
	gridTemplateColumns: '200px 1fr 200px 150px',
	gap: '20px',
	alignItems: 'center',
	backgroundColor: '#a1a5a536',
	borderRadius: '10px',
	boxShadow: '0px 14px 8px -8px rgba(34, 60, 80, 0.32)',
	padding: '15px 20px',
	textAlign: 'left',
});

const TaskItemLastStyled = styled('div')({
	display: 'flex',
	justifyContent: 'flex-end',
});

const Task = ({ type, description, timeToDo, customEvent }: TaskProps) => {
	const handleClickRemove = () => {
		if (customEvent) {
			customEvent();
		}
	};

	return (
		<TaskStyled>
			<Box>{type}</Box>
			<Box>{description}</Box>
			<Box>{timeToDo}</Box>
			<TaskItemLastStyled>
				<IconButton
					aria-label="close"
					sx={{
						color: (theme) => theme.palette.grey[500],
					}}
					onClick={handleClickRemove}>
					<CloseIcon />
				</IconButton>
			</TaskItemLastStyled>
		</TaskStyled>
	);
};

export default Task;
