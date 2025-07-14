"use client"
import React, { createContext, useContext, ReactNode } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

// ログイン機能を作成するまではハードコーディングされたデータを使う
const hardcodedUser: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

type AuthContextType = {
  user: User;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{ user: hardcodedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
