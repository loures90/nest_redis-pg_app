import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie-dto';
import { MoviesEntity } from './movies.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MoviesEntity)
    private readonly moviesRepository: Repository<MoviesEntity>,
  ) {}

  async createMovie(data: CreateMovieDto) {
    const movie = this.moviesRepository.create(data);
    return await this.moviesRepository.save(movie);
  }

  async getAll() {
    return await this.moviesRepository.find();
  }

  async getMovie(id: string) {
    return await this.moviesRepository.findBy({ id });
  }

  async updateMovie(id: string, data: CreateMovieDto) {
    return await this.moviesRepository.update({ id }, data);
  }

  async deleteMovie(id: string) {
    return await this.moviesRepository.delete({ id });
  }
}
