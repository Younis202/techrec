import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import ProcessTimeline from './components/ProcessTimeline';
import ProcessStats from './components/ProcessStats';
import QualityAssurance from './components/QualityAssurance';
import ProcessDocumentation from './components/ProcessDocumentation';
import ProcessCTA from './components/ProcessCTA';

const ProcessPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Placement Process - MEDeutsch MENA Healthcare Staffing</title>
                <meta name="description" content="Our proven 4-step process for placing qualified Iraqi healthcare professionals in German healthcare facilities. From language training to successful placement." />
                <meta name="keywords" content="Healthcare Recruitment, Language Training, Credential Review, Visa Process, German Healthcare Facilities" />
                <meta property="og:title" content="Placement Process - MEDeutsch MENA Healthcare Staffing" />
                <meta property="og:description" content="Structured 4-step process for qualified healthcare professional placement from Middle East to Germany" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative pt-24 pb-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Icon name="GitBranch" size={16} />
                                Proven Methodology
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Our <span className="text-primary">Placement Process</span>
                            </h1>

                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                From initial contact to successful integration -
                                a structured path to qualified healthcare professionals from Middle East
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Icon name="Clock" size={16} className="text-primary" />
                                    Average 8-12 months
                                </div>
                                <div className="hidden sm:block w-1 h-1 bg-border rounded-full" />
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Icon name="Award" size={16} className="text-success" />
                                    96% Success Rate
                                </div>
                                <div className="hidden sm:block w-1 h-1 bg-border rounded-full" />
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Icon name="Users" size={16} className="text-blue-500" />
                                    342 Successful Placements
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto px-6 space-y-16 pb-16"
                >
                    {/* Process Timeline */}
                    <motion.section variants={itemVariants}>
                        <ProcessTimeline />
                    </motion.section>

                    {/* Process Statistics */}
                    <motion.section variants={itemVariants}>
                        <ProcessStats />
                    </motion.section>

                    {/* Quality Assurance */}
                    <motion.section variants={itemVariants}>
                        <QualityAssurance />
                    </motion.section>

                    {/* Process Documentation */}
                    <motion.section variants={itemVariants}>
                        <ProcessDocumentation />
                    </motion.section>

                    {/* Call to Action */}
                    <motion.section variants={itemVariants}>
                        <ProcessCTA />
                    </motion.section>
                </motion.div>

                {/* Background Elements */}
                <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
                </div>
            </div>
        </>
    );
};

export default ProcessPage;