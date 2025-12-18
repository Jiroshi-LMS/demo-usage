'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-[var(--border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <h1 className="text-2xl font-bold gradient-text">LearnHub</h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/courses" className="text-sm font-medium text-foreground hover:text-[var(--primary)] smooth-transition">
                            Courses
                        </Link>
                        <a href="/#instructors" className="text-sm font-medium text-foreground hover:text-[var(--primary)] smooth-transition">
                            Instructors
                        </a>
                        <a href="/#about" className="text-sm font-medium text-foreground hover:text-[var(--primary)] smooth-transition">
                            About
                        </a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="relative group">
                                <button
                                    className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-[var(--primary)] smooth-transition focus:outline-none"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {user.avatar ? (
                                        <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-[var(--border)]" />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center font-bold">
                                            {user.first_name?.[0] || user.email[0].toUpperCase()}
                                        </div>
                                    )}
                                    <span className="hidden sm:block">
                                        {user.first_name ? user.first_name : 'Account'}
                                    </span>
                                </button>

                                {/* Dropdown */}
                                <div className="absolute right-0 mt-2 w-48 bg-[var(--card)] rounded-md shadow-lg py-1 border border-[var(--border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                                    <div className="px-4 py-2 border-b border-[var(--border)]">
                                        <p className="text-xs text-[var(--muted-foreground)]">Signed in as</p>
                                        <p className="text-sm font-medium truncate">{user.email}</p>
                                    </div>
                                    <Link href="/profile" className="block px-4 py-2 text-sm text-foreground hover:bg-[var(--primary)]/5">
                                        Your Profile
                                    </Link>
                                    <Link href="/my-courses" className="block px-4 py-2 text-sm text-foreground hover:bg-[var(--primary)]/5">
                                        My Courses
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link href="/login" className="hidden sm:block text-sm font-medium text-foreground hover:text-[var(--primary)] smooth-transition">
                                    Sign In
                                </Link>
                                <Link href="/signup" className="gradient-bg text-white text-sm font-medium px-6 py-2.5 rounded-full hover:opacity-90 smooth-transition shadow-md">
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
