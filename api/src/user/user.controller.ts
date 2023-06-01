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
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

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

	@Get('/:id')
	findOne(@Param('id') id: string): Promise<UserEntity[]> {
		return this.userService.findOneById(id);
	}

	@Put('/:id')
	update(@Param('id') id: string, @Body() user: UserDto) {
		return this.userService.update(id, { ...user });
	}

	@Delete('/:id')
	remove(@Param('id') id: string) {
		return this.userService.remove(id);
	}
}
