import { Type } from 'class-transformer';
import { IsDate, IsJSON, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TeamEntity } from 'src/team/team.entity';
import { UserEntity } from 'src/user/user.entity';

export class PlanningDto {
	@IsString()
	@IsOptional()
	id: string;

	@IsNotEmpty()
	@IsDate()
	startDate: Date;

	@IsNotEmpty()
	@IsDate()
	endDate: Date;

	@IsOptional()
	@IsDate()
	createdDate: Date;

	@IsOptional()
	@IsDate()
	updatedDate: Date;

	@IsJSON()
	blocks: JSON;

	@Type(() => UserEntity)
	createdBy: UserEntity;

	@Type(() => TeamEntity)
	team: TeamEntity;
}
