import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSummary = ({ onNavigate }) => {
    const services = [
        {
            id: 1,
            title: "Permanent Placement",
            subtitle: "Permanent Recruitment",
            description: "Complete recruitment and placement of qualified nurses for permanent positions in your facility.",
            icon: "UserCheck",
            color: "primary",
            pricing: "from €8,500",
            features: [
                "Comprehensive candidate screening",
                "Language training to B2/C1",
                "EU recognition process",
                "6 months follow-up support",
                "Replacement guarantee"
            ],
            timeline: "12-18 Months",
            popular: true
        },
        {
            id: 2,
            title: "Temporary Staffing",
            subtitle: "Flexible Staff Coverage",
            description: "Short-term and flexible staffing for shortages, vacation coverage, and project work.",
            icon: "Clock",
            color: "secondary",
            pricing: "from €45/hour",
            features: [
                "Quick availability",
                "Flexible assignment duration",
                "Pre-qualified staff",
                "Administrative processing",
                "24/7 support"
            ],
            timeline: "2-4 Weeks",
            popular: false
        },
        {
            id: 3,
            title: "Language Training",
            subtitle: "Medical German",
            description: "Specialized German courses for healthcare professionals focusing on medical terminology and communication.",
            icon: "Languages",
            color: "success",
            pricing: "from €2,800",
            features: [
                "Medical terminology",
                "Exam preparation",
                "Cultural integration",
                "Online & in-person",
                "Certified trainers"
            ],
            timeline: "6-12 Months",
            popular: false
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            primary: {
                bg: 'bg-primary/10',
                text: 'text-primary',
                border: 'border-primary/20',
                icon: 'text-primary',
                button: 'bg-primary text-primary-foreground hover:bg-primary/90'
            },
            secondary: {
                bg: 'bg-secondary/10',
                text: 'text-secondary',
                border: 'border-secondary/20',
                icon: 'text-secondary',
                button: 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
            },
            success: {
                bg: 'bg-success/10',
                text: 'text-success',
                border: 'border-success/20',
                icon: 'text-success',
                button: 'bg-success text-success-foreground hover:bg-success/90'
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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20 bg-card/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                        <Icon name="Briefcase" size={16} className="text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">Our Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Tailored Solutions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Three proven service packages for your individual healthcare staffing requirements.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
                >
                    {services?.map((service) => {
                        const colors = getColorClasses(service?.color);
                        return (
                            <motion.div
                                key={service?.id}
                                variants={cardVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className={`glass-card p-8 rounded-xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 ${service?.popular ? 'ring-2 ring-primary/20' : ''
                                    }`}
                            >
                                {service?.popular && (
                                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-medium rounded-bl-lg">
                                        Popular
                                    </div>
                                )}
                                <div className="mb-6">
                                    <div className={`w-16 h-16 rounded-xl ${colors?.bg} ${colors?.border} border-2 flex items-center justify-center mb-4`}>
                                        <Icon name={service?.icon} size={28} className={colors?.icon} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">{service?.title}</h3>
                                    <p className={`text-sm font-medium ${colors?.text} mb-4`}>{service?.subtitle}</p>
                                    <p className="text-muted-foreground leading-relaxed">{service?.description}</p>
                                </div>
                                <div className="mb-6">
                                    <div className="flex items-baseline justify-between mb-4">
                                        <div className="text-2xl font-bold text-foreground">{service?.pricing}</div>
                                        <div className="text-sm text-muted-foreground">{service?.timeline}</div>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-8">
                                    {service?.features?.map((feature, index) => (
                                        <div key={index} className="flex items-center text-sm">
                                            <Icon name="CheckCircle" size={16} className="text-success mr-3 flex-shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    variant="outline"
                                    fullWidth
                                    iconName="ArrowRight"
                                    iconPosition="right"
                                    className={`group-hover:${colors?.button} transition-all duration-300`}
                                >
                                    View Details
                                </Button>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* ROI Calculator Teaser */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="glass-card p-8 rounded-xl text-center"
                >
                    <div className="max-w-3xl mx-auto">
                        <Icon name="Calculator" size={48} className="text-primary mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            ROI Calculator for Staffing Costs
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Calculate the cost and time savings of our placement services compared to internal recruitment.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-success mb-2">65%</div>
                                <div className="text-sm text-muted-foreground">Cost Savings</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary mb-2">8 Months</div>
                                <div className="text-sm text-muted-foreground">Time Savings</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary mb-2">94%</div>
                                <div className="text-sm text-muted-foreground">Success Rate</div>
                            </div>
                        </div>
                        <Button
                            variant="default"
                            size="lg"
                            iconName="Calculator"
                            iconPosition="left"
                            onClick={() => onNavigate('/services')}
                            className="px-8 py-4"
                        >
                            Calculate ROI
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        iconName="Briefcase"
                        iconPosition="right"
                        onClick={() => onNavigate('/services')}
                        className="px-8 py-4"
                    >
                        All Services in Detail
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSummary;