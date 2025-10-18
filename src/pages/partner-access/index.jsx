import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import AccessRequestForm from './components/AccessRequestForm';
import OnboardingChecklist from './components/OnboardingChecklist';
import QualificationCriteria from './components/QualificationCriteria';
import TrustSignals from './components/TrustSignals';
import ConsultationScheduler from './components/ConsultationScheduler';

const PartnerAccessPage = () => {
    const [activeTab, setActiveTab] = useState('request');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const tabs = [
        {
            id: 'request',
            label: 'Access Request',
            icon: 'FileText',
            description: 'Apply for partnership'
        },
        {
            id: 'process',
            label: 'Onboarding',
            icon: 'CheckCircle',
            description: 'Understand the process'
        },
        {
            id: 'criteria',
            label: 'Requirements',
            icon: 'Shield',
            description: 'Check requirements'
        },
        {
            id: 'consultation',
            label: 'Consultation',
            icon: 'Calendar',
            description: 'Schedule appointment'
        }
    ];

    const handleFormSubmit = async (formData) => {
        setIsSubmitting(true);

        // Simulate API submission
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('Partner access request submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Show success message for 5 seconds
        setTimeout(() => {
            setSubmitSuccess(false);
            setActiveTab('process');
        }, 5000);
    };

    const handleConsultationSchedule = (appointmentData) => {
        console.log('Consultation scheduled:', appointmentData);
        // Handle consultation scheduling logic
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'request':
                return (
                    <AccessRequestForm
                        onSubmit={handleFormSubmit}
                        isSubmitting={isSubmitting}
                    />
                );
            case 'process':
                return <OnboardingChecklist />;
            case 'criteria':
                return <QualificationCriteria />;
            case 'consultation':
                return <ConsultationScheduler onSchedule={handleConsultationSchedule} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Helmet>
                <title>Partner Access - MEDeutsch MENA Healthcare Staffing</title>
                <meta name="description" content="Become a MEDeutsch MENA partner and gain access to qualified Iraqi healthcare professionals. Simple onboarding process for German healthcare institutions." />
                <meta name="keywords" content="become partner, healthcare professionals, staffing agency, German clinics, Iraqi nurses" />
                <meta property="og:title" content="Partner Access - MEDeutsch MENA Healthcare Staffing" />
                <meta property="og:description" content="Become a MEDeutsch MENA partner and gain access to qualified Iraqi healthcare professionals." />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://techdeutsch.de/partner-access" />
            </Helmet>
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                <Icon name="Handshake" size={16} className="mr-2" />
                                Exclusive Partner Access
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Become Our
                                <span className="text-primary block">Partner</span>
                            </h1>

                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Gain access to our exclusive network of qualified Iraqi healthcare professionals.
                                Streamlined onboarding for German healthcare institutions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="default"
                                    size="lg"
                                    iconName="ArrowRight"
                                    iconPosition="right"
                                    onClick={() => setActiveTab('request')}
                                >
                                    Become a Partner Now
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    iconName="Phone"
                                    iconPosition="left"
                                    onClick={() => setActiveTab('consultation')}
                                >
                                    Schedule Consultation
                                </Button>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            <div className="text-center p-6 rounded-lg bg-card border border-border">
                                <div className="text-2xl font-bold text-primary mb-2">28</div>
                                <div className="text-sm text-muted-foreground">Immediately Available Professionals</div>
                            </div>
                            <div className="text-center p-6 rounded-lg bg-card border border-border">
                                <div className="text-2xl font-bold text-primary mb-2">120</div>
                                <div className="text-sm text-muted-foreground">Candidates in Pipeline</div>
                            </div>
                            <div className="text-center p-6 rounded-lg bg-card border border-border">
                                <div className="text-2xl font-bold text-primary mb-2">95%</div>
                                <div className="text-sm text-muted-foreground">Success Rate</div>
                            </div>
                            <div className="text-center p-6 rounded-lg bg-card border border-border">
                                <div className="text-2xl font-bold text-primary mb-2">6</div>
                                <div className="text-sm text-muted-foreground">Weeks Avg. Placement Time</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Message */}
                {submitSuccess && (
                    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4">
                        <div className="bg-success text-success-foreground p-4 rounded-lg shadow-lg border border-success/20">
                            <div className="flex items-center space-x-3">
                                <Icon name="CheckCircle" size={20} />
                                <div>
                                    <h3 className="font-medium">Request Successfully Sent!</h3>
                                    <p className="text-sm opacity-90">We will contact you within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation Tabs */}
                <section className="px-6 mb-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap gap-2 p-2 bg-card rounded-xl border border-border">
                            {tabs?.map((tab) => (
                                <button
                                    key={tab?.id}
                                    onClick={() => setActiveTab(tab?.id)}
                                    className={`flex-1 min-w-0 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tab?.id
                                        ? 'bg-primary text-primary-foreground shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                        }`}
                                >
                                    <div className="flex items-center justify-center space-x-2">
                                        <Icon name={tab?.icon} size={16} />
                                        <span className="hidden sm:inline">{tab?.label}</span>
                                    </div>
                                    <div className="text-xs mt-1 opacity-80 hidden md:block">
                                        {tab?.description}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="px-6 pb-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Content Area */}
                            <div className="lg:col-span-2">
                                {renderTabContent()}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <TrustSignals />

                                {/* Quick Contact */}
                                <div className="bg-card rounded-xl border border-border p-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">
                                        Have Questions?
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Our partner team is happy to assist you.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3 text-sm">
                                            <Icon name="Phone" size={16} className="text-primary" />
                                            <span className="text-foreground">+49 89 123 456 789</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-sm">
                                            <Icon name="Mail" size={16} className="text-primary" />
                                            <span className="text-foreground">partner@techdeutsch.de</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-sm">
                                            <Icon name="Clock" size={16} className="text-primary" />
                                            <span className="text-foreground">Mon-Fri: 9:00 AM - 6:00 PM</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        iconName="MessageCircle"
                                        iconPosition="left"
                                        fullWidth
                                        className="mt-4"
                                    >
                                        Start Live Chat
                                    </Button>
                                </div>

                                {/* Emergency Contact */}
                                <div className="bg-warning/5 border border-warning/20 rounded-xl p-6">
                                    <div className="flex items-start space-x-3">
                                        <Icon name="AlertTriangle" size={20} className="text-warning flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-sm font-medium text-foreground mb-2">
                                                Urgent Staffing Need?
                                            </h3>
                                            <p className="text-xs text-muted-foreground mb-3">
                                                For acute staffing shortages, contact our emergency hotline.
                                            </p>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                iconName="Phone"
                                                iconPosition="left"
                                            >
                                                Emergency Hotline
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PartnerAccessPage;