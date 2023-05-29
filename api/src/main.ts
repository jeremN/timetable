import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as csurf from 'csurf';
import helmet from 'helmet';
// import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(helmet());
	app.enableCors();
	// app.use(cookieParser());
	// app.use(csurf({ cookie: { sameSite: true } }));

	await app.listen(3000);
}
bootstrap();
