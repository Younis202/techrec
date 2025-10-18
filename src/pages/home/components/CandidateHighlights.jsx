import React from 'react';
import { motion } from 'framer-motion';
import { Star, User, Clock, MessageCircle, Award, ArrowRight, Users, Heart, Stethoscope, CheckCircle2 } from 'lucide-react';

const CandidateHighlights = ({ onNavigate }) => {
    const featuredCandidates = [
        {
            id: 1,
            name: "Fatima Al-Rashid",
            role: "Intensive Care Nurse",
            experience: "8 Years",
            germanLevel: "B2",
            specialization: "Cardiology",
            availability: "Immediately Available",
            certifications: ["EU Recognition", "German B2", "BLS/ALS"],
            color: "blue"
        },
        {
            id: 2,
            name: "Ahmed Hassan",
            role: "Anesthesia Nurse",
            experience: "12 Years",
            germanLevel: "C1",
            specialization: "Operating Room",
            availability: "From January 2025",
            certifications: ["EU Recognition", "German C1", "OR Specialist"],
            color: "purple"
        },
        {
            id: 3,
            name: "Zainab Mohammed",
            role: "Pediatric Nurse",
            experience: "6 Years",
            germanLevel: "B2",
            specialization: "Pediatrics",
            availability: "March 2025",
            certifications: ["EU Recognition", "German B2", "Pediatrics"],
            color: "pink"
        },
        {
            id: 4,
            name: "Omar Al-Mahmoud",
            role: "Emergency Nurse",
            experience: "10 Years",
            germanLevel: "B2",
            specialization: "Emergency Department",
            availability: "February 2025",
            certifications: ["EU Recognition", "German B2", "Emergency Medicine"],
            color: "green"
        }
    ];

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

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                gradient: 'from-blue-500 to-blue-600',
                light: 'bg-blue-50',
                border: 'border-blue-200',
                text: 'text-blue-600',
                hover: 'hover:border-blue-400'
            },
            purple: {
                gradient: 'from-purple-500 to-purple-600',
                light: 'bg-purple-50',
                border: 'border-purple-200',
                text: 'text-purple-600',
                hover: 'hover:border-purple-400'
            },
            pink: {
                gradient: 'from-pink-500 to-pink-600',
                light: 'bg-pink-50',
                border: 'border-pink-200',
                text: 'text-pink-600',
                hover: 'hover:border-pink-400'
            },
            green: {
                gradient: 'from-green-500 to-green-600',
                light: 'bg-green-50',
                border: 'border-green-200',
                text: 'text-green-600',
                hover: 'hover:border-green-400'
            }
        };
        return colors[color] || colors.blue;
    };

    const getGermanLevelBadge = (level) => {
        const isAdvanced = level === 'C1';
        return (
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold ${isAdvanced
                ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                : 'bg-blue-100 text-blue-700 border border-blue-300'
                }`}>
                {isAdvanced && <Star size={12} className="fill-emerald-600" />}
                {level}
            </span>
        );
    };

    const getAvailabilityBadge = (availability) => {
        const isImmediate = availability?.includes('Immediately');
        return (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${isImmediate
                ? 'bg-emerald-500 text-white'
                : 'bg-white text-gray-700 border-2 border-white/30'
                }`}>
                <div className={`w-1.5 h-1.5 rounded-full ${isImmediate ? 'bg-white' : 'bg-amber-500'} animate-pulse`}></div>
                {availability}
            </div>
        );
    };

    return (
        <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border-2 border-blue-200 mb-6">
                        <Star size={18} className="text-blue-600 fill-blue-600" />
                        <span className="text-sm font-bold text-blue-700">Featured Candidates</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                        Meet Our Top <span className="text-blue-600">Healthcare</span> Professionals
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Highly qualified Iraqi nursing professionals ready to strengthen your team with expertise and dedication.
                    </p>
                </motion.div>

                {/* Candidate Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {featuredCandidates.map((candidate) => {
                        const colors = getColorClasses(candidate.color);
                        return (
                            <motion.div
                                key={candidate.id}
                                variants={cardVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className={`group relative bg-white rounded-3xl overflow-hidden border-2 ${colors.border} ${colors.hover} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                            >
                                {/* Header with Avatar */}
                                <div className={`relative bg-gradient-to-br ${colors.gradient} p-6 pb-8`}>
                                    {/* Decorative circles */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-4"></div>

                                    <div className="relative">
                                        <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <User size={36} className={colors.text} />
                                        </div>
                                        <h3 className="text-lg font-black text-white text-center mb-1">
                                            {candidate.name}
                                        </h3>
                                        <p className="text-white/90 text-sm font-semibold text-center">
                                            {candidate.role}
                                        </p>

                                        {/* Availability Badge */}
                                        <div className="mt-4 text-center">
                                            {getAvailabilityBadge(candidate.availability)}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Specialization Badge */}
                                    <div className={`flex items-center justify-center gap-2 ${colors.light} ${colors.border} border rounded-xl px-3 py-2 mb-5`}>
                                        <Stethoscope size={16} className={colors.text} />
                                        <span className={`text-sm font-bold ${colors.text}`}>
                                            {candidate.specialization}
                                        </span>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex gap-3 mb-5">
                                        <div className="flex-1 text-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                                            <Clock size={18} className="text-gray-400 mx-auto mb-1.5" />
                                            <div className="text-xs text-gray-500 mb-1">Experience</div>
                                            <div className="text-sm font-black text-gray-900">
                                                {candidate.experience}
                                            </div>
                                        </div>
                                        <div className="flex-1 text-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                                            <MessageCircle size={18} className="text-gray-400 mx-auto mb-1.5" />
                                            <div className="text-xs text-gray-500 mb-1">German</div>
                                            <div>
                                                {getGermanLevelBadge(candidate.germanLevel)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Certifications */}
                                    <div className="space-y-2 mb-5">
                                        {candidate.certifications.map((cert, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                                                <span className="text-xs font-medium text-gray-700">{cert}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* View Button */}
                                    <button className={`w-full py-3 px-4 bg-gradient-to-r ${colors.gradient} text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}>
                                        View Profile
                                        <ArrowRight size={18} />
                                    </button>
                                </div>

                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <button
                        onClick={() => onNavigate?.('/candidates')}
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300"
                    >
                        <Users size={24} />
                        Browse All 120 Candidates
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
                        <Award size={16} className="text-blue-600" />
                        Advanced filters by specialty, experience, and German proficiency available
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CandidateHighlights;