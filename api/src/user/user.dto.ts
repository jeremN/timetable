import { Type } from 'class-transformer';
import {
	IsArray,
	IsBoolean,
	IsDate,
	IsEmail,
	IsJSON,
	IsNumber,
	IsOptional,
	IsString,
	IsUUID,
	MinLength,
	ValidateNested
} from 'class-validator';
import { PlanningEntity } from 'src/planning/planning.entity';
import { TeamEntity } from 'src/team/team.entity';

export class UserDto {
	@IsUUID()
	id: string;

	@IsEmail()
	email: string;

	@IsString()
	@MinLength(8)
	password: string;

	@IsString()
	role: string;

	@IsString()
	firstName: string;

	@IsString()
	lastName: string;

	@IsString()
	job: string;

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => TeamEntity)
	team: TeamEntity[];

	@IsOptional()
	@IsDate()
	createdDate?: Date;

	@IsOptional()
	@IsDate()
	updatedDate?: Date;

	@IsBoolean()
	verified: boolean;

	@IsJSON()
	settings: JSON;

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => PlanningEntity)
	plannings: PlanningEntity[];

	@IsString()
	contract: string;

	@IsNumber()
	hours: number;

	@IsString()
	dayOff: string;

	@IsNumber()
	daysPerWeek: number;
}
