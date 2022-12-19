import { styled } from '@mui/material';

import Task from '../Task/Task';
import { TaskListProps } from './TaskList.props';

const TaskListStyled = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: 15,
});

const TaskListHeaderStyled = styled('div')({
	display: 'flex',
	alignItems: 'center',
	textAlign: 'left',
	justifyContent: 'flex-start',
	padding: '5px 25px',
});

const TaskList = ({ tasks }: TaskListProps) => {
	return (
		<TaskListStyled>
			<TaskListHeaderStyled>
				<div>Type</div>
				<div>description</div>
				<div>Time to do</div>
			</TaskListHeaderStyled>
			{tasks.length && tasks.map((task, index) => <Task key={index} {...task} />)}
		</TaskListStyled>
	);
};

export default TaskList;
