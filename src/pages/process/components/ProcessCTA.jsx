import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProcessCTA = () => {
    const [downloadStatus, setDownloadStatus] = useState('');

    const handleDownloadGuide = () => {
        setDownloadStatus('downloading');
        // Simulate download process
        setTimeout(() => {
            setDownloadStatus('completed');
            // Reset status after 3 seconds
            setTimeout(() => setDownloadStatus(''), 3000);
        }, 2000);
    };

    const handleScheduleConsultation = () => {
        // Navigate to contact or scheduling page
        window.location.href = '/partner-access';
    };

    const benefits = [
        {
            icon: "FileText",
            title: "Detailed Process Guide",
            description: "Complete documentation of all steps, timelines and requirements"
        },
        {
            icon: "Calculator",
            title: "Cost-Benefit Analysis",
            description: "Transparent breakdown of all costs and ROI calculations"
        },
        {
            icon: "Users",
            title: "Success Stories",
            description: "Case studies of successful placements and partner testimonials"
        },
        {
            icon: "Clock",
            title: "Timeline Template",
            description: "Realistic milestones and planning tools for your staffing needs"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-xl p-8 border border-primary/20">
            <div className="text-center mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Ready for the Next Step?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Get detailed information about our placement process
                        or schedule a personal consultation
                    </p>
                </motion.div>
            </div>
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {benefits?.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="text-center p-4 bg-card/50 rounded-lg border border-border/50"
                    >
                        <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name={benefit?.icon} size={20} className="text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground text-sm mb-2">
                            {benefit?.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                            {benefit?.description}
                        </p>
                    </motion.div>
                ))}
            </div>
            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
                <Button
                    variant="default"
                    size="lg"
                    iconName={downloadStatus === 'completed' ? 'Check' : 'Download'}
                    iconPosition="left"
                    loading={downloadStatus === 'downloading'}
                    onClick={handleDownloadGuide}
                    className="min-w-[200px]"
                >
                    {downloadStatus === 'completed'
                        ? 'Guide Downloaded' : 'Download Process Guide'
                    }
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    onClick={handleScheduleConsultation}
                    className="min-w-[200px] border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                    Schedule Consultation
                </Button>
            </motion.div>
            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                        <Icon name="Shield" size={16} className="text-success" />
                        <span className="text-sm text-muted-foreground">
                            100% Free Consultation
                        </span>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">
                            Response within 24h
                        </span>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <Icon name="Users" size={16} className="text-blue-500" />
                        <span className="text-sm text-muted-foreground">
                            Over 50 Partners Trust Us
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessCTA;