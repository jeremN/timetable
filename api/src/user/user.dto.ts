import { Type } from 'class-transformer';
import {
	IsArray,
	IsBoolean,
	IsDate,
	IsDateString,
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
	@IsOptional()
	@IsUUID()
	id: string;

	@IsOptional()
	@IsEmail()
	email: string;

	@IsOptional()
	@IsString()
	@MinLength(8)
	password: string;

	@IsOptional()
	@IsString()
	role: string;

	@IsOptional()
	@IsString()
	firstName: string;

	@IsOptional()
	@IsString()
	lastName: string;

	@IsOptional()
	@IsString()
	job: string;

	@IsOptional()
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => TeamEntity)
	team: TeamEntity[];

	@IsOptional()
	@IsDateString()
	createdDate?: Date;

	@IsOptional()
	@IsDateString()
	updatedDate?: Date;

	@IsOptional()
	@IsBoolean()
	verified: boolean;

	@IsOptional()
	@IsJSON()
	settings: JSON;

	@IsOptional()
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => PlanningEntity)
	plannings: PlanningEntity[];

	@IsOptional()
	@IsString()
	contract: string;

	@IsOptional()
	@IsNumber()
	hours: number;

	@IsOptional()
	@IsString()
	dayOff: string;

	@IsOptional()
	@IsNumber()
	daysPerWeek: number;
}
