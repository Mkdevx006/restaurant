
import { User } from '../types';

const BASE_URL = 'http://localhost:8080/api';

// Toggle this to false when your Spring Boot server is running
const USE_MOCK_FALLBACK = true;

const mockStorage = {
  getUsers: (): any[] => {
    const data = localStorage.getItem('travelbite_users');
    return data ? JSON.parse(data) : [];
  },
  saveUser: (user: any) => {
    const users = mockStorage.getUsers();
    users.push(user);
    localStorage.setItem('travelbite_users', JSON.stringify(users));
  },
  findUserByEmail: (email: string) => {
    return mockStorage.getUsers().find(u => u.email === email || u.mobile === email);
  }
};

export const api = {
  register: async (userData: any): Promise<{ success: boolean; message: string; user?: User }> => {
    if (USE_MOCK_FALLBACK) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const existing = mockStorage.findUserByEmail(userData.email);
          if (existing) {
            resolve({ success: false, message: 'User already exists' });
          } else {
            const newUser = { ...userData, id: Date.now().toString() };
            mockStorage.saveUser(newUser);
            resolve({ success: true, message: 'Registration successful', user: newUser });
          }
        }, 1000);
      });
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Registration failed');
      return { success: true, message: 'Registration successful', user: data };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  login: async (email: string, password: string): Promise<{ success: boolean; message: string; user?: User }> => {
    if (USE_MOCK_FALLBACK) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const user = mockStorage.findUserByEmail(email);
          if (user && user.password === password) {
            resolve({ success: true, message: 'Login successful', user });
          } else {
            resolve({ success: false, message: 'Invalid credentials' });
          }
        }, 1000);
      });
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');
      return { success: true, message: 'Login successful', user: data };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  }
};
