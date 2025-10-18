import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '', onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const pathname = location?.pathname;

    const navigationItems = [
        {
            label: 'Home',
            path: '/',
            icon: 'Home',
            tooltip: 'Platform overview and candidate pipeline'
        },
        {
            label: 'Services',
            path: '/services',
            icon: 'Briefcase',
            tooltip: 'Healthcare recruitment solutions and ROI calculator'
        },
        {
            label: 'Candidates',
            path: '/candidates',
            icon: 'Users',
            tooltip: 'Browse qualified Iraqi healthcare professionals'
        },
        {
            label: 'Process',
            path: '/process',
            icon: 'GitBranch',
            tooltip: 'Our proven placement methodology'
        },
        {
            label: 'Team',
            path: '/team',
            icon: 'UserCheck',
            tooltip: 'Meet our recruitment specialists'
        }
    ];

    const handleNavigation = (path) => {
        if (onNavigate) {
            onNavigate(path);
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window?.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window?.addEventListener('scroll', handleScroll);
        return () => window?.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e?.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document?.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document?.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
                    : 'bg-white/90 backdrop-blur-sm',
                className
            )}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 group"
                            onClick={() => handleNavigation('/')}
                        >
                            <div className="relative">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                                    <Icon name="Stethoscope" size={24} className="text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                                    MEDeutsch MENA
                                </span>
                                <span className="text-xs lg:text-sm text-blue-600 font-medium">
                                    Healthcare Staffing
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navigationItems?.map((item) => {
                                const isActive = pathname === item?.path || (item?.path === '/' && pathname === '/home');
                                return (
                                    <Link
                                        key={item?.path}
                                        to={item?.path}
                                        className={cn(
                                            'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group',
                                            isActive
                                                ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                        )}
                                        onClick={() => handleNavigation(item?.path)}
                                        title={item?.tooltip}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <Icon name={item?.icon} size={16} />
                                            <span>{item?.label}</span>
                                        </div>
                                        {isActive && (
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Button
                                variant="outline"
                                size="sm"
                                iconName="Phone"
                                iconPosition="left"
                                onClick={() => handleNavigation('/team')}
                                className="border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600"
                            >
                                Contact
                            </Button>
                            <Button
                                variant="default"
                                size="sm"
                                iconName="ArrowRight"
                                iconPosition="right"
                                onClick={() => handleNavigation('/partner-access')}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                Partner Access
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className="relative w-6 h-6">
                                <span className={cn(
                                    'absolute left-0 top-1 w-6 h-0.5 bg-gray-700 transition-all duration-300',
                                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                )}>
                                </span>
                                <span className={cn(
                                    'absolute left-0 top-3 w-6 h-0.5 bg-gray-700 transition-all duration-300',
                                    isMobileMenuOpen ? 'opacity-0' : ''
                                )}>
                                </span>
                                <span className={cn(
                                    'absolute left-0 top-5 w-6 h-0.5 bg-gray-700 transition-all duration-300',
                                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                )}>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                'fixed inset-0 z-40 lg:hidden transition-all duration-300',
                isMobileMenuOpen
                    ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
                    onClick={closeMobileMenu}
                ></div>

                {/* Menu Panel */}
                <div className={cn(
                    'absolute right-0 top-0 h-full w-80 max-w-sm bg-white shadow-2xl transition-transform duration-300',
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}>
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                    <Icon name="Stethoscope" size={18} className="text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-900">MEDeutsch MENA</span>
                                <span className="text-xs text-blue-600 font-medium">Healthcare Staffing</span>
                            </div>
                        </div>
                        <button
                            onClick={closeMobileMenu}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <Icon name="X" size={20} className="text-gray-500" />
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Priority CTA */}
                        <div className="space-y-3">
                            <Button
                                variant="default"
                                size="lg"
                                iconName="ArrowRight"
                                iconPosition="right"
                                fullWidth
                                onClick={() => handleNavigation('/partner-access')}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                            >
                                Partner Access
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                iconName="Phone"
                                iconPosition="left"
                                fullWidth
                                onClick={() => handleNavigation('/team')}
                                className="border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600"
                            >
                                Contact Team
                            </Button>
                        </div>

                        {/* Navigation Items */}
                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Navigation</h3>
                            {navigationItems?.map((item) => {
                                const isActive = pathname === item?.path || (item?.path === '/' && pathname === '/home');
                                return (
                                    <Link
                                        key={item?.path}
                                        to={item?.path}
                                        className={cn(
                                            'flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200',
                                            isActive
                                                ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-gray-700 hover:bg-gray-50'
                                        )}
                                        onClick={() => handleNavigation(item?.path)}
                                    >
                                        <Icon name={item?.icon} size={20} />
                                        <div className="flex flex-col">
                                            <span className="font-medium">{item?.label}</span>
                                            <span className="text-xs text-gray-500">{item?.tooltip}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;