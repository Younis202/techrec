import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
    const [activeStep, setActiveStep] = useState(0);

    const processSteps = [
        {
            id: 1,
            title: "Language Training",
            subtitle: "Sprachausbildung",
            duration: "6-12 Months",
            color: "bg-blue-500",
            icon: "BookOpen",
            description: "Intensive German language training to B2/C1 level with medical terminology focus",
            activities: [
                "Basic German skills (A1-A2)",
                "Medical terminology",
                "Hospital communication",
                "Telc B2/C1 certification"
            ],
            milestones: [
                { month: 3, task: "A2 level achieved" },
                { month: 6, task: "B1 medical terminology" },
                { month: 9, task: "B2 exam preparation" },
                { month: 12, task: "C1 certificate obtained" }
            ],
            cost: "€2,500 - 4,000",
            successRate: "94%"
        },
        {
            id: 2,
            title: "Credential Vetting",
            subtitle: "Qualifikationsprüfung",
            duration: "2-4 Months",
            color: "bg-emerald-500",
            icon: "Shield",
            description: "Comprehensive credential verification and German healthcare compliance assessment",
            activities: [
                "Apply for diploma recognition",
                "Validate work experience",
                "Obtain health certificate",
                "Acquire conduct certificate"
            ],
            milestones: [
                { month: 1, task: "Document collection" },
                { month: 2, task: "Official review" },
                { month: 3, task: "Recognition decision" },
                { month: 4, task: "Work permit" }
            ],
            cost: "€800 - 1,200",
            successRate: "89%"
        },
        {
            id: 3,
            title: "Contract Negotiation",
            subtitle: "Vertragsverhandlung",
            duration: "2-6 Weeks",
            color: "bg-amber-500",
            icon: "FileText",
            description: "Salary negotiation, contract terms, and placement coordination with German partners",
            activities: [
                "Conduct salary negotiation",
                "Prepare employment contract",
                "Clarify social insurance",
                "Support housing search"
            ],
            milestones: [
                { week: 1, task: "Job offer received" },
                { week: 2, task: "Contract details clarified" },
                { week: 4, task: "Contract signed" },
                { week: 6, task: "Start date confirmed" }
            ],
            cost: "€500 - 800",
            successRate: "96%"
        },
        {
            id: 4,
            title: "Visa & Placement",
            subtitle: "Visa & Vermittlung",
            duration: "4-8 Weeks",
            color: "bg-purple-500",
            icon: "Plane",
            description: "Visa processing, relocation support, and successful placement in German healthcare facility",
            activities: [
                "Apply for visa",
                "Organize relocation",
                "Plan onboarding",
                "Ensure follow-up support"
            ],
            milestones: [
                { week: 2, task: "Visa approved" },
                { week: 4, task: "Flight booked" },
                { week: 6, task: "Arrival in Germany" },
                { week: 8, task: "Started at workplace" }
            ],
            cost: "€1,000 - 1,500",
            successRate: "98%"
        }
    ];

    return (
        <div className="bg-card rounded-xl p-8 border border-border">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our Proven 4-Step Process
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    From language training to successful placement -
                    a structured path to qualified healthcare professionals from Middle East
                </p>
            </div>
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-20 left-0 right-0 h-1 bg-border">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: `${((activeStep + 1) / processSteps?.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    {/* Timeline Steps */}
                    <div className="grid grid-cols-4 gap-8 relative">
                        {processSteps?.map((step, index) => (
                            <motion.div
                                key={step?.id}
                                className="text-center cursor-pointer"
                                onClick={() => setActiveStep(index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Step Circle */}
                                <div className={`
                  w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                  transition-all duration-300 border-4
                  ${activeStep >= index
                                        ? `${step?.color} border-white text-white`
                                        : 'bg-muted border-border text-muted-foreground'
                                    }
                `}>
                                    <Icon name={step?.icon} size={24} />
                                </div>

                                {/* Step Info */}
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-foreground text-sm">
                                        {step?.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {step?.subtitle}
                                    </p>
                                    <p className="text-xs font-medium text-primary">
                                        {step?.duration}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Active Step Details */}
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-12 bg-muted/50 rounded-lg p-8"
                >
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${processSteps?.[activeStep]?.color}`}>
                                    <Icon name={processSteps?.[activeStep]?.icon} size={16} color="white" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {processSteps?.[activeStep]?.title}
                                </h3>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                {processSteps?.[activeStep]?.description}
                            </p>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-foreground">Main Activities:</h4>
                                <ul className="space-y-2">
                                    {processSteps?.[activeStep]?.activities?.map((activity, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Icon name="Check" size={16} className="text-success" />
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-card p-4 rounded-lg border border-border">
                                    <div className="text-2xl font-bold text-primary mb-1">
                                        {processSteps?.[activeStep]?.cost}
                                    </div>
                                    <div className="text-xs text-muted-foreground">Estimated Cost</div>
                                </div>
                                <div className="bg-card p-4 rounded-lg border border-border">
                                    <div className="text-2xl font-bold text-success mb-1">
                                        {processSteps?.[activeStep]?.successRate}
                                    </div>
                                    <div className="text-xs text-muted-foreground">Success Rate</div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-foreground mb-3">Milestones:</h4>
                                <div className="space-y-2">
                                    {processSteps?.[activeStep]?.milestones?.map((milestone, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm">
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                <span className="text-xs font-medium text-primary">
                                                    {milestone?.month || milestone?.week}
                                                </span>
                                            </div>
                                            <span className="text-muted-foreground">{milestone?.task}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-6">
                {processSteps?.map((step, index) => (
                    <motion.div
                        key={step?.id}
                        className="border border-border rounded-lg overflow-hidden"
                        initial={false}
                        animate={{ backgroundColor: activeStep === index ? "rgba(212, 175, 55, 0.1)" : "transparent" }}
                    >
                        <button
                            className="w-full p-4 text-left flex items-center gap-4"
                            onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step?.color}`}>
                                <Icon name={step?.icon} size={20} color="white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground">{step?.title}</h3>
                                <p className="text-sm text-muted-foreground">{step?.duration}</p>
                            </div>
                            <Icon
                                name={activeStep === index ? "ChevronUp" : "ChevronDown"}
                                size={20}
                                className="text-muted-foreground"
                            />
                        </button>

                        {activeStep === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="px-4 pb-4"
                            >
                                <p className="text-muted-foreground mb-4">{step?.description}</p>

                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="bg-muted/50 p-3 rounded">
                                        <div className="text-lg font-bold text-primary">{step?.cost}</div>
                                        <div className="text-xs text-muted-foreground">Cost</div>
                                    </div>
                                    <div className="bg-muted/50 p-3 rounded">
                                        <div className="text-lg font-bold text-success">{step?.successRate}</div>
                                        <div className="text-xs text-muted-foreground">Success</div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {step?.activities?.map((activity, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Icon name="Check" size={14} className="text-success" />
                                            {activity}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProcessTimeline;