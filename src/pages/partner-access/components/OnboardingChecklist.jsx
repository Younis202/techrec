import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OnboardingChecklist = () => {
    const [expandedStep, setExpandedStep] = useState(null);

    const checklistSteps = [
        {
            id: 1,
            title: "Submit Access Request",
            description: "Fill out the partner form with your institution details",
            timeframe: "5 minutes",
            status: "pending",
            details: [
                "Provide institution information",
                "Specify staffing needs",
                "Indicate budget range",
                "Upload required documents"
            ],
            icon: "FileText"
        },
        {
            id: 2,
            title: "Schedule Initial Consultation",
            description: "Personal meeting with our partner team",
            timeframe: "1-2 business days",
            status: "pending",
            details: [
                "Initial phone consultation (30 min.)",
                "Conduct needs analysis",
                "Explain partnership model",
                "Define next steps"
            ],
            icon: "Calendar"
        },
        {
            id: 3,
            title: "Qualification Review",
            description: "Verification of partnership requirements",
            timeframe: "3-5 business days",
            status: "pending",
            details: [
                "License and certification check",
                "Minimum volume assessment",
                "EU compliance review",
                "Validate references"
            ],
            icon: "Shield"
        },
        {
            id: 4,
            title: "Contract Completion",
            description: "Partnership agreement and dashboard access",
            timeframe: "1-2 weeks",
            status: "pending",
            details: [
                "Sign partnership agreement",
                "Set up dashboard access",
                "Unlock candidate pool",
                "Complete onboarding training"
            ],
            icon: "CheckCircle"
        }
    ];

    const toggleStep = (stepId) => {
        setExpandedStep(expandedStep === stepId ? null : stepId);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'text-success';
            case 'in_progress':
                return 'text-warning';
            default:
                return 'text-muted-foreground';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return 'CheckCircle';
            case 'in_progress':
                return 'Clock';
            default:
                return 'Circle';
        }
    };

    return (
        <div className="bg-card rounded-xl border border-border p-8">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Onboarding Process
                </h2>
                <p className="text-muted-foreground">
                    Your path to partnership in 4 simple steps
                </p>
            </div>
            <div className="space-y-4">
                {checklistSteps?.map((step, index) => (
                    <div key={step?.id} className="border border-border rounded-lg overflow-hidden">
                        <div
                            className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => toggleStep(step?.id)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-sm font-semibold text-primary">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <Icon
                                            name={getStatusIcon(step?.status)}
                                            size={20}
                                            className={getStatusColor(step?.status)}
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-foreground mb-1">
                                            {step?.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            {step?.description}
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                <Icon name="Clock" size={12} className="mr-1" />
                                                {step?.timeframe}
                                            </span>
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                                                <Icon name={step?.icon} size={12} className="mr-1" />
                                                {step?.status === 'completed' ? 'Completed' : 'Pending'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Icon
                                    name={expandedStep === step?.id ? "ChevronUp" : "ChevronDown"}
                                    size={20}
                                    className="text-muted-foreground"
                                />
                            </div>
                        </div>

                        {expandedStep === step?.id && (
                            <div className="px-6 pb-6 border-t border-border bg-muted/20">
                                <div className="pt-4">
                                    <h4 className="text-sm font-medium text-foreground mb-3">
                                        What happens in this step:
                                    </h4>
                                    <ul className="space-y-2">
                                        {step?.details?.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-center space-x-3">
                                                <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                                                <span className="text-sm text-muted-foreground">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="text-sm font-medium text-foreground mb-1">
                            Average Onboarding Time
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            Most partners are fully onboarded within 2-3 weeks and have access to our candidate pool.
                        </p>
                        <Button
                            variant="outline"
                            size="sm"
                            iconName="MessageCircle"
                            iconPosition="left"
                        >
                            Questions about the process?
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingChecklist;