import { Injectable, BadRequestException } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { Repository, FindOneOptions } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDto) {
    const userExist = await this.findOneOrFail({
      where: { email: data.email },
    });
    if (userExist) {
      throw new BadRequestException('email already registered');
    }
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async findOneOrFail(options: FindOneOptions<UserEntity>) {
    try {
      return await this.userRepository.findOneOrFail(options);
    } catch (error) {
      return null;
    }
  }
}
