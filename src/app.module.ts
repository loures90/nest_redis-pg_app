import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/users/users.module';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './app/movies/movies.module';
import * as redisStore from 'cache-manager-redis-store';

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
    AuthModule,
    MoviesModule,
    CacheModule.register({
      store: redisStore,
      socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
      },
      password: process.env.REDIS_PASSWORD,
      isGlobal: true,
      ttl: 60,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
