import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanningEntity } from './planning.entity';
import { PlanningController } from './planning.controller';
import { PlanningService } from './planning.service';

@Module({
	imports: [TypeOrmModule.forFeature([PlanningEntity])],
	controllers: [PlanningController],
	providers: [PlanningService]
})
export class PlanningModule {}
