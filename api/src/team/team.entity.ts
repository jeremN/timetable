import { PlanningEntity } from 'src/planning/planning.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeamEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ nullable: false })
	title: string;

	@Column({ nullable: true, default: null })
	localization: string | null;

	@Column('text', { nullable: false, default: [], array: true })
	members: string[];

	@OneToMany(() => UserEntity, (user) => user.team)
	createdBy: UserEntity;

	@OneToMany(() => PlanningEntity, (planning) => planning.teamId)
	plannings: PlanningEntity[];
}
