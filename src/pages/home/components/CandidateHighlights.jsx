import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CandidateHighlights = ({ onNavigate }) => {
    const featuredCandidates = [
        {
            id: 1,
            name: "Fatima Al-Rashid",
            role: "Intensive Care Nurse",
            experience: "8 Years",
            germanLevel: "B2",
            specialization: "Cardiology",
            image: "https://images.unsplash.com/photo-1670191069225-f992139f6545",
            imageAlt: "Professional headshot of Middle Eastern woman with dark hair in medical scrubs smiling at camera",
            availability: "Immediately Available",
            certifications: ["EU Recognition", "German B2", "BLS/ALS"]
        },
        {
            id: 2,
            name: "Ahmed Hassan",
            role: "Anesthesia Nurse",
            experience: "12 Years",
            germanLevel: "C1",
            specialization: "Operating Room",
            image: "https://images.unsplash.com/photo-1657818023416-76df9aa8e093",
            imageAlt: "Professional portrait of Middle Eastern man with beard in medical uniform in hospital setting",
            availability: "From January 2025",
            certifications: ["EU Recognition", "German C1", "OR Specialist"]
        },
        {
            id: 3,
            name: "Zainab Mohammed",
            role: "Pediatric Nurse",
            experience: "6 Years",
            germanLevel: "B2",
            specialization: "Pediatrics",
            image: "https://images.unsplash.com/photo-1623854767680-54012051b1f0",
            imageAlt: "Smiling Middle Eastern woman in pediatric nurse uniform with colorful stethoscope in children's hospital",
            availability: "March 2025",
            certifications: ["EU Recognition", "German B2", "Pediatrics"]
        },
        {
            id: 4,
            name: "Omar Al-Mahmoud",
            role: "Emergency Nurse",
            experience: "10 Years",
            germanLevel: "B2",
            specialization: "Emergency Department",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
            imageAlt: "Confident Middle Eastern man in emergency medical uniform with stethoscope in hospital emergency department",
            availability: "February 2025",
            certifications: ["EU Recognition", "German B2", "Emergency Medicine"]
        }];


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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const getGermanLevelColor = (level) => {
        switch (level) {
            case 'C1': return 'text-success bg-success/10 border-success/20';
            case 'B2': return 'text-primary bg-primary/10 border-primary/20';
            default: return 'text-muted-foreground bg-muted border-border';
        }
    };

    const getAvailabilityColor = (availability) => {
        if (availability?.includes('Immediately')) return 'text-success bg-success/10 border-success/20';
        return 'text-warning bg-warning/10 border-warning/20';
    };

    return (
        <section className="py-20 bg-card/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">

                    <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
                        <Icon name="Star" size={16} className="text-secondary mr-2" />
                        <span className="text-sm font-medium text-secondary">Featured Candidates</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Our Top Nurses
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Meet some of our highly qualified Iraqi nursing professionals who are ready to strengthen your team.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {featuredCandidates?.map((candidate) =>
                        <motion.div
                            key={candidate?.id}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer">

                            <div className="relative mb-6">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image
                                        src={candidate?.image}
                                        alt={candidate?.imageAlt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                                </div>
                                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium border ${getAvailabilityColor(candidate?.availability)}`}>
                                    {candidate?.availability}
                                </div>
                            </div>

                            <div className="text-center mb-4">
                                <h3 className="text-lg font-semibold text-foreground mb-1">{candidate?.name}</h3>
                                <p className="text-primary font-medium mb-2">{candidate?.role}</p>
                                <p className="text-sm text-muted-foreground">{candidate?.specialization}</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Experience:</span>
                                    <span className="text-sm font-medium text-foreground">{candidate?.experience}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">German:</span>
                                    <span className={`text-xs px-2 py-1 rounded-full border font-medium ${getGermanLevelColor(candidate?.germanLevel)}`}>
                                        {candidate?.germanLevel}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2 mb-6">
                                {candidate?.certifications?.map((cert, index) =>
                                    <div key={index} className="flex items-center text-xs text-muted-foreground">
                                        <Icon name="CheckCircle" size={12} className="text-success mr-2" />
                                        {cert}
                                    </div>
                                )}
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                fullWidth
                                iconName="Eye"
                                iconPosition="left"
                                className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">

                                View Profile
                            </Button>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center">

                    <Button
                        variant="default"
                        size="lg"
                        iconName="Users"
                        iconPosition="right"
                        onClick={() => onNavigate('/candidates')}
                        className="px-8 py-4">

                        Browse All 120 Candidates
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                        Advanced filters by specialty, experience, and German proficiency available
                    </p>
                </motion.div>
            </div>
        </section>);

};

export default CandidateHighlights;