import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';

@Controller('users')
export class UserController {
	constructor(private userService: UserService) {}
	@Post()
	create(@Body() user: UserDto): Promise<UserEntity> {
		return this.userService.create(user);
	}

	@Get()
	findAll(): Promise<UserEntity[]> {
		return this.userService.findAll();
	}

	@Get('/users/:id')
	findOne(@Param('id') id: string): Promise<UserEntity[]> {
		return this.userService.findOneById(id);
	}

	@Put('/users/:id')
	update(@Param('id') id: string) {
		return this.userService.
	}

	@Delete('/users/:id')
	remove(@Param('id') id: string) {
		return 'This will remove a user by id';
	}
}
