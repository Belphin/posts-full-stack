export interface IPost {
	_id: string;
	title: string;
	body: string;
}

export interface IPosts {
	maxCount: number;
	posts: IPost[];
}
