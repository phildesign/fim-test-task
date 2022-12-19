import { styled } from '@mui/material';

import Task from '../Task/Task';
import { TaskListProps } from './TaskList.props';

const TaskListStyled = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: 15,
});

const TaskListHeaderStyled = styled('div')({
	display: 'grid',
	gridTemplateColumns: '200px 1fr 200px 150px',
	alignItems: 'center',
	textAlign: 'left',
	justifyContent: 'flex-start',
	padding: '0 20px',
	gap: '20px',
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
