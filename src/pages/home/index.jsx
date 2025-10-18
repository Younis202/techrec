import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import CandidateHighlights from './components/CandidateHighlights';
import ProcessVisualization from './components/ProcessVisualization';
import ServicesSummary from './components/ServicesSummary';
import TrustSignals from './components/TrustSignals';

const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>
            <HeroSection onNavigate={handleNavigation} />
            <CandidateHighlights onNavigate={handleNavigation} />
            <ProcessVisualization onNavigate={handleNavigation} />
            <ServicesSummary onNavigate={handleNavigation} />
            <TrustSignals />
        </div>
    );
};

export default HomePage;