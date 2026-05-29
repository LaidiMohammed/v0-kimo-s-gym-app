import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
  membership: 'free' | 'premium' | 'elite';
  avatar?: string;
  role?: 'user' | 'admin';
  isActive?: boolean;
  isSpam?: boolean;
  height?: number;
  weight?: number;
  age?: number;
  sex?: 'male' | 'female' | 'other';
  joinDate?: string;
  revenue?: number;
  qrCode?: string;
}

export interface WorkoutSession {
  id: string;
  exerciseId: string;
  reps: number;
  weight?: number;
  duration?: number;
  date: Date;
  completed: boolean;
}

export interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  workoutHistory: WorkoutSession[];
  selectedExercise: string | null;
  cartItems: number;
  allUsers: User[];
  
  // Actions
  setUser: (user: User | null) => void;
  logout: () => void;
  addWorkoutSession: (session: WorkoutSession) => void;
  setSelectedExercise: (exerciseId: string | null) => void;
  updateCartItems: (count: number) => void;
  addUser: (user: User) => void;
  toggleUserActive: (userId: string) => void;
  markUserAsSpam: (userId: string) => void;
  updateUserInfo: (userId: string, info: Partial<User>) => void;
  getAllUsers: () => User[];
}

export const useStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      workoutHistory: [],
      selectedExercise: null,
      cartItems: 0,
      allUsers: [
        {
          id: '2',
          name: 'Karim Ahmed',
          email: 'karim@gym.com',
          membership: 'premium',
          role: 'user',
          isActive: true,
          isSpam: false,
          height: 180,
          weight: 75,
          age: 28,
          sex: 'male',
          joinDate: '2024-01-15',
          revenue: 2999,
        },
        {
          id: '3',
          name: 'Fatima Belhadj',
          email: 'fatima@gym.com',
          membership: 'elite',
          role: 'user',
          isActive: true,
          isSpam: false,
          height: 165,
          weight: 58,
          age: 26,
          sex: 'female',
          joinDate: '2024-02-20',
          revenue: 3499,
        },
        {
          id: '4',
          name: 'Amin Boukerch',
          email: 'amin@gym.com',
          membership: 'free',
          role: 'user',
          isActive: false,
          isSpam: false,
          height: 175,
          weight: 70,
          age: 32,
          sex: 'male',
          joinDate: '2024-01-10',
          revenue: 0,
        },
      ],

      setUser: (user) => {
        // Set cookie for middleware
        if (typeof window !== 'undefined' && user) {
          document.cookie = `user_auth=${JSON.stringify(user)}; path=/; max-age=2592000`;
        } else if (typeof window !== 'undefined') {
          document.cookie = 'user_auth=; path=/; max-age=0';
        }
        
        set({
          user,
          isAuthenticated: !!user,
        });
      },

      logout: () => {
        if (typeof window !== 'undefined') {
          document.cookie = 'user_auth=; path=/; max-age=0';
        }
        set({
          user: null,
          isAuthenticated: false,
          workoutHistory: [],
        });
      },

      addWorkoutSession: (session) => set((state) => ({
        workoutHistory: [...state.workoutHistory, session],
      })),

      setSelectedExercise: (exerciseId) => set({
        selectedExercise: exerciseId,
      }),

      updateCartItems: (count) => set({
        cartItems: count,
      }),

      addUser: (user) => set((state) => ({
        allUsers: [...state.allUsers, user],
      })),

      toggleUserActive: (userId) => set((state) => ({
        allUsers: state.allUsers.map((user) =>
          user.id === userId ? { ...user, isActive: !user.isActive } : user
        ),
      })),

      markUserAsSpam: (userId) => set((state) => ({
        allUsers: state.allUsers.map((user) =>
          user.id === userId ? { ...user, isSpam: true } : user
        ),
      })),

      updateUserInfo: (userId, info) => set((state) => ({
        allUsers: state.allUsers.map((user) =>
          user.id === userId ? { ...user, ...info } : user
        ),
      })),

      getAllUsers: () => (state) => state.allUsers,
    }),
    {
      name: 'kimo-gym-store',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        workoutHistory: state.workoutHistory,
        cartItems: state.cartItems,
        allUsers: state.allUsers,
      }),
    }
  )
);
