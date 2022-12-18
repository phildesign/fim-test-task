import { Dispatch, SetStateAction } from 'react';
import { Mock } from '../../interfaces/mock.interface';

export interface FormProps {
	setTasks: Dispatch<SetStateAction<Mock[]>>;
}
