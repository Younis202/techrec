import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessStats = () => {
    const stats = [
        {
            icon: "Users",
            value: "342",
            label: "Successfully Placed",
            sublabel: "In the last 24 months",
            color: "text-success",
            bgColor: "bg-success/10"
        },
        {
            icon: "Clock",
            value: "8.2",
            label: "Months Average",
            sublabel: "From start to placement",
            color: "text-primary",
            bgColor: "bg-primary/10"
        },
        {
            icon: "Award",
            value: "96%",
            label: "Success Rate",
            sublabel: "Candidates reach Germany",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10"
        },
        {
            icon: "Heart",
            value: "4.8/5",
            label: "Partner Satisfaction",
            sublabel: "Rating from German clinics",
            color: "text-pink-500",
            bgColor: "bg-pink-500/10"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="bg-card rounded-xl p-8 border border-border">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                    Process Success Statistics
                </h2>
                <p className="text-muted-foreground">
                    Proven results of our structured placement methodology
                </p>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {stats?.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                    >
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${stat?.bgColor} flex items-center justify-center`}>
                            <Icon name={stat?.icon} size={24} className={stat?.color} />
                        </div>

                        <div className={`text-3xl font-bold ${stat?.color} mb-2`}>
                            {stat?.value}
                        </div>

                        <div className="text-sm font-medium text-foreground mb-1">
                            {stat?.label}
                        </div>

                        <div className="text-xs text-muted-foreground">
                            {stat?.sublabel}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="text-lg font-semibold text-foreground mb-1">Average Duration</div>
                        <div className="text-sm text-muted-foreground">
                            Language training: 8-10 months • Placement: 2-4 months
                        </div>
                    </div>

                    <div>
                        <div className="text-lg font-semibold text-foreground mb-1">Quality Assurance</div>
                        <div className="text-sm text-muted-foreground">
                            B2/C1 Certificate • Recognized qualifications • Health examination
                        </div>
                    </div>

                    <div>
                        <div className="text-lg font-semibold text-foreground mb-1">Follow-up Support</div>
                        <div className="text-sm text-muted-foreground">
                            6 months support • Cultural integration • Workplace guidance
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessStats;