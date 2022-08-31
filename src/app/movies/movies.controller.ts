import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie-dto';
import { MoviesService } from './movies.service';
import { AuthGuard } from '@nestjs/passport';

class JwtAuthGuard extends AuthGuard('jwt') {}

@Controller('api/v1/movies')
@UseGuards(JwtAuthGuard)
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Post()
  async create(@Body() body: CreateMovieDto) {
    return await this.moviesService.createMovie(body);
  }

  @Get()
  async findAll() {
    return await this.moviesService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.moviesService.getMovie(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateMovieDto) {
    return await this.moviesService.updateMovie(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.moviesService.deleteMovie(id);
  }
}
