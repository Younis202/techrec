import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Icon from '../AppIcon';
import Button from './Button';

const Footer = ({ className = '', onNavigate }) => {
    const currentYear = new Date()?.getFullYear();

    const handleNavigation = (path) => {
        if (onNavigate) {
            onNavigate(path);
        }
        // Smooth scroll to top
        window?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerSections = {
        services: [
            { label: 'Nurse Placement', path: '/services', description: 'Qualified healthcare professionals' },
            { label: 'Doctor Recruitment', path: '/services', description: 'Medical specialists' },
            { label: 'Care Assistant Staffing', path: '/services', description: 'Support staff solutions' },
            { label: 'Temporary Staffing', path: '/services', description: 'Flexible workforce' }
        ],
        company: [
            { label: 'About Us', path: '/team', description: 'Our mission and team' },
            { label: 'Our Process', path: '/process', description: 'How we work' },
            { label: 'Quality Assurance', path: '/process', description: 'Our standards' },
            { label: 'Success Stories', path: '/candidates', description: 'Client testimonials' }
        ],
        candidates: [
            { label: 'Browse Candidates', path: '/candidates', description: 'View profiles' },
            { label: 'Partner Access', path: '/partner-access', description: 'Institutional access' },
            { label: 'Consultation', path: '/partner-access', description: 'Schedule meeting' },
            { label: 'Requirements', path: '/partner-access', description: 'Eligibility criteria' }
        ]
    };

    const socialLinks = [
        { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com', color: 'hover:text-blue-600' },
        { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com', color: 'hover:text-blue-400' },
        { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com', color: 'hover:text-blue-700' },
        { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-600' }
    ];

    const contactInfo = [
        {
            icon: 'MapPin',
            title: 'Germany Office',
            details: ['Hauptstraße 123', '10117 Berlin, Germany'],
            color: 'text-blue-600'
        },
        {
            icon: 'Phone',
            title: 'Phone',
            details: ['+49 30 1234 5678', '+49 176 1234 5678'],
            color: 'text-green-600'
        },
        {
            icon: 'Mail',
            title: 'Email',
            details: ['info@techdeutsch.de', 'recruitment@techdeutsch.de'],
            color: 'text-purple-600'
        }
    ];

    const certifications = [
        { name: 'ISO 9001', description: 'Quality Management' },
        { name: 'EU Certified', description: 'Healthcare Compliance' },
        { name: 'GDPR Compliant', description: 'Data Protection' }
    ];

    return (
        <footer className={cn(
            'relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 border-t border-gray-200/80',
            className
        )}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                        {/* Brand Section */}
                        <div className="lg:col-span-4">
                            <div className="space-y-6">
                                {/* Logo */}
                                <Link
                                    to="/"
                                    className="inline-flex items-center space-x-3 group"
                                    onClick={() => handleNavigation('/')}
                                >
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200">
                                            <Icon name="Stethoscope" size={26} className="text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-bold text-gray-900 tracking-tight">
                                            MEDeutsch MENA
                                        </span>
                                        <span className="text-sm text-blue-600 font-medium">
                                            Healthcare Staffing Excellence
                                        </span>
                                    </div>
                                </Link>

                                {/* Description */}
                                <div className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        Connecting qualified Iraqi healthcare professionals with German medical institutions
                                        through our proven recruitment process and comprehensive support system.
                                    </p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 py-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">500+</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wide">Placements</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600">98%</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wide">Success Rate</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-purple-600">50+</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wide">Partners</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Follow Us</h4>
                                    <div className="flex items-center space-x-3">
                                        {socialLinks?.map((social) => (
                                            <a
                                                key={social?.name}
                                                href={social?.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={cn(
                                                    'p-2 rounded-lg bg-white/80 text-gray-500 transition-all duration-200 hover:scale-110 shadow-sm hover:shadow-md',
                                                    social?.color
                                                )}
                                                aria-label={`Follow us on ${social?.name}`}
                                            >
                                                <Icon name={social?.icon} size={18} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-gray-900">Services</h3>
                                <div className="space-y-3">
                                    {footerSections?.services?.map((item) => (
                                        <Link
                                            key={item?.label}
                                            to={item?.path}
                                            className="group block"
                                            onClick={() => handleNavigation(item?.path)}
                                        >
                                            <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                                                {item?.label}
                                            </div>
                                            <div className="text-xs text-gray-500 group-hover:text-gray-600">
                                                {item?.description}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Company Section */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-gray-900">Company</h3>
                                <div className="space-y-3">
                                    {footerSections?.company?.map((item) => (
                                        <Link
                                            key={item?.label}
                                            to={item?.path}
                                            className="group block"
                                            onClick={() => handleNavigation(item?.path)}
                                        >
                                            <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                                                {item?.label}
                                            </div>
                                            <div className="text-xs text-gray-500 group-hover:text-gray-600">
                                                {item?.description}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Candidates Section */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-gray-900">For Partners</h3>
                                <div className="space-y-3">
                                    {footerSections?.candidates?.map((item) => (
                                        <Link
                                            key={item?.label}
                                            to={item?.path}
                                            className="group block"
                                            onClick={() => handleNavigation(item?.path)}
                                        >
                                            <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                                                {item?.label}
                                            </div>
                                            <div className="text-xs text-gray-500 group-hover:text-gray-600">
                                                {item?.description}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                                <div className="space-y-4">
                                    {contactInfo?.map((contact) => (
                                        <div key={contact?.title} className="space-y-1">
                                            <div className="flex items-center space-x-2">
                                                <Icon name={contact?.icon} size={16} className={contact?.color} />
                                                <span className="text-sm font-medium text-gray-900">{contact?.title}</span>
                                            </div>
                                            <div className="ml-6 space-y-1">
                                                {contact?.details?.map((detail, index) => (
                                                    <div key={index} className="text-sm text-gray-600">
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Quick Contact Button */}
                                <div className="pt-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        iconName="Phone"
                                        iconPosition="left"
                                        fullWidth
                                        onClick={() => handleNavigation('/team')}
                                        className="border-blue-200 text-blue-600 hover:bg-blue-50"
                                    >
                                        Quick Contact
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="py-12 border-t border-gray-200/80">
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get the latest updates on healthcare recruitment opportunities and industry insights.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                />
                            </div>
                            <Button
                                variant="default"
                                iconName="Mail"
                                iconPosition="left"
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6"
                            >
                                Subscribe
                            </Button>
                        </div>

                        <p className="text-xs text-gray-500">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-8 border-t border-gray-200/80">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">

                        {/* Certifications */}
                        <div className="flex items-center space-x-6">
                            {certifications?.map((cert) => (
                                <div key={cert?.name} className="flex items-center space-x-2 text-sm">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Icon name="Shield" size={14} className="text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{cert?.name}</div>
                                        <div className="text-xs text-gray-500">{cert?.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center lg:text-right">
                            <p className="text-sm text-gray-600">
                                © {currentYear} MEDeutsch MENA Healthcare Staffing. All rights reserved.
                            </p>
                            <div className="flex items-center justify-center lg:justify-end space-x-4 mt-2">
                                <Link
                                    to="/privacy"
                                    className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200"
                                    onClick={() => handleNavigation('/privacy')}
                                >
                                    Privacy Policy
                                </Link>
                                <span className="text-gray-300">•</span>
                                <Link
                                    to="/terms"
                                    className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200"
                                    onClick={() => handleNavigation('/terms')}
                                >
                                    Terms of Service
                                </Link>
                                <span className="text-gray-300">•</span>
                                <Link
                                    to="/cookies"
                                    className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200"
                                    onClick={() => handleNavigation('/cookies')}
                                >
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window?.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 z-40"
                aria-label="Back to top"
            >
                <Icon name="ChevronUp" size={20} className="mx-auto" />
            </button>
        </footer>
    );
};

export default Footer;