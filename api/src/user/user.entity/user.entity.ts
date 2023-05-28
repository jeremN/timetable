import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class UserEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ nullable: false, unique: true, type: 'varchar' })
	email: string;

	@Column({ nullable: true, unique: true, type: 'varchar' })
	password: string;

	@Column({
		nullable: false,
		type: 'enum',
		enum: ['admin', 'viewer', 'editor'],
		default: 'viewer'
	})
	role: string;

	@Column({ nullable: false, name: 'firstname', type: 'varchar' })
	firstName: string;

	@Column({ nullable: false, name: 'lastname', type: 'varchar' })
	lastName: string;

	@Column({ nullable: true })
	job: string;

	@Column({ nullable: false }) // ManyToOne or OneToMany
	team: string[];

	@CreateDateColumn({
		nullable: false,
		name: 'created_date',
		type: 'timestamp'
	})
	createdDate: Date;

	@UpdateDateColumn({
		nullable: false,
		name: 'updated_date',
		type: 'timestamp'
	})
	updatedDate: Date;

	@Column({ nullable: false })
	setting: object;

	@Column({ nullable: false }) // ManyToOne or OneToMany
	plannings: string[];

	@Column({ nullable: true })
	contract: string | null;

	@Column({ nullable: false })
	hours: number;

	@Column({ nullable: true, name: 'day_off' })
	dayOff: string;

	@Column({ nullable: false, name: 'days_per_week' })
	daysPerWeek: number;
}
