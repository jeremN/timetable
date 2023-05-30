import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { PlanningService } from './planning.service';
import { PlanningDto } from './planning.dto';

@Controller('planning')
export class PlanningController {
	constructor(private planningService: PlanningService) {}

	@Post()
	create(@Body() planning: PlanningDto) {
		return this.planningService.create(planning);
	}

	@Get()
	findAll() {
		return this.planningService.findAll();
	}

	@Get('/planning/:id')
	findOne(@Param('id') id: string) {
		return this.planningService.findOneById(id);
	}

	@Put('/planning/:id')
	update(@Param('id') id: string, @Body() planning: PlanningDto) {
		return this.planningService.update(id, { ...planning });
	}

	@Delete('/planning/:id')
	remove(@Param('id') id: string) {
		return this.planningService.remove(id);
	}
}
