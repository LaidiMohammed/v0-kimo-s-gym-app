import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
  membership: 'free' | 'premium' | 'elite';
  avatar?: string;
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
  
  // Actions
  setUser: (user: User | null) => void;
  logout: () => void;
  addWorkoutSession: (session: WorkoutSession) => void;
  setSelectedExercise: (exerciseId: string | null) => void;
  updateCartItems: (count: number) => void;
}

export const useStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,
  workoutHistory: [],
  selectedExercise: null,
  cartItems: 0,

  setUser: (user) => set({
    user,
    isAuthenticated: !!user,
  }),

  logout: () => set({
    user: null,
    isAuthenticated: false,
    workoutHistory: [],
  }),

  addWorkoutSession: (session) => set((state) => ({
    workoutHistory: [...state.workoutHistory, session],
  })),

  setSelectedExercise: (exerciseId) => set({
    selectedExercise: exerciseId,
  }),

  updateCartItems: (count) => set({
    cartItems: count,
  }),
}));
