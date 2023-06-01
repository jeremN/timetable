import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
	IsArray,
	IsNotEmpty,
	IsOptional,
	IsString,
	ValidateIf,
	ValidateNested,
} from 'class-validator';
import { PlanningEntity } from 'src/planning/planning.entity';
import { UserEntity } from 'src/user/user.entity';

export class TeamDto {
	@IsOptional()
	@IsString()
	id: string;

	@IsString()
	@IsNotEmpty()
	title: string;

	@ValidateIf((object, value) => value !== null)
	@IsString()
	localization: string | null;

	@IsArray()
	@IsString({ each: true })
	members: string[];

	@Type(() => UserEntity)
	createdBy: UserEntity;

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => PlanningEntity)
	plannings: PlanningEntity[];
}

export class PartialTeamDto extends PartialType(TeamDto) {}
