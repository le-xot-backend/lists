import { Inject, Injectable } from '@nestjs/common';
import { UserInjectSymbol, UserRepo } from './user.repo';
import { Roles } from '../../common/enums/user.enum';
import { UserEntity } from './user.entity';

@Injectable()
export class UserServices {
  constructor(@Inject(UserInjectSymbol) private userRepo: UserRepo) {}

  async createUser(
    username: string,
    password: string,
    role: Roles,
  ): Promise<UserEntity> {
    return await this.userRepo.createUser({ username, password, role });
  }

  async updateUser(
    id: number,
    username: string,
    password: string,
    role: Roles,
  ): Promise<UserEntity> {
    return await this.userRepo.updateUser(id, username, password, role);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userRepo.findUserById(id);
    if (!user) {
      return;
    }
    await this.userRepo.deleteUser(id);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepo.getAllUsers();
  }
}
