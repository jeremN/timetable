import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamEntity } from './team.entity';
import { Repository } from 'typeorm';
import { TeamDto } from './team.dto';

@Injectable()
export class TeamService {
	constructor(
		@InjectRepository(TeamEntity)
		private teamRepository: Repository<TeamEntity>
	) {}

	create(team: TeamDto): Promise<TeamEntity> {
		return this.teamRepository.save(team);
	}

	findAll(): Promise<TeamEntity[]> {
		return this.teamRepository.find();
	}

	findOneById(id: string): Promise<TeamEntity[]> {
		return this.teamRepository.find({ where: { id } });
	}

	update(id: string, team: Partial<TeamDto>) {
		return this.teamRepository.update(id, { ...team });
	}

	remove(id: string) {
		return this.teamRepository.delete(id);
	}
}
