import {
	IsArray,
	IsBoolean,
	IsDate,
	IsEmail,
	IsNumber,
	IsObject,
	IsString,
	MinLength
} from 'class-validator';

export class UserDto {
	@IsString()
	id: string;

	@IsEmail()
	email: string;

	@IsString()
	@MinLength(8)
	password: string;

	@IsString()
	firstName: string;

	@IsString()
	lastName: string;

	@IsBoolean()
	verified: boolean;

	@IsArray()
	team: string[];

	@IsString()
	role: string;

	@IsString()
	job: string;

	@IsString()
	contract: string;

	@IsArray()
	plannings: string[];

	@IsNumber()
	hours: number;

	@IsObject()
	settings: any;

	@IsDate()
	createdDate: Date;

	@IsDate()
	updatedDate: Date;

	@IsString()
	dayOff: string;

	@IsNumber()
	daysPerWeek: number;
}
