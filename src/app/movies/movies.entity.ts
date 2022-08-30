import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'movies' })
export class MoviesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', nullable: false })
  title: string;

  @Column({ name: 'year', nullable: false })
  year: string;

  @Column({ name: 'company', nullable: false })
  company: string;

  @Column({ name: 'director', nullable: false })
  director: string;

  @Column({ name: 'genre', nullable: false })
  genre: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
