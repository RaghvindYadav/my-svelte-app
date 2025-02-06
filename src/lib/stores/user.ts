import { writable } from 'svelte/store';

export interface UserData {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  userHandle: string;
  authToken: string;
  avatarUrl?: string;
}

const createUserStore = () => {
  // Initialize store with saved user data if it exists
  const savedUserData = typeof window !== 'undefined'
    ? localStorage.getItem('userData')
    : null;
  const initialValue = savedUserData ? JSON.parse(savedUserData) : null;

  const { subscribe, set, update } = writable<UserData | null>(initialValue);

  return {
    subscribe,
    setUser: (userData: UserData) => {
      set(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
    },
    clearUser: () => {
      set(null);
      localStorage.removeItem('userData');
      localStorage.removeItem('authToken');
    },
    loadUser: () => {
      const savedUser = localStorage.getItem('userData');
      if (savedUser) {
        set(JSON.parse(savedUser));
        return true;
      }
      return false;
    }
  };
};

export const user = createUserStore();
