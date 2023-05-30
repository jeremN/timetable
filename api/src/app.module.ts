import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/user.entity';
import { TeamEntity } from './team/team.entity';
import { PlanningEntity } from './planning/planning.entity';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'timetable_db',
			port: 5432,
			username: 'dev',
			password: 'dev',
			database: 'dev',
			synchronize: true,
			logging: true,
			entities: [UserEntity, TeamEntity, PlanningEntity],
		}),
		UserModule,
		TeamModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
