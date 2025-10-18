import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onNavigate }) => {
    const [currentStats, setCurrentStats] = useState({
        readyNurses: 0,
        pipelineCandidates: 0,
        placementRate: 0,
        avgPlacementTime: 0
    });

    const finalStats = {
        readyNurses: 28,
        pipelineCandidates: 120,
        placementRate: 94,
        avgPlacementTime: 45
    };

    useEffect(() => {
        const animateStats = () => {
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;

            let step = 0;
            const interval = setInterval(() => {
                step++;
                const progress = step / steps;
                const easeOut = 1 - Math.pow(1 - progress, 3);

                setCurrentStats({
                    readyNurses: Math.floor(finalStats?.readyNurses * easeOut),
                    pipelineCandidates: Math.floor(finalStats?.pipelineCandidates * easeOut),
                    placementRate: Math.floor(finalStats?.placementRate * easeOut),
                    avgPlacementTime: Math.floor(finalStats?.avgPlacementTime * easeOut)
                });

                if (step >= steps) {
                    clearInterval(interval);
                    setCurrentStats(finalStats);
                }
            }, stepDuration);

            return () => clearInterval(interval);
        };

        const timer = setTimeout(animateStats, 500);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-card overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
                />
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '2s' }}
                    className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-full blur-xl"
                />
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '1s' }}
                    className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/3 rounded-full blur-2xl"
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {/* Main Headline */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                            <Icon name="Award" size={16} className="text-primary mr-2" />
                            <span className="text-sm font-medium text-primary">Germany's Leading Healthcare Staffing Agency</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                            Qualified{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Nurses
                            </span>
                            <br />
                            from Middle East
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            Connect your healthcare facility with highly qualified Iraqi nursing professionals through our proven recruitment platform with comprehensive language training and EU compliance.
                        </p>
                    </motion.div>

                    {/* Live Statistics */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="glass-card p-6 rounded-xl">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                    {currentStats?.readyNurses}
                                </div>
                                <div className="text-sm text-muted-foreground">Ready-to-Deploy Nurses</div>
                            </div>
                            <div className="glass-card p-6 rounded-xl">
                                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                                    {currentStats?.pipelineCandidates}
                                </div>
                                <div className="text-sm text-muted-foreground">Candidates in Training</div>
                            </div>
                            <div className="glass-card p-6 rounded-xl">
                                <div className="text-3xl md:text-4xl font-bold text-success mb-2">
                                    {currentStats?.placementRate}%
                                </div>
                                <div className="text-sm text-muted-foreground">Successful Placements</div>
                            </div>
                            <div className="glass-card p-6 rounded-xl">
                                <div className="text-3xl md:text-4xl font-bold text-warning mb-2">
                                    {currentStats?.avgPlacementTime}
                                </div>
                                <div className="text-sm text-muted-foreground">Days to Placement</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Primary CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            variant="default"
                            size="lg"
                            iconName="ArrowRight"
                            iconPosition="right"
                            onClick={() => onNavigate('/partner-access')}
                            className="px-8 py-4 text-lg"
                        >
                            Request Partner Access
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            iconName="Users"
                            iconPosition="left"
                            onClick={() => onNavigate('/candidates')}
                            className="px-8 py-4 text-lg"
                        >
                            View All Candidates
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div variants={itemVariants} className="mt-16">
                        <p className="text-sm text-muted-foreground mb-6">Trusted by leading German healthcare institutions</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            <div className="flex items-center space-x-2">
                                <Icon name="Shield" size={20} className="text-primary" />
                                <span className="text-sm font-medium">EU Compliance</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Icon name="Award" size={20} className="text-primary" />
                                <span className="text-sm font-medium">Certified</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Icon name="Globe" size={20} className="text-primary" />
                                <span className="text-sm font-medium">International</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Icon name="Clock" size={20} className="text-primary" />
                                <span className="text-sm font-medium">24/7 Support</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-muted-foreground"
                >
                    <span className="text-sm mb-2">Scroll for more</span>
                    <Icon name="ChevronDown" size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;