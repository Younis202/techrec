import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProcessVisualization = ({ onNavigate }) => {
    const [activeStep, setActiveStep] = useState(0);

    const processSteps = [
        {
            id: 1,
            title: "Language Training",
            subtitle: "German B2/C1",
            description: "Intensive German courses with medical terminology and cultural preparation for the German job market.",
            duration: "6-12 Months",
            icon: "Languages",
            color: "primary",
            details: [
                "Medical Terminology",
                "Cultural Integration",
                "Exam Preparation",
                "Practical Communication"
            ]
        },
        {
            id: 2,
            title: "Qualification Assessment",
            subtitle: "EU Recognition",
            description: "Comprehensive evaluation of professional qualifications and preparation for German healthcare standards.",
            duration: "2-4 Months",
            icon: "Award",
            color: "secondary",
            details: [
                "Professional Assessment",
                "Document Review",
                "Practical Tests",
                "EU Certification"
            ]
        },
        {
            id: 3,
            title: "Contract Negotiation",
            subtitle: "Matching & Offer",
            description: "Precise matching to suitable positions and negotiation of optimal working conditions for both parties.",
            duration: "2-6 Weeks",
            icon: "Handshake",
            color: "success",
            details: [
                "Position Matching",
                "Salary Negotiation",
                "Working Conditions",
                "Contract Signing"
            ]
        },
        {
            id: 4,
            title: "Visa & Placement",
            subtitle: "Relocation Support",
            description: "Complete support with visa procedures, relocation, and integration into the new work environment.",
            duration: "4-8 Weeks",
            icon: "Plane",
            color: "warning",
            details: [
                "Visa Application",
                "Relocation Assistance",
                "Housing Search",
                "Onboarding Support"
            ]
        }
    ];

    const getColorClasses = (color, isActive = false) => {
        const colors = {
            primary: {
                bg: isActive ? 'bg-primary' : 'bg-primary/10',
                text: isActive ? 'text-primary-foreground' : 'text-primary',
                border: 'border-primary/20',
                icon: 'text-primary'
            },
            secondary: {
                bg: isActive ? 'bg-secondary' : 'bg-secondary/10',
                text: isActive ? 'text-secondary-foreground' : 'text-secondary',
                border: 'border-secondary/20',
                icon: 'text-secondary'
            },
            success: {
                bg: isActive ? 'bg-success' : 'bg-success/10',
                text: isActive ? 'text-success-foreground' : 'text-success',
                border: 'border-success/20',
                icon: 'text-success'
            },
            warning: {
                bg: isActive ? 'bg-warning' : 'bg-warning/10',
                text: isActive ? 'text-warning-foreground' : 'text-warning',
                border: 'border-warning/20',
                icon: 'text-warning'
            }
        };
        return colors?.[color];
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                        <Icon name="GitBranch" size={16} className="text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">Proven Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Our 4-Stage Placement Process
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        From language training to successful integration - we guide every step of the journey.
                    </p>
                </motion.div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block mb-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Timeline Line */}
                        <div className="absolute top-20 left-0 right-0 h-0.5 bg-border"></div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${((activeStep + 1) / processSteps?.length) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="absolute top-20 left-0 h-0.5 bg-primary"
                        ></motion.div>

                        <div className="grid grid-cols-4 gap-8">
                            {processSteps?.map((step, index) => {
                                const colors = getColorClasses(step?.color, index <= activeStep);
                                return (
                                    <motion.div
                                        key={step?.id}
                                        variants={stepVariants}
                                        className="relative cursor-pointer"
                                        onMouseEnter={() => setActiveStep(index)}
                                    >
                                        {/* Step Circle */}
                                        <div className={`w-16 h-16 rounded-full ${colors?.bg} ${colors?.border} border-2 flex items-center justify-center mx-auto mb-6 transition-all duration-300`}>
                                            <Icon name={step?.icon} size={24} className={colors?.icon} />
                                        </div>
                                        {/* Step Content */}
                                        <div className="text-center">
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${colors?.bg} ${colors?.text} border ${colors?.border}`}>
                                                {step?.duration}
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">{step?.title}</h3>
                                            <p className={`text-sm font-medium mb-3 ${colors?.text}`}>{step?.subtitle}</p>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{step?.description}</p>
                                        </div>
                                        {/* Step Number */}
                                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                                            <span className="text-xs font-bold text-primary">{step?.id}</span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Accordion */}
                <div className="lg:hidden mb-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {processSteps?.map((step, index) => {
                            const colors = getColorClasses(step?.color, index === activeStep);
                            const isActive = index === activeStep;

                            return (
                                <motion.div
                                    key={step?.id}
                                    variants={stepVariants}
                                    className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${isActive ? 'ring-2 ring-primary/20' : ''}`}
                                >
                                    <button
                                        onClick={() => setActiveStep(isActive ? -1 : index)}
                                        className="w-full p-6 text-left flex items-center justify-between"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-12 h-12 rounded-full ${colors?.bg} ${colors?.border} border-2 flex items-center justify-center`}>
                                                <Icon name={step?.icon} size={20} className={colors?.icon} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground">{step?.title}</h3>
                                                <p className={`text-sm ${colors?.text}`}>{step?.subtitle}</p>
                                            </div>
                                        </div>
                                        <Icon name={isActive ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground" />
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: isActive ? "auto" : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${colors?.bg} ${colors?.text} border ${colors?.border}`}>
                                                {step?.duration}
                                            </div>
                                            <p className="text-muted-foreground mb-4">{step?.description}</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {step?.details?.map((detail, detailIndex) => (
                                                    <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                                                        <Icon name="CheckCircle" size={12} className="text-success mr-2" />
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Process Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="glass-card p-8 rounded-xl mb-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">12-18</div>
                            <div className="text-sm text-muted-foreground">Months Total Duration</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-success mb-2">94%</div>
                            <div className="text-sm text-muted-foreground">Successful Placements</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-secondary mb-2">€8,500</div>
                            <div className="text-sm text-muted-foreground">Average Placement Cost</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        iconName="GitBranch"
                        iconPosition="right"
                        onClick={() => onNavigate('/process')}
                        className="px-8 py-4"
                    >
                        View Detailed Process
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessVisualization;