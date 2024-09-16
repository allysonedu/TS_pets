import { v4 as uuid } from 'uuid';
import { AppError } from '@shared/error/AppError';
import { UsersRepository } from '../repositories/users-repository';
import { create } from 'domain';

interface Props {
  name: string;
  email: string;
  whatsapp: string;
}

export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: Props) {
    const userExists = await this.usersRepository.findByEmail(data.email);
    if (userExists) {
      throw new AppError('Email already exists', 400);
    }

    // const payload = {
    //   ...data,
    //   password: await generateHashPassword('P@ssW0rd'),
    //   avatar: '',
    // }

    const user = await this.usersRepository.createUsers(create);

    const token = uuid();

    // const html = welcome(`${env.FRONTEND_URL}/reset-password/${token}`);

    // await this.usersRepository.saveTokenInDb(token, user.id);

    //   return this.mailProvider.sendMail({
    //     to: data.email,
    //     subject: 'Bem vindo ao pets',
    //     template: html,
    //   });
    return CreateUser;
  }
}
