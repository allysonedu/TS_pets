import { Users } from '@prisma/client';

export interface UsersRepository {
  createUsers(data: Omit<Users, 'id'>): Promise<Users>;
}
