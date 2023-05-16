import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserDto } from './user/dto/user.dto';

@Controller('user')
export class AppController {
	constructor(private userService: UserService) {}

	@Post('/user/create')
	create(@Body() user: UserDto): UserDto {
		return this.userService.create(user);
	}

	@Get('/user/')
	findAll(): UserDto[] {
		return this.userService.findAll();
	}

	@Get('/user/:id')
	findOne(@Param('id') id: number): UserDto {
		return this.userService.findOneById(id);
	}

	@Put('/user/:id')
	update(@Param('id') id: number) {
		return 'This will update a user by id';
	}

	@Delete('/user/:id')
	remove(@Param('id') id: number) {
		return 'This will remove a user by id';
	}
}
