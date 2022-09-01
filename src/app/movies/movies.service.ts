import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie-dto';
import { MoviesEntity } from './movies.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MoviesEntity)
    private readonly moviesRepository: Repository<MoviesEntity>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async createMovie(data: CreateMovieDto) {
    await this.cacheManager.reset();
    const movie = this.moviesRepository.create(data);
    return await this.moviesRepository.save(movie);
  }

  async getAll() {
    const movies = await this.moviesRepository.find();
    return movies;
  }

  async getMovie(id: string) {
    return await this.moviesRepository.findBy({ id });
  }

  async updateMovie(id: string, data: CreateMovieDto) {
    await this.cacheManager.reset();
    return await this.moviesRepository.update({ id }, data);
  }

  async deleteMovie(id: string) {
    await this.cacheManager.reset();
    return await this.moviesRepository.delete({ id });
  }
}
