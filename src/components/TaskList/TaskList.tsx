import { IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Task from '../Task/Task';
import { TaskListProps } from './TaskList.props';

const HeaderWrapperStyled = styled('div')({
	display: 'flex',
	alignItems: 'center',
	textAlign: 'left',
	justifyContent: 'flex-start',
	padding: '5px 25px',
});

const ListWithAllTasks = ({ tasks, setTasks }: TaskListProps) => {
	return (
		<div>
			<HeaderWrapperStyled>
				<p style={{ width: '20%' }}>Type</p>
				<p style={{ width: '50%' }}>description</p>
				<p style={{ width: '20%' }}>Time to do</p>
				<div style={{ width: '10%' }}></div>
			</HeaderWrapperStyled>
			{!!tasks.length && tasks.map((task, index) => <Task key={index} task={task} />)}
		</div>
	);
};

export default ListWithAllTasks;
