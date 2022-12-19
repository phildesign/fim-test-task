export interface Mock {
	type: string;
	description: string;
	timeToDo?: number;
}

export enum SortEnum {
	DESC = 'desc',
	ASC = 'asc',
}
