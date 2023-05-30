import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanningEntity } from './planning.entity';
import { Repository } from 'typeorm';
import { PlanningDto } from './planning.dto';

@Injectable()
export class PlanningService {
	constructor(
		@InjectRepository(PlanningEntity)
		private planningRepository: Repository<PlanningEntity>,
	) {}

	create(planning: PlanningDto) {
		return this.planningRepository.save(planning);
	}

	findAll() {
		return this.planningRepository.find();
	}

	findOneById(id: string) {
		return this.planningRepository.find({ where: { id } });
	}

	update(id: string, planning: PlanningDto) {
		return this.planningRepository.update(id, { ...planning });
	}

	remove(id: string) {
		return this.planningRepository.delete(id);
	}
}
