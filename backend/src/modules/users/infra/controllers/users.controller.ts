import { FastifyRegister, FastifyReply } from 'fastify';

import { z } from 'zod';

export async function createNewUser(
  request: FastifyRegister,
  reply: FastifyReply
) {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    whatsapp: z.string(),
  });

  const { name, email, whatsapp } = schema.parse(request.body);

  const user = await createUser.execute({ name, email, whatsapp });

  return reply.status(200).send(user);
}
