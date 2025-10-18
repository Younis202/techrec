import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessDocumentation = () => {
    const [activeDocument, setActiveDocument] = useState(0);

    const documents = [
        {
            id: "timeline",
            title: "Timeline Matrix",
            icon: "Calendar",
            description: "Detailed overview of all process steps with realistic timelines",
            content: {
                phases: [
                    {
                        name: "Preparation Phase",
                        duration: "2-4 Weeks",
                        tasks: [
                            "Candidate selection and evaluation",
                            "Initial document collection",
                            "Language level assessment",
                            "Medical preliminary examination"
                        ]
                    },
                    {
                        name: "Language Training",
                        duration: "6-12 Months",
                        tasks: [
                            "Intensive German courses A1-B2",
                            "Medical terminology",
                            "German culture training",
                            "Telc B2/C1 exam preparation"
                        ]
                    },
                    {
                        name: "Qualification Review",
                        duration: "2-4 Months",
                        tasks: [
                            "Apply for diploma recognition",
                            "Document work experience",
                            "Health and conduct certificate",
                            "Receive recognition decision"
                        ]
                    },
                    {
                        name: "Placement & Visa",
                        duration: "4-8 Weeks",
                        tasks: [
                            "Job matching with partners",
                            "Contract negotiation",
                            "Visa application and approval",
                            "Travel and integration"
                        ]
                    }
                ]
            }
        },
        {
            id: "quality",
            title: "Quality Protocols",
            icon: "Shield",
            description: "Comprehensive quality assurance measures for each process step",
            content: {
                checkpoints: [
                    {
                        phase: "Language Competence",
                        criteria: [
                            "Telc B2/C1 certificate required",
                            "Medical terminology verified",
                            "Oral communication skills",
                            "Written documentation competence"
                        ],
                        successRate: "94%"
                    },
                    {
                        phase: "Professional Qualification",
                        criteria: [
                            "Recognized nursing education",
                            "Minimum 2 years work experience",
                            "Specialization documented",
                            "Continuing education certificates available"
                        ],
                        successRate: "89%"
                    },
                    {
                        phase: "Personal Suitability",
                        criteria: [
                            "Cultural adaptability",
                            "Teamwork and communication",
                            "Resilience and flexibility",
                            "Motivation for Germany"
                        ],
                        successRate: "96%"
                    }
                ]
            }
        },
        {
            id: "responsibilities",
            title: "Responsibility Matrix",
            icon: "Users",
            description: "Clear task distribution between MEDeutsch MENA, candidates and partners",
            content: {
                responsibilities: [
                    {
                        actor: "MEDeutsch MENA",
                        tasks: [
                            "Candidate recruitment and selection",
                            "Organize language training",
                            "Support qualification review",
                            "Assist with visa process",
                            "6 months follow-up support"
                        ],
                        color: "bg-primary/10 text-primary"
                    },
                    {
                        actor: "Candidate",
                        tasks: [
                            "Active participation in language courses",
                            "Provide complete documentation",
                            "Complete culture training",
                            "Flexibility with job offers",
                            "Integration in Germany"
                        ],
                        color: "bg-secondary/10 text-secondary"
                    },
                    {
                        actor: "Partner (Clinic)",
                        tasks: [
                            "Define job requirements",
                            "Provide employment contract",
                            "Plan onboarding",
                            "Support housing search",
                            "Feedback and evaluation"
                        ],
                        color: "bg-blue-500/10 text-blue-500"
                    }
                ]
            }
        }
    ];

    return (
        <div className="bg-card rounded-xl p-8 border border-border">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                    Process Documentation
                </h2>
                <p className="text-muted-foreground">
                    Transparent overview of timelines, quality standards and responsibilities
                </p>
            </div>
            {/* Document Tabs */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8 bg-muted/30 p-2 rounded-lg">
                {documents?.map((doc, index) => (
                    <button
                        key={doc?.id}
                        onClick={() => setActiveDocument(index)}
                        className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md
              transition-all duration-300 text-sm font-medium
              ${activeDocument === index
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            }
            `}
                    >
                        <Icon name={doc?.icon} size={16} />
                        <span className="hidden sm:inline">{doc?.title}</span>
                    </button>
                ))}
            </div>
            {/* Document Content */}
            <motion.div
                key={activeDocument}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
            >
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                        {documents?.[activeDocument]?.title}
                    </h3>
                    <p className="text-muted-foreground">
                        {documents?.[activeDocument]?.description}
                    </p>
                </div>

                {/* Timeline Matrix */}
                {activeDocument === 0 && (
                    <div className="space-y-4">
                        {documents?.[activeDocument]?.content?.phases?.map((phase, index) => (
                            <div key={index} className="bg-muted/30 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-lg font-semibold text-foreground">{phase?.name}</h4>
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                        {phase?.duration}
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {phase?.tasks?.map((task, taskIndex) => (
                                        <div key={taskIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Icon name="ArrowRight" size={14} className="text-primary" />
                                            {task}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Quality Protocols */}
                {activeDocument === 1 && (
                    <div className="space-y-4">
                        {documents?.[activeDocument]?.content?.checkpoints?.map((checkpoint, index) => (
                            <div key={index} className="bg-muted/30 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-lg font-semibold text-foreground">{checkpoint?.phase}</h4>
                                    <div className="flex items-center gap-2">
                                        <Icon name="Award" size={16} className="text-success" />
                                        <span className="text-success font-medium">{checkpoint?.successRate}</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {checkpoint?.criteria?.map((criterion, criterionIndex) => (
                                        <div key={criterionIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Icon name="CheckCircle" size={14} className="text-success" />
                                            {criterion}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Responsibility Matrix */}
                {activeDocument === 2 && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {documents?.[activeDocument]?.content?.responsibilities?.map((resp, index) => (
                            <div key={index} className="bg-muted/30 rounded-lg p-6">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${resp?.color}`}>
                                    <Icon name="User" size={14} />
                                    {resp?.actor}
                                </div>
                                <div className="space-y-3">
                                    {resp?.tasks?.map((task, taskIndex) => (
                                        <div key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <Icon name="Dot" size={14} className="text-primary mt-1 flex-shrink-0" />
                                            <span>{task}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ProcessDocumentation;