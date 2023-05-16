import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
	@Post()
	create(): string {
		return 'This add a new user';
	}

	@Get()
	findAll(): string {
		return 'This return all users';
	}
}
