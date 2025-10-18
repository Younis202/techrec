import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
    const certifications = [
        {
            id: 1,
            name: "EU Compliance",
            description: "Full compliance with all EU directives for staffing agencies",
            icon: "Shield",
            color: "primary"
        },
        {
            id: 2,
            name: "ISO 9001:2015",
            description: "Certified quality management system",
            icon: "Award",
            color: "secondary"
        },
        {
            id: 3,
            name: "GDPR Compliant",
            description: "Data protection according to highest European standards",
            icon: "Lock",
            color: "success"
        },
        {
            id: 4,
            name: "24/7 Support",
            description: "Round-the-clock support for all partners",
            icon: "Clock",
            color: "warning"
        }
    ];

    const partnerships = [
        {
            id: 1,
            name: "German Hospital Association",
            type: "Strategic Partner",
            logo: "Building2"
        },
        {
            id: 2,
            name: "Federal Employment Agency",
            type: "Official Partner",
            logo: "Users"
        },
        {
            id: 3,
            name: "Goethe Institute",
            type: "Language Partner",
            logo: "Languages"
        },
        {
            id: 4,
            name: "German Chamber of Commerce",
            type: "Certification Partner",
            logo: "Award"
        }
    ];

    const statistics = [
        {
            id: 1,
            value: "500+",
            label: "Successful Placements",
            icon: "UserCheck"
        },
        {
            id: 2,
            value: "150+",
            label: "Partner Clinics",
            icon: "Building2"
        },
        {
            id: 3,
            value: "98%",
            label: "Customer Satisfaction",
            icon: "Star"
        },
        {
            id: 4,
            value: "5 Years",
            label: "Market Experience",
            icon: "Calendar"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            primary: 'text-primary bg-primary/10 border-primary/20',
            secondary: 'text-secondary bg-secondary/10 border-secondary/20',
            success: 'text-success bg-success/10 border-success/20',
            warning: 'text-warning bg-warning/10 border-warning/20'
        };
        return colors?.[color];
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
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
                    <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full border border-success/20 mb-6">
                        <Icon name="Shield" size={16} className="text-success mr-2" />
                        <span className="text-sm font-medium text-success">Trust & Security</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Your Security is Our Promise
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Certified quality, proven partnerships, and transparent processes for your success.
                    </p>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold text-foreground text-center mb-8">Certifications & Standards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications?.map((cert) => (
                            <motion.div
                                key={cert?.id}
                                variants={itemVariants}
                                className="glass-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-full ${getColorClasses(cert?.color)} border-2 flex items-center justify-center mx-auto mb-4`}>
                                    <Icon name={cert?.icon} size={24} />
                                </div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">{cert?.name}</h4>
                                <p className="text-sm text-muted-foreground">{cert?.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Statistics */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="glass-card p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Track Record</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {statistics?.map((stat) => (
                                <motion.div
                                    key={stat?.id}
                                    variants={itemVariants}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Icon name={stat?.icon} size={20} className="text-primary" />
                                    </div>
                                    <div className="text-3xl font-bold text-foreground mb-2">{stat?.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat?.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Partnerships */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold text-foreground text-center mb-8">Strategic Partnerships</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {partnerships?.map((partner) => (
                            <motion.div
                                key={partner?.id}
                                variants={itemVariants}
                                className="glass-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                                    <Icon name={partner?.logo} size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                </div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">{partner?.name}</h4>
                                <p className="text-sm text-primary font-medium">{partner?.type}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Trust Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="glass-card p-8 rounded-xl text-center"
                >
                    <Icon name="ShieldCheck" size={48} className="text-success mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        100% Transparency, 0% Hidden Costs
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                        All prices are communicated transparently. No hidden fees, no surprises.
                        Your investment in qualified staff is in safe hands with us.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                            Fixed prices without surcharges
                        </div>
                        <div className="flex items-center">
                            <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                            Transparent cost breakdown
                        </div>
                        <div className="flex items-center">
                            <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                            No hidden fees
                        </div>
                        <div className="flex items-center">
                            <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                            Money-back guarantee
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustSignals;