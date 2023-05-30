import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as csurf from 'csurf';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
// import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
	app.use(helmet());
	app.enableCors();
	// app.use(cookieParser());
	// app.use(csurf({ cookie: { sameSite: true } }));

	const config = new DocumentBuilder()
		.setTitle('Timetable API')
		.setDescription('TODO')
		.setVersion('1.0')
		.addTag('timetable')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(3000);
}
bootstrap();
