
import { User } from '../types';

const DB_KEY = 'travelbite_users';

export const db = {
  getUsers: (): any[] => {
    const data = localStorage.getItem(DB_KEY);
    return data ? JSON.parse(data) : [];
  },
  saveUser: (user: any) => {
    const users = db.getUsers();
    users.push(user);
    localStorage.setItem(DB_KEY, JSON.stringify(users));
  },
  findUserByEmail: (email: string) => {
    return db.getUsers().find(u => u.email === email || u.mobile === email);
  }
};
