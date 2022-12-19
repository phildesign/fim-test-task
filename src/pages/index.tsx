import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TaskList from '../components/TaskList/TaskList';
import Form from '../components/Form/Form';

import taskMock from '../mocks/taskMock';
import { Mock } from '../interfaces/mock.interface';

const MainPage = () => {
	const [tasks, setTasks] = useState<Mock[]>(taskMock);

	return (
		<Container sx={{ pt: 5, textAlign: 'left' }}>
			<Typography variant="h4" component="h2" marginBottom={'20px'}>
				Add Task
			</Typography>
			<Form setTasks={setTasks} />
			<Typography variant="h4" component="h2" marginBottom={'20px'}>
				Tasks List
			</Typography>
			<TaskList tasks={tasks} setTasks={setTasks} />
		</Container>
	);
};

export default MainPage;
