"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Home from '@/app/page';
interface LoginProps {}

const LoginPage: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    // Redirect to the dashboard or display a success message
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded-md w-full"
          >
            Login
          </button>
        </form>
        <div className="flex justify-end mt-4">
          <Link href="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Image src="/assets/icons/user.svg" alt="user" width={28} height={28} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;