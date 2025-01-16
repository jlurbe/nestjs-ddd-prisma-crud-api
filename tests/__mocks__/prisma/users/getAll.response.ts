import { UserResponseDTO } from '../../../../src/Contexts/user/domain/dtos/user-response.dto'

export const getAllResponse: UserResponseDTO[] = [
  {
    id: 'b04c4994-b4b5-11ef-96a4-0242ac120002',
    name: 'johndoe',
    email: 'johndoe@gmail.com',
    ctime: new Date('2024-10-26T20:35:35.000Z'),
    mtime: new Date('2024-10-26T20:35:35.000Z'),
  },
  {
    id: 'b04c4c4c-b4b5-11ef-96a4-0242ac120002',
    name: 'janedoe',
    email: 'janedoe@gmail.com',
    ctime: new Date('2024-10-26T20:35:35.000Z'),
    mtime: new Date('2024-10-26T20:35:35.000Z'),
  },
  {
    id: 'b04c4cfa-b4b5-11ef-96a4-0242ac120002',
    name: 'alexsmith',
    email: 'alexsmith@gmail.com',
    ctime: new Date('2024-10-26T20:35:35.000Z'),
    mtime: new Date('2024-10-26T20:35:35.000Z'),
  },
]
