import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, BookOpen, Phone, Newspaper, Users, UserPlus, MessageCircle } from 'lucide-react';
import { useAuth } from './auth/AuthContext';
import LoginModal from './auth/LoginModal';
import logo from './assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const primaryLinks = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Courses', href: '/courses', icon: GraduationCap },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'About Us', href: '/about', icon: Users },
  ];

  const secondaryLinks = [
    { name: 'Certificate', href: '/courses?category=certificate' },
    { name: 'Diploma', href: '/courses?category=diploma' },
    { name: 'Advanced Diploma', href: '/courses?category=advanced-diploma' },
    { name: 'Executive', href: '/courses?category=executive' },
    { name: 'WhatsApp Class', href: '#whatsapp-class', icon: MessageCircle },
  ];

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-gray-900">LSEM</span>
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:justify-center flex-1 px-8">
              <div className="flex space-x-8">
                {primaryLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      location.pathname === link.href
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.icon && <link.icon className="h-4 w-4 mr-1" />}
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex md:items-center space-x-4">
              <button
                onClick={() => handleNavigation('/courses')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Start a Course
              </button>
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={logout}
                    className="ml-2 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/signup')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <UserPlus className="h-4 w-4 mr-1" />
                    Sign Up
                  </button>
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <div className="hidden md:block border-t">
            <div className="flex justify-center space-x-8 py-2">
              {secondaryLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className={`inline-flex items-center text-sm font-medium ${
                    location.pathname === link.href
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {link.icon && <link.icon className="h-4 w-4 mr-1" />}
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            {primaryLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 ${
                  location.pathname === link.href
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-blue-500'
                }`}
              >
                {link.name}
              </button>
            ))}
            {secondaryLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 ${
                  location.pathname === link.href
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-blue-500'
                }`}
              >
                <span className="flex items-center">
                  {link.icon && <link.icon className="h-4 w-4 mr-1" />}
                  {link.name}
                </span>
              </button>
            ))}
            <div className="mt-4 px-4">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full mb-2 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={logout}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/signup')}
                    className="w-full mb-2 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <UserPlus className="h-4 w-4 mr-1" />
                    Sign Up
                  </button>
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Navbar;