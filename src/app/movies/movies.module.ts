import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesEntity } from './movies.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesService } from './movies.service';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesEntity])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
