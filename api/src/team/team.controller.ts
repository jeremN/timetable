import {
	Controller,
	Post,
	Body,
	Get,
	Param,
	Put,
	Delete,
} from '@nestjs/common';
import { TeamDto } from './team.dto';
import { TeamEntity } from './team.entity';
import { TeamService } from './team.service';
import { UserDto } from 'src/user/user.dto';

@Controller('team')
export class TeamController {
	constructor(private teamService: TeamService) {}

	@Post()
	create(@Body() team: TeamDto): Promise<TeamEntity> {
		return this.teamService.create(team);
	}

	@Get()
	findAll(): Promise<TeamEntity[]> {
		return this.teamService.findAll();
	}

	@Get('/:id')
	findOne(@Param('id') id: string): Promise<TeamEntity[]> {
		return this.teamService.findOneById(id);
	}

	@Put('/:id')
	update(@Param('id') id: string, @Body() team: Partial<UserDto>) {
		return this.teamService.update(id, { ...team });
	}

	@Delete('/:id')
	remove(@Param('id') id: string) {
		return this.teamService.remove(id);
	}
}
