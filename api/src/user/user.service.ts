import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity/user.entity';
import { Repository } from 'typeorm';

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

// TODO: options from query string
@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>,
	) {}
	create(user: UserDto) {
		return this.userRepository.save(user);
	}

	findAll() {
		return this.userRepository.find();
	}

	findOneById(id: string) {
		return this.userRepository.find({ where: { id } });
	}
}
