import {
	IsArray,
	IsBoolean,
	IsEmail,
	IsNumber,
	IsObject,
	IsString,
	MinLength
} from 'class-validator';

export class UserDto {
	@IsNumber()
	id: number;

	@IsEmail()
	email: string;

	@IsString()
	@MinLength(8)
	password: string;

	@IsString()
	firstname: string;

	@IsString()
	lastname: string;

	@IsBoolean()
	verified: boolean;

	@IsArray()
	team: number[];

	@IsString()
	role: string;

	@IsString()
	job: string;

	@IsString()
	contract: string;

	@IsArray()
	plannings: number[];

	@IsNumber()
	hours: number;

	@IsObject()
	settings: any;

	@IsString()
	created_date: string;

	@IsString()
	updated_date: string;
}
