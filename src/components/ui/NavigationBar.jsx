import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Icon from '../AppIcon';
import Button from './Button';

const NavigationBar = ({ className = '', onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            <nav className={cn(`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 ${className}`)}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-150"
                            onClick={() => handleNavigation('/')}
                        >
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <Icon name="Stethoscope" size={24} className="text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-semibold text-gray-900">MEDeutsch MENA</span>
                                <span className="text-xs text-blue-600">Healthcare Staffing</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigationItems?.map((item) => (
                                <Link
                                    key={item?.path}
                                    to={item?.path}
                                    className={cn(
                                        'group relative flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150',
                                        pathname === item?.path || (item?.path === '/' && pathname === '/home')
                                            ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    )}
                                    onClick={() => handleNavigation(item?.path)}
                                    title={item?.tooltip}
                                >
                                    <Icon name={item?.icon} size={16} />
                                    <span>{item?.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <NavigationCTA onNavigate={handleNavigation} />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu Overlay */}
            <MobileMenuOverlay
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                navigationItems={navigationItems}
                currentPath={pathname}
                onNavigate={handleNavigation}
            />
        </>
    );
};

const NavigationCTA = ({ onNavigate }) => {
    return (
        <Button
            variant="default"
            size="default"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onNavigate('/partner-access')}
            className="bg-blue-600 hover:bg-blue-700"
        >
            Partner Access
        </Button>
    );
};

const MobileMenuOverlay = ({ isOpen, onClose, navigationItems, currentPath, onNavigate }) => {
    if (!isOpen) return null;

    return (
        <div className={cn(
            'fixed inset-0 z-40 transition-all duration-300',
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}>
            <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={onClose}></div>
            <div className={cn(
                'absolute right-0 top-0 h-full w-80 max-w-sm bg-white shadow-2xl transition-transform duration-300',
                isOpen ? 'translate-x-0' : 'translate-x-full'
            )}>
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Icon name="Stethoscope" size={20} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-900">MEDeutsch MENA</span>
                            <span className="text-xs text-blue-600">Healthcare Staffing</span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
                        aria-label="Close menu"
                    >
                        <Icon name="X" size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    {/* Priority CTA */}
                    <div className="mb-6">
                        <Button
                            variant="default"
                            size="lg"
                            iconName="ArrowRight"
                            iconPosition="right"
                            fullWidth
                            onClick={() => onNavigate('/partner-access')}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            Partner Access
                        </Button>
                    </div>

                    {/* Navigation Items */}
                    <div className="space-y-2">
                        {navigationItems?.map((item) => (
                            <Link
                                key={item?.path}
                                to={item?.path}
                                className={cn(
                                    'flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150',
                                    currentPath === item?.path || (item?.path === '/' && currentPath === '/home')
                                        ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                )}
                                onClick={() => onNavigate(item?.path)}
                            >
                                <Icon name={item?.icon} size={20} />
                                <div className="flex flex-col">
                                    <span className="font-medium">{item?.label}</span>
                                    <span className="text-xs text-gray-500">{item?.tooltip}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;