import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Lock, Clock, UserCheck, Building2, Star, Calendar, Languages, ShieldCheck, CheckCircle, Users } from 'lucide-react';

const TrustSignals = () => {
    const certifications = [
        {
            id: 1,
            name: "EU Compliance",
            description: "Full compliance with all EU directives for staffing agencies",
            icon: Shield
        },
        {
            id: 2,
            name: "ISO 9001:2015",
            description: "Certified quality management system",
            icon: Award
        },
        {
            id: 3,
            name: "GDPR Compliant",
            description: "Data protection according to highest European standards",
            icon: Lock
        },
        {
            id: 4,
            name: "24/7 Support",
            description: "Round-the-clock support for all partners",
            icon: Clock
        }
    ];

    const partnerships = [
        {
            id: 1,
            name: "German Hospital Association",
            type: "Strategic Partner",
            icon: Building2
        },
        {
            id: 2,
            name: "Federal Employment Agency",
            type: "Official Partner",
            icon: Users
        },
        {
            id: 3,
            name: "Goethe Institute",
            type: "Language Partner",
            icon: Languages
        },
        {
            id: 4,
            name: "German Chamber of Commerce",
            type: "Certification Partner",
            icon: Award
        }
    ];

    const statistics = [
        {
            id: 1,
            value: "500+",
            label: "Successful Placements",
            icon: UserCheck
        },
        {
            id: 2,
            value: "150+",
            label: "Partner Clinics",
            icon: Building2
        },
        {
            id: 3,
            value: "98%",
            label: "Customer Satisfaction",
            icon: Star
        },
        {
            id: 4,
            value: "5 Years",
            label: "Market Experience",
            icon: Calendar
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Geometric Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Top shapes */}
                <div className="absolute top-20 right-10 w-56 h-56 bg-blue-200 opacity-20 rounded-full"></div>
                <div className="absolute top-40 right-40 w-32 h-32 bg-green-200 opacity-20 rotate-45"></div>

                {/* Middle shapes */}
                <div className="absolute top-1/2 left-10 w-40 h-40 border-4 border-blue-200 opacity-20 rounded-lg rotate-12"></div>
                <div className="absolute top-1/3 right-20 grid grid-cols-4 gap-2 opacity-15">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    ))}
                </div>

                {/* Bottom shapes */}
                <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-red-200 opacity-10"
                    style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 rounded-full border-2 border-green-200 mb-6">
                        <Shield size={18} className="text-green-600" />
                        <span className="text-sm font-bold text-green-700">Trust & Security</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                        Your <span className="text-blue-600">Security</span> is Our Promise
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Certified quality, proven partnerships, and transparent processes for your success.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-black text-gray-900 text-center mb-10">
                        Certifications & Standards
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => {
                            const Icon = cert.icon;
                            return (
                                <motion.div
                                    key={cert.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Decorative corner */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>

                                    <div className="relative">
                                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                            <Icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <h4 className="text-lg font-black text-gray-900 mb-2">{cert.name}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Statistics - Blue Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-20"
                >
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 overflow-hidden">
                        {/* Decorative geometric shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-20 translate-x-20"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-20 -translate-x-20"></div>
                        <div className="absolute top-10 left-10 w-24 h-24 border-4 border-white opacity-10 rounded-lg rotate-12"></div>
                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5"
                            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                        </div>

                        <div className="relative">
                            <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-12">
                                Our Track Record
                            </h3>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {statistics.map((stat) => {
                                    const Icon = stat.icon;
                                    return (
                                        <motion.div
                                            key={stat.id}
                                            variants={itemVariants}
                                            className="group text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                <Icon size={24} className="text-white" />
                                            </div>
                                            <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                                            <div className="text-sm font-semibold text-blue-100">{stat.label}</div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Partnerships */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-black text-gray-900 text-center mb-10">
                        Strategic Partnerships
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {partnerships.map((partner) => {
                            const Icon = partner.icon;
                            return (
                                <motion.div
                                    key={partner.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300">
                                        <Icon size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="text-lg font-black text-gray-900 mb-2 text-center">{partner.name}</h4>
                                    <p className="text-sm font-semibold text-blue-600 text-center">{partner.type}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Trust Statement - Another Blue Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                >
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
                        {/* Decorative shapes */}
                        <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -translate-y-24 -translate-x-24"></div>
                        <div className="absolute bottom-0 right-0 w-56 h-56 bg-white opacity-5 rounded-full translate-y-28 translate-x-28"></div>
                        <div className="absolute top-1/2 left-10 w-20 h-20 border-4 border-white opacity-10 rounded-full"></div>
                        <div className="absolute top-10 right-20 grid grid-cols-3 gap-2 opacity-10">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                            ))}
                        </div>

                        <div className="relative max-w-3xl mx-auto">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-white/20">
                                <ShieldCheck size={40} className="text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                                100% Transparency, 0% Hidden Costs
                            </h3>
                            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                                All prices are communicated transparently. No hidden fees, no surprises.
                                Your investment in qualified staff is in safe hands with us.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                {[
                                    "Fixed prices without surcharges",
                                    "Transparent cost breakdown",
                                    "No hidden fees",
                                    "Money-back guarantee"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <CheckCircle size={20} className="text-white flex-shrink-0" />
                                        <span className="text-sm font-semibold text-white text-left">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustSignals;