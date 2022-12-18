import { Dispatch, SetStateAction } from 'react';
import { Mock } from '../../interfaces/mock.interface';

export interface TaskListProps {
	tasks: Mock[];
	setTasks: Dispatch<SetStateAction<Mock[]>>;
}
