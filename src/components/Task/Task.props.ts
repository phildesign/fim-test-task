import { Mock } from '../../interfaces/mock.interface';

export interface TaskProps extends Mock {
	customEvent?: () => void;
}
