import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}
	@Post()
	create(@Body() user) {
		return this.userService.create(user);
	}

	@Get()
	findAll(): string {
		return 'This return all users';
	}
}
