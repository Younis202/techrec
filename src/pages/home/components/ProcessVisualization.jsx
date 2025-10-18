import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Languages, Award, Handshake, Plane, GitBranch, ChevronUp, ChevronDown, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const ProcessVisualization = ({ onNavigate }) => {
    const [activeStep, setActiveStep] = useState(0);

    const processSteps = [
        {
            id: 1,
            title: "Language Training",
            subtitle: "German B2/C1",
            description: "Intensive German courses with medical terminology and cultural preparation for the German job market.",
            duration: "6-12 Months",
            icon: Languages,
            color: "blue",
            details: [
                "Medical Terminology",
                "Cultural Integration",
                "Exam Preparation",
                "Practical Communication"
            ]
        },
        {
            id: 2,
            title: "Qualification Assessment",
            subtitle: "EU Recognition",
            description: "Comprehensive evaluation of professional qualifications and preparation for German healthcare standards.",
            duration: "2-4 Months",
            icon: Award,
            color: "green",
            details: [
                "Professional Assessment",
                "Document Review",
                "Practical Tests",
                "EU Certification"
            ]
        },
        {
            id: 3,
            title: "Contract Negotiation",
            subtitle: "Matching & Offer",
            description: "Precise matching to suitable positions and negotiation of optimal working conditions for both parties.",
            duration: "2-6 Weeks",
            icon: Handshake,
            color: "purple",
            details: [
                "Position Matching",
                "Salary Negotiation",
                "Working Conditions",
                "Contract Signing"
            ]
        },
        {
            id: 4,
            title: "Visa & Placement",
            subtitle: "Relocation Support",
            description: "Complete support with visa procedures, relocation, and integration into the new work environment.",
            duration: "4-8 Weeks",
            icon: Plane,
            color: "red",
            details: [
                "Visa Application",
                "Relocation Assistance",
                "Housing Search",
                "Onboarding Support"
            ]
        }
    ];

    const getColorClasses = (color, isActive) => {
        const colors = {
            blue: {
                bg: isActive ? 'from-blue-600 to-blue-700' : 'from-blue-50 to-blue-100',
                text: isActive ? 'text-white' : 'text-blue-600',
                border: isActive ? 'border-blue-600' : 'border-blue-200',
                hoverBorder: 'hover:border-blue-400',
                badge: 'bg-blue-100 text-blue-700 border-blue-300',
                icon: 'text-blue-600'
            },
            green: {
                bg: isActive ? 'from-green-600 to-green-700' : 'from-green-50 to-green-100',
                text: isActive ? 'text-white' : 'text-green-600',
                border: isActive ? 'border-green-600' : 'border-green-200',
                hoverBorder: 'hover:border-green-400',
                badge: 'bg-green-100 text-green-700 border-green-300',
                icon: 'text-green-600'
            },
            purple: {
                bg: isActive ? 'from-purple-600 to-purple-700' : 'from-purple-50 to-purple-100',
                text: isActive ? 'text-white' : 'text-purple-600',
                border: isActive ? 'border-purple-600' : 'border-purple-200',
                hoverBorder: 'hover:border-purple-400',
                badge: 'bg-purple-100 text-purple-700 border-purple-300',
                icon: 'text-purple-600'
            },
            red: {
                bg: isActive ? 'from-red-600 to-red-700' : 'from-red-50 to-red-100',
                text: isActive ? 'text-white' : 'text-red-600',
                border: isActive ? 'border-red-600' : 'border-red-200',
                hoverBorder: 'hover:border-red-400',
                badge: 'bg-red-100 text-red-700 border-red-300',
                icon: 'text-red-600'
            }
        };
        return colors[color];
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15
            }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="relative py-16 bg-white overflow-hidden">
            {/* Geometric Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-48 h-48 bg-blue-200 opacity-10 rounded-full"></div>
                <div className="absolute top-40 right-40 w-32 h-32 bg-green-200 opacity-10 rotate-45"></div>
                <div className="absolute top-1/2 left-10 w-40 h-40 border-4 border-purple-200 opacity-10 rounded-lg rotate-12"></div>
                <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-red-200 opacity-10" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                <div className="absolute top-1/3 right-20 grid grid-cols-4 gap-2 opacity-10">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    ))}
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border-2 border-blue-200 mb-5">
                        <GitBranch size={16} className="text-blue-600" />
                        <span className="text-xs font-bold text-blue-700">Proven Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
                        Our <span className="text-blue-600">4-Stage</span> Placement Process
                    </h2>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        From language training to successful integration - we guide every step of the journey.
                    </p>
                </motion.div>

                {/* Desktop Cards Grid */}
                <div className="hidden lg:block mb-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-4 gap-5"
                    >
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = index === activeStep;
                            const colors = getColorClasses(step.color, isActive);

                            return (
                                <motion.div
                                    key={step.id}
                                    variants={stepVariants}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    onMouseEnter={() => setActiveStep(index)}
                                    className="group relative cursor-pointer"
                                >
                                    <div className={`relative bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border-2 ${colors.border} ${!isActive && colors.hoverBorder} hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                                        {/* Decorative corner */}
                                        <div className={`absolute top-0 right-0 w-24 h-24 ${isActive ? 'bg-white' : 'bg-gray-900'} opacity-5 rounded-bl-full`}></div>

                                        {/* Step Number Badge */}
                                        <div className={`absolute -top-3 -right-3 w-10 h-10 ${isActive ? 'bg-white' : 'bg-gray-900'} ${isActive ? colors.text : 'text-white'} rounded-full flex items-center justify-center text-sm font-black shadow-lg z-10`}>
                                            {step.id}
                                        </div>

                                        {/* Icon */}
                                        <div className={`w-14 h-14 ${isActive ? 'bg-white/20 backdrop-blur-sm border-2 border-white/30' : 'bg-white'} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                                            <Icon size={26} className={isActive ? 'text-white' : colors.icon} />
                                        </div>

                                        {/* Duration Badge */}
                                        <div className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold mb-3 ${isActive ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30' : colors.badge + ' border-2'}`}>
                                            {step.duration}
                                        </div>

                                        {/* Content */}
                                        <h3 className={`text-base font-black mb-1.5 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-sm font-semibold mb-2.5 ${isActive ? 'text-white/90' : colors.text}`}>
                                            {step.subtitle}
                                        </p>
                                        <p className={`text-xs leading-relaxed mb-3 ${isActive ? 'text-white/80' : 'text-gray-600'}`}>
                                            {step.description}
                                        </p>

                                        {/* Details */}
                                        <div className="space-y-1">
                                            {step.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className={`flex items-center gap-1.5 text-xs ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                                                    <CheckCircle size={11} className={isActive ? 'text-white' : 'text-green-500'} />
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Mobile Accordion */}
                <div className="lg:hidden mb-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = index === activeStep;
                            const colors = getColorClasses(step.color, isActive);

                            return (
                                <motion.div
                                    key={step.id}
                                    variants={stepVariants}
                                    className={`relative bg-gradient-to-br ${colors.bg} rounded-xl border-2 ${colors.border} transition-all duration-300 overflow-hidden ${isActive && 'shadow-lg'}`}
                                >
                                    {/* Number Badge */}
                                    <div className={`absolute top-4 right-4 w-7 h-7 ${isActive ? 'bg-white' : 'bg-gray-900'} ${isActive ? colors.text : 'text-white'} rounded-full flex items-center justify-center text-xs font-black`}>
                                        {step.id}
                                    </div>

                                    <button
                                        onClick={() => setActiveStep(isActive ? -1 : index)}
                                        className="w-full p-5 text-left flex items-center gap-3"
                                    >
                                        <div className={`w-12 h-12 ${isActive ? 'bg-white/20 backdrop-blur-sm border-2 border-white/30' : 'bg-white'} rounded-lg flex items-center justify-center transition-all`}>
                                            <Icon size={22} className={isActive ? 'text-white' : colors.icon} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-base font-black ${isActive ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                                            <p className={`text-sm font-semibold ${isActive ? 'text-white/90' : colors.text}`}>{step.subtitle}</p>
                                        </div>
                                        {isActive ? <ChevronUp size={18} className="text-white" /> : <ChevronDown size={18} className="text-gray-600" />}
                                    </button>

                                    <motion.div
                                        initial={false}
                                        animate={{ height: isActive ? "auto" : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 border-t border-white/20 pt-4">
                                            <div className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold mb-3 ${isActive ? 'bg-white/20 text-white border border-white/30' : colors.badge + ' border-2'}`}>
                                                {step.duration}
                                            </div>
                                            <p className={`text-sm mb-3 ${isActive ? 'text-white/80' : 'text-gray-600'}`}>{step.description}</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {step.details.map((detail, detailIndex) => (
                                                    <div key={detailIndex} className={`flex items-center gap-1.5 text-xs ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                                                        <CheckCircle size={13} className={isActive ? 'text-white' : 'text-green-500'} />
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Process Statistics - Blue Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative mb-10"
                >
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-10 overflow-hidden">
                        {/* Decorative shapes */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -translate-y-24 translate-x-24"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full translate-y-20 -translate-x-20"></div>
                        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white opacity-10 rounded-lg rotate-12"></div>

                        <div className="relative">
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <Zap size={24} className="text-white" />
                                <h3 className="text-2xl md:text-3xl font-black text-white text-center">
                                    Our Track Record
                                </h3>
                            </div>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                            >
                                <motion.div variants={stepVariants} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                                    <div className="text-4xl font-black text-white mb-1.5 group-hover:scale-105 transition-transform">12-18</div>
                                    <div className="text-xs font-semibold text-blue-100">Months Total Duration</div>
                                </motion.div>
                                <motion.div variants={stepVariants} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                                    <div className="text-4xl font-black text-white mb-1.5 group-hover:scale-105 transition-transform">94%</div>
                                    <div className="text-xs font-semibold text-blue-100">Successful Placements</div>
                                </motion.div>
                                <motion.div variants={stepVariants} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                                    <div className="text-4xl font-black text-white mb-1.5 group-hover:scale-105 transition-transform">€8,500</div>
                                    <div className="text-xs font-semibold text-blue-100">Average Placement Cost</div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <button
                        onClick={() => onNavigate?.('/process')}
                        className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-xl border-2 border-gray-900 transition-all duration-300 text-sm hover:scale-105"
                    >
                        <GitBranch size={18} />
                        View Detailed Process
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessVisualization;