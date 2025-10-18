import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import ServiceCard from './components/ServiceCard';
import ROICalculator from './components/ROICalculator';
import ServiceComparison from './components/ServiceComparison';
import TestimonialSection from './components/TestimonialSection';

const ServicesPage = () => {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 'permanent',
            title: 'Permanent Placement',
            subtitle: 'Full-time Employment for Professionals',
            icon: 'Users',
            price: '€8,500',
            priceUnit: 'per placement',
            timeline: '6-8 Weeks',
            successRate: '96%',
            description: `Our premium solution for permanent staffing of professional positions in German healthcare facilities. We place highly qualified Iraqi nurses with full recognition and B2/C1 language certification.`,
            features: [
                'Comprehensive candidate screening and evaluation',
                'Guaranteed B2/C1 language certification',
                'Full qualification recognition',
                'Complete visa and immigration support',
                '12 months follow-up and integration support',
                '100% replacement guarantee within 3 months',
                'Cultural integration programs',
                'Legal consultation and documentation'
            ],
            sampleDownload: '/samples/permanent-placement-cv.pdf'
        },
        {
            id: 'contract',
            title: 'Contract Staffing',
            subtitle: 'Flexible Temporary Solutions',
            icon: 'Clock',
            price: '€4,200',
            priceUnit: 'per placement',
            timeline: '3-4 Weeks',
            successRate: '92%',
            description: `Flexible staffing solutions for temporary shortages and project work. Ideal for facilities needing quick qualified support or wanting to test different candidates.`,
            features: [
                'Fast placement within 3-4 weeks',
                'B1/B2 language certification sufficient',
                'Flexible contract terms from 6 months',
                'Basic visa support',
                '6 months follow-up support',
                '50% replacement guarantee within 1 month',
                'Option for permanent employment',
                'Reduced administrative costs'
            ],
            sampleDownload: '/samples/contract-staffing-profiles.pdf'
        },
        {
            id: 'training',
            title: 'Language Training',
            subtitle: 'Language Courses & Certification',
            icon: 'GraduationCap',
            price: '€2,800',
            priceUnit: 'per participant',
            timeline: '12-16 Weeks',
            successRate: '89%',
            description: `Intensive German courses specifically for medical professionals. From A1 basics to C1 perfection with industry-specific vocabulary and communication training for clinical practice.`,
            features: [
                'Medical-specific German courses A1-C1',
                'Recognized language certificates (telc, Goethe)',
                'Healthcare specialized vocabulary',
                'Communication training for patient interactions',
                'Online and in-person classes available',
                '3 months follow-up support',
                'Exam preparation included',
                'Cultural orientation for Germany'
            ],
            sampleDownload: '/samples/language-certificates.pdf'
        }
    ];

    const handleRequestQuote = (service) => {
        setSelectedService(service);
        navigate('/partner-access', {
            state: {
                selectedService: service?.id,
                serviceTitle: service?.title
            }
        });
    };

    const handleScheduleConsultation = () => {
        navigate('/partner-access', {
            state: {
                consultationRequest: true
            }
        });
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-16 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Icon name="Briefcase" size={16} />
                            <span>Professional Placement Services</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Tailored
                            <span className="block text-primary">Recruitment Solutions</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            From candidate selection to successful integration - we offer comprehensive
                            services for placing qualified Iraqi healthcare professionals in Germany.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                        {[
                            { label: 'Successful Placements', value: '850+', icon: 'TrendingUp' },
                            { label: 'Partner Facilities', value: '150+', icon: 'Building2' },
                            { label: 'Average Time to Fill', value: '6 Weeks', icon: 'Clock' },
                            { label: 'Candidate Satisfaction', value: '96%', icon: 'Heart' }
                        ]?.map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-card border border-border rounded-xl">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Icon name={stat?.icon} size={24} color="var(--color-primary)" />
                                </div>
                                <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
                                <div className="text-sm text-muted-foreground">{stat?.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Service Cards */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our Service Packages
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Choose the right solution for your staffing needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {services?.map((service, index) => (
                            <ServiceCard
                                key={service?.id}
                                service={service}
                                onRequestQuote={handleRequestQuote}
                                featured={index === 0}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* ROI Calculator */}
            <section className="py-20 px-6 bg-muted/20">
                <div className="max-w-4xl mx-auto">
                    <ROICalculator onScheduleConsultation={handleScheduleConsultation} />
                </div>
            </section>
            {/* Service Comparison */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <ServiceComparison />
                </div>
            </section>
            {/* Testimonials */}
            <section className="py-20 px-6 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <TestimonialSection />
                </div>
            </section>
            {/* Process Overview */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our Proven Process
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Four structured steps to successful staffing placement
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Needs Analysis',
                                description: 'Detailed assessment of your requirements and framework conditions',
                                icon: 'Search',
                                color: 'primary'
                            },
                            {
                                step: '02',
                                title: 'Candidate Selection',
                                description: 'Pre-qualification and matching based on your criteria',
                                icon: 'Users',
                                color: 'secondary'
                            },
                            {
                                step: '03',
                                title: 'Qualification & Language',
                                description: 'Recognition of credentials and language certification',
                                icon: 'GraduationCap',
                                color: 'success'
                            },
                            {
                                step: '04',
                                title: 'Integration & Support',
                                description: 'Visa process, immigration and long-term support',
                                icon: 'CheckCircle',
                                color: 'warning'
                            }
                        ]?.map((process, index) => (
                            <div key={index} className="relative">
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border z-0">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                                    </div>
                                )}

                                <div className="relative z-10 text-center">
                                    <div className={`w-16 h-16 bg-${process.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-${process.color}/20`}>
                                        <Icon name={process.icon} size={24} color={`var(--color-${process.color})`} />
                                    </div>

                                    <div className={`text-sm font-bold text-${process.color} mb-2`}>
                                        STEP {process.step}
                                    </div>

                                    <h3 className="text-lg font-semibold text-foreground mb-3">
                                        {process.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {process.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            size="lg"
                            iconName="ArrowRight"
                            iconPosition="right"
                            onClick={() => navigate('/process')}
                        >
                            Detailed Process Description
                        </Button>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 px-6 bg-primary/5">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon name="Handshake" size={32} color="var(--color-primary)" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Ready to Collaborate?
                    </h2>

                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's solve your staffing challenges together.
                        Contact us for a no-obligation consultation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="default"
                            size="lg"
                            iconName="Calendar"
                            iconPosition="left"
                            onClick={handleScheduleConsultation}
                        >
                            Book Free Consultation
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            iconName="Phone"
                            iconPosition="left"
                            onClick={() => window.open('tel:+49-30-12345678', '_self')}
                        >
                            Call Now
                        </Button>
                    </div>

                    <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <Icon name="Shield" size={16} color="var(--color-success)" />
                            <span>100% Data Privacy</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Icon name="Clock" size={16} color="var(--color-primary)" />
                            <span>24h Response</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Icon name="Award" size={16} color="var(--color-warning)" />
                            <span>Certified Consulting</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;