import React from 'react';
import Icon from '../../../components/AppIcon';

const QualificationCriteria = () => {
    const criteria = [
        {
            category: "Institution Requirements",
            icon: "Building2",
            requirements: [
                {
                    title: "Valid Operating License",
                    description: "Current license for healthcare facilities in Germany",
                    status: "required"
                },
                {
                    title: "EU Compliance",
                    description: "Compliance with all EU healthcare directives",
                    status: "required"
                },
                {
                    title: "Minimum Size",
                    description: "Minimum 50 beds or equivalent capacity",
                    status: "preferred"
                }
            ]
        },
        {
            category: "Staffing Volume",
            icon: "Users",
            requirements: [
                {
                    title: "Minimum Requirement",
                    description: "Minimum 5 full-time positions per year",
                    status: "required"
                },
                {
                    title: "Long-term Planning",
                    description: "Staff planning for at least 12 months",
                    status: "required"
                },
                {
                    title: "Growth Potential",
                    description: "Planned expansion or additional needs",
                    status: "preferred"
                }
            ]
        },
        {
            category: "Financial Requirements",
            icon: "CreditCard",
            requirements: [
                {
                    title: "Budget Proof",
                    description: "Evidence of available recruitment budget",
                    status: "required"
                },
                {
                    title: "Payment Capability",
                    description: "Credit worthiness and timely payment history",
                    status: "required"
                },
                {
                    title: "Investment Willingness",
                    description: "Willingness to invest in quality personnel",
                    status: "preferred"
                }
            ]
        },
        {
            category: "Integration Capability",
            icon: "Settings",
            requirements: [
                {
                    title: "HR Processes",
                    description: "Established onboarding and integration processes",
                    status: "required"
                },
                {
                    title: "Language Support",
                    description: "Programs for German language development for international staff",
                    status: "preferred"
                },
                {
                    title: "Cultural Openness",
                    description: "Experience with international professionals",
                    status: "preferred"
                }
            ]
        }
    ];

    const getStatusBadge = (status) => {
        if (status === 'required') {
            return (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-error/10 text-error">
                    <Icon name="AlertCircle" size={12} className="mr-1" />
                    Required
                </span>
            );
        } else {
            return (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                    <Icon name="CheckCircle" size={12} className="mr-1" />
                    Preferred
                </span>
            );
        }
    };

    return (
        <div className="bg-card rounded-xl border border-border p-8">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Partnership Criteria
                </h2>
                <p className="text-muted-foreground">
                    Requirements for a successful collaboration
                </p>
            </div>
            <div className="space-y-8">
                {criteria?.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Icon name={category?.icon} size={20} className="text-primary" />
                            </div>
                            <h3 className="text-lg font-medium text-foreground">
                                {category?.category}
                            </h3>
                        </div>

                        <div className="grid gap-4">
                            {category?.requirements?.map((requirement, reqIndex) => (
                                <div
                                    key={reqIndex}
                                    className="p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="text-sm font-medium text-foreground">
                                            {requirement?.title}
                                        </h4>
                                        {getStatusBadge(requirement?.status)}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {requirement?.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 p-6 bg-secondary/5 rounded-lg border border-secondary/20">
                <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="text-sm font-medium text-foreground mb-2">
                            Don't meet all the criteria?
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            Contact us anyway! We review each case individually and will work together to find a solution for your staffing needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <span className="inline-flex items-center text-xs text-muted-foreground">
                                <Icon name="Phone" size={12} className="mr-1" />
                                +49 89 123 456 789
                            </span>
                            <span className="inline-flex items-center text-xs text-muted-foreground">
                                <Icon name="Mail" size={12} className="mr-1" />
                                partner@techdeutsch.de
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualificationCriteria;