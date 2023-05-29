import {
	IsArray,
	IsBoolean,
	IsDate,
	IsEmail,
	IsJSON,
	IsNumber,
	IsOptional,
	IsString,
	MinLength,
} from 'class-validator';

export class UserDto {
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
	team: string[];

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
	plannings: string[];

	@IsString()
	contract: string;

	@IsNumber()
	hours: number;

	@IsString()
	dayOff: string;

	@IsNumber()
	daysPerWeek: number;
}
