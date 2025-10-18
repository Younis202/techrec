import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyInfoSection = () => {
    const milestones = [
        {
            year: "2019",
            title: "Company Foundation",
            description: "Founded in Munich with focus on German-Iraqi healthcare partnerships"
        },
        {
            year: "2020",
            title: "First Placements",
            description: "Successful placement of 15 healthcare professionals in Bavarian clinics"
        },
        {
            year: "2021",
            title: "Language Program",
            description: "Launch of intensive German language training for healthcare professionals"
        },
        {
            year: "2022",
            title: "Expansion",
            description: "Expansion to 5 German states and 200+ candidates"
        },
        {
            year: "2023",
            title: "Certification",
            description: "ISO 9001 certification and recognition by German health authorities"
        },
        {
            year: "2024",
            title: "Digital Innovation",
            description: "Launch of AI-powered matching platform for optimized placements"
        }
    ];

    const stats = [
        {
            icon: "Users",
            value: "500+",
            label: "Placed Professionals",
            description: "Successfully placed healthcare professionals"
        },
        {
            icon: "Building2",
            value: "85+",
            label: "Partner Clinics",
            description: "Trusted collaborations"
        },
        {
            icon: "Globe",
            value: "12",
            label: "States",
            description: "Nationwide presence"
        },
        {
            icon: "Award",
            value: "98%",
            label: "Success Rate",
            description: "Long-term placements"
        }
    ];

    return (
        <div className="space-y-12">
            {/* Company Mission */}
            <div className="bg-card border border-border rounded-xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Our Mission
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We connect qualified Iraqi healthcare professionals with German clinics and create sustainable partnerships that benefit both sides. Our focus is on quality, trust, and long-term success.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats?.map((stat, index) => (
                        <div key={index} className="text-center p-4 rounded-lg bg-muted/50">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Icon name={stat?.icon} size={24} className="text-primary" />
                            </div>
                            <div className="text-2xl font-bold text-foreground mb-1">
                                {stat?.value}
                            </div>
                            <div className="text-sm font-medium text-foreground mb-1">
                                {stat?.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                {stat?.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Company Timeline */}
            <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                    Our Path to Success
                </h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                    <div className="space-y-8">
                        {milestones?.map((milestone, index) => (
                            <div key={index} className="relative flex items-start gap-6">
                                {/* Timeline Dot */}
                                <div className="hidden md:flex w-8 h-8 bg-primary rounded-full items-center justify-center flex-shrink-0 relative z-10">
                                    <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 md:ml-0 ml-0">
                                    <div className="bg-muted/50 rounded-lg p-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {milestone?.title}
                                            </h3>
                                            <span className="text-primary font-medium text-sm">
                                                {milestone?.year}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {milestone?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Certifications & Recognition */}
            <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                    Certifications & Recognition
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                            <Icon name="Shield" size={24} className="text-success" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">ISO 9001:2015</h3>
                            <p className="text-sm text-muted-foreground">Quality Management</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Award" size={24} className="text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">BAMF Approval</h3>
                            <p className="text-sm text-muted-foreground">Language Course Provider</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <Icon name="CheckCircle" size={24} className="text-secondary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">EU Compliance</h3>
                            <p className="text-sm text-muted-foreground">GDPR Compliant</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfoSection;