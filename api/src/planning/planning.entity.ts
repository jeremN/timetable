import { TeamEntity } from 'src/team/team.entity';
import { UserEntity } from 'src/user/user.entity';
import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class PlanningEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ nullable: false, type: 'timestamptz', name: 'start_date' })
	startDate: Date;

	@Column({ nullable: false, type: 'timestamptz', name: 'end_date' })
	endDate: Date;

	@CreateDateColumn({
		nullable: false,
		name: 'created_date',
		type: 'timestamptz'
	})
	createdDate: Date;

	@UpdateDateColumn({
		nullable: false,
		name: 'updated_date',
		type: 'timestamptz'
	})
	updatedDate: Date;

	@Column({ nullable: false, type: 'json', default: {} })
	blocks: JSON;

	@ManyToOne(() => UserEntity, (user) => user.id)
	createdBy: UserEntity;

	@ManyToOne(() => TeamEntity, (team) => team.plannings)
	teamId: TeamEntity;
}
