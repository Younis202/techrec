import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const QualityAssurance = () => {
    const [activeTab, setActiveTab] = useState(0);

    const qualityTabs = [
        {
            id: "language",
            title: "Language Qualification",
            icon: "MessageSquare",
            content: {
                title: "German Language Competence B2/C1",
                description: "Comprehensive language training with medical focus for safe communication in hospitals",
                requirements: [
                    "Telc German B2/C1 certificate",
                    "Medical terminology",
                    "Patient communication",
                    "Documentation in German"
                ],
                process: [
                    { step: "Placement Test", duration: "1 Day", description: "Determination of current language level" },
                    { step: "Intensive Course", duration: "6-8 Months", description: "Daily German lessons with medical focus" },
                    { step: "Exam Preparation", duration: "4 Weeks", description: "Targeted preparation for Telc B2/C1 exam" },
                    { step: "Certification", duration: "1 Day", description: "Official Telc exam and certificate" }
                ],
                successRate: "94%",
                averageDuration: "8 Months"
            }
        },
        {
            id: "credentials",
            title: "Credential Review",
            icon: "Shield",
            content: {
                title: "Recognition of Professional Qualifications",
                description: "Complete verification and recognition of all medical qualifications according to German standards",
                requirements: [
                    "Diploma recognition by authorities",
                    "Proof of work experience",
                    "Health certificate",
                    "Conduct certificate from home country"
                ],
                process: [
                    { step: "Document Collection", duration: "2-4 Weeks", description: "Compilation of all required documents" },
                    { step: "Translation & Certification", duration: "2 Weeks", description: "Official translation by sworn translators" },
                    { step: "Official Review", duration: "6-12 Weeks", description: "Review by German recognition authorities" },
                    { step: "Recognition Decision", duration: "1 Week", description: "Receipt of official recognition" }
                ],
                successRate: "89%",
                averageDuration: "3 Months"
            }
        },
        {
            id: "integration",
            title: "Cultural Integration",
            icon: "Globe",
            content: {
                title: "Preparation for the German Healthcare System",
                description: "Comprehensive training on German work practices, culture and healthcare system standards",
                requirements: [
                    "German culture training",
                    "Healthcare system training",
                    "Labor law basics",
                    "Social insurance introduction"
                ],
                process: [
                    { step: "Culture Workshop", duration: "1 Week", description: "Introduction to German culture and work practices" },
                    { step: "Healthcare System Training", duration: "2 Weeks", description: "Structure and functioning of the German healthcare system" },
                    { step: "Practical Exercises", duration: "1 Week", description: "Role plays and situation training" },
                    { step: "Completion Certificate", duration: "1 Day", description: "Certificate of successful participation" }
                ],
                successRate: "98%",
                averageDuration: "4 Weeks"
            }
        }
    ];

    return (
        <div className="bg-card rounded-xl p-8 border border-border">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                    Quality Assurance & Standards
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our multi-stage quality checks ensure that only the most qualified
                    candidates are placed with German partners
                </p>
            </div>
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8 bg-muted/30 p-2 rounded-lg">
                {qualityTabs?.map((tab, index) => (
                    <button
                        key={tab?.id}
                        onClick={() => setActiveTab(index)}
                        className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md
              transition-all duration-300 text-sm font-medium
              ${activeTab === index
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            }
            `}
                    >
                        <Icon name={tab?.icon} size={16} />
                        <span className="hidden sm:inline">{tab?.title}</span>
                    </button>
                ))}
            </div>
            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                >
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Content Overview */}
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {qualityTabs?.[activeTab]?.content?.title}
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                {qualityTabs?.[activeTab]?.content?.description}
                            </p>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-foreground">Requirements:</h4>
                                <ul className="space-y-2">
                                    {qualityTabs?.[activeTab]?.content?.requirements?.map((req, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Icon name="CheckCircle" size={16} className="text-success" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-muted/50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-success mb-1">
                                        {qualityTabs?.[activeTab]?.content?.successRate}
                                    </div>
                                    <div className="text-xs text-muted-foreground">Success Rate</div>
                                </div>
                                <div className="bg-muted/50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-primary mb-1">
                                        {qualityTabs?.[activeTab]?.content?.averageDuration}
                                    </div>
                                    <div className="text-xs text-muted-foreground">Average Duration</div>
                                </div>
                            </div>
                        </div>

                        {/* Process Steps */}
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Process Steps:</h4>
                            <div className="space-y-4">
                                {qualityTabs?.[activeTab]?.content?.process?.map((step, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        {/* Timeline connector */}
                                        {idx < qualityTabs?.[activeTab]?.content?.process?.length - 1 && (
                                            <div className="absolute left-3 top-8 w-0.5 h-12 bg-border" />
                                        )}

                                        {/* Step indicator */}
                                        <div className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                            <span className="text-xs font-medium text-primary-foreground">
                                                {idx + 1}
                                            </span>
                                        </div>

                                        {/* Step content */}
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5 className="font-medium text-foreground">{step?.step}</h5>
                                                <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                                                    {step?.duration}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{step?.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default QualityAssurance;