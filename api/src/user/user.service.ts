import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

const _DUMMY_USER = {
	id: 1,
	email: 'johndoe@tata.fr',
	password: 'toto',
	firstname: 'John',
	lastname: 'Doe',
	verified: false,
	job: 'vendeur',
	team: [],
	role: 'admin',
	contract: 'CDI',
	plannings: [],
	hours: 35,
	settings: {},
	created_date: '01-01-2023',
	updated_date: '01-01-2023'
};

@Injectable()
export class UserService {
	create(user: UserDto): UserDto {
		return _DUMMY_USER;
	}

	findAll(): UserDto[] {
		return [];
	}

	findOneById(id: number): UserDto {
		return _DUMMY_USER;
	}
}
