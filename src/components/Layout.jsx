import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header onNavigate={handleNavigation} />
            <main className="flex-1 pt-16 lg:pt-20">
                {children}
            </main>
            <Footer onNavigate={handleNavigation} />
        </div>
    );
};

export default Layout;
