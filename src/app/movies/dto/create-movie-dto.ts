import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  year: string;

  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  director: string;

  @IsNotEmpty()
  genre: string;
}
