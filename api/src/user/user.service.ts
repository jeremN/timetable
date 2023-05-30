import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

// TODO: options from query string
@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>
	) {}
	create(user: UserDto) {
		return this.userRepository.save(user);
	}

	findAll(): Promise<UserEntity[]> {
		return this.userRepository.find();
	}

	findOneById(id: string): Promise<UserEntity[]> {
		return this.userRepository.find({ where: { id } });
	}

	update(id: string, user: UserDto) {
		return this.userRepository.update(id, { ...user });
	}

	remove(id: string) {
		return this.userRepository.delete(id);
	}
}
