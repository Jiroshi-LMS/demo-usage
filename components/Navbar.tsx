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
                        <Link href="/" className="text-sm font-medium text-foreground hover:text-[var(--primary)] smooth-transition">
                            Home
                        </Link>
                        <Link href="/courses" className="text-sm font-medium text-foreground hover:text-[var(--primary)] smooth-transition">
                            Courses
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-foreground hover:text-[var(--primary)] smooth-transition">
                            About
                        </Link>
                        <a
                            href="https://github.com/Jiroshi-LMS/demo-usage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-[var(--primary)] smooth-transition"
                            aria-label="GitHub Repository"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
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
                                            {user.first_name?.[0] || user.identifier[0].toUpperCase()}
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
                                        <p className="text-sm font-medium truncate">{user.identifier}</p>
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
