import { v4 as uuidv4 } from 'uuid';

let users: User[] = [
  {
    id: uuidv4(), firstName: 'Jane', lastName: 'Dane', email: 'jane.dane@gmail.com',
  },
  {
    id: uuidv4(), firstName: 'John', lastName: 'Doe', email: 'john.doe@gmail.com',
  },
];

const userValidator = {
  firstName: 'required',
  email: 'required',
};

const addUser = (user: User): void => {
  if (!user.id) {
    user.id = uuidv4();
  }
  users.push(user);
};

const getUsers = (): User[] => users.sort((u1, u2) => u1.firstName.localeCompare(u2.firstName));

const modifyUser = (id: string, user: User): void => {
  users = users.filter((u) => u.id !== id);
  users.push(user);
};

export {
  userValidator, addUser, getUsers, modifyUser,
};
