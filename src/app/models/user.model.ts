export class User {
	id: number;
	name: string;
	username: string;
	email: string;
	website: string;
	company: {
		name: string;
	}
	
}

export class UserPost {	
	userId:number;
	title: string;
	body: string;
	
}
