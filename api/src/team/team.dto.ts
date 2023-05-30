import { Type } from 'class-transformer';
import {
	IsArray,
	IsNotEmpty,
	IsOptional,
	IsString,
	ValidateNested,
} from 'class-validator';
import { PlanningEntity } from 'src/planning/planning.entity';
import { UserEntity } from 'src/user/user.entity';

export class TeamDto {
	@IsString()
	@IsOptional()
	id: string;

	@IsString()
	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
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
