import { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, styled } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { orderBy } from 'lodash';

import Task from '../Task/Task';
import { TaskListProps } from './TaskList.props';
import { SortEnum } from '../../interfaces/mock.interface';

const TaskListStyled = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: '15px',
});

const TaskListHeaderStyled = styled('div')({
	display: 'grid',
	gridTemplateColumns: '200px 1fr 200px 150px',
	gap: '20px',
	alignItems: 'center',
	justifyContent: 'flex-start',
	textAlign: 'left',
	padding: '0 5px',
});

const TaskListWrapperStyled = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: '15px',
});

const TaskListEmptyStyled = styled('div')({
	width: '100%',
	textAlign: 'center',
	borderTop: '1px solid #000',
	paddingTop: '20px',
});

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
	const [sort, setSort] = useState<SortEnum>(SortEnum.ASC);

	const sortableList = () => {
		return orderBy(tasks, 'timeToDo', sort);
	};

	useEffect(() => {
		setTasks(sortableList);
	}, [sort]);

	const selectSort = (event: SelectChangeEvent) => {
		setSort(event.target.value as SortEnum);
	};

	const removeTask = (index: number) => {
		setTasks(
			tasks.filter((item, itemIndex) => {
				return index !== itemIndex;
			}),
		);
	};

	return (
		<TaskListStyled>
			<TaskListHeaderStyled>
				<Box>Type</Box>
				<Box>Description</Box>
				<Box>Time to do</Box>
				<FormControl fullWidth>
					<InputLabel>Sort by</InputLabel>
					<Select value={sort} label="Sort by" onChange={selectSort}>
						<MenuItem value={'desc'}>More time</MenuItem>
						<MenuItem value={'asc'}>Less time</MenuItem>
					</Select>
				</FormControl>
			</TaskListHeaderStyled>
			{tasks.length ? (
				<TaskListWrapperStyled>
					{tasks.map((task, index) => (
						<Task key={index} {...task} customEvent={() => removeTask(index)} />
					))}
				</TaskListWrapperStyled>
			) : (
				<TaskListEmptyStyled>Add tasks to the list</TaskListEmptyStyled>
			)}
		</TaskListStyled>
	);
};

export default TaskList;
