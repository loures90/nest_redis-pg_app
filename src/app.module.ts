import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.POSTGRES_TYPE,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USERMAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
