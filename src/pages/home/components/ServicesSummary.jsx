import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Clock, Languages, Briefcase, CheckCircle, Calculator, ArrowRight, TrendingUp, Award } from 'lucide-react';

const ServicesSummary = ({ onNavigate }) => {
    const services = [
        {
            id: 1,
            title: "Permanent Placement",
            subtitle: "Permanent Recruitment",
            description: "Complete recruitment and placement of qualified nurses for permanent positions in your facility.",
            icon: UserCheck,
            pricing: "from €8,500",
            features: [
                "Comprehensive candidate screening",
                "Language training to B2/C1",
                "EU recognition process",
                "6 months follow-up support",
                "Replacement guarantee"
            ],
            timeline: "12-18 Months",
            popular: true,
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            iconBg: "bg-blue-600",
            accentColor: "bg-blue-100"
        },
        {
            id: 2,
            title: "Temporary Staffing",
            subtitle: "Flexible Staff Coverage",
            description: "Short-term and flexible staffing for shortages, vacation coverage, and project work.",
            icon: Clock,
            pricing: "from €45/hour",
            features: [
                "Quick availability",
                "Flexible assignment duration",
                "Pre-qualified staff",
                "Administrative processing",
                "24/7 support"
            ],
            timeline: "2-4 Weeks",
            popular: false,
            bgColor: "bg-gray-50",
            borderColor: "border-gray-200",
            iconBg: "bg-gray-700",
            accentColor: "bg-gray-100"
        },
        {
            id: 3,
            title: "Language Training",
            subtitle: "Medical German",
            description: "Specialized German courses for healthcare professionals focusing on medical terminology and communication.",
            icon: Languages,
            pricing: "from €2,800",
            features: [
                "Medical terminology",
                "Exam preparation",
                "Cultural integration",
                "Online & in-person",
                "Certified trainers"
            ],
            timeline: "6-12 Months",
            popular: false,
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
            iconBg: "bg-green-600",
            accentColor: "bg-green-100"
        }
    ];

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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Geometric Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Top left shapes */}
                <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 opacity-20 rounded-full"></div>
                <div className="absolute top-32 left-32 w-24 h-24 bg-red-200 opacity-20 rotate-45"></div>

                {/* Middle right shapes */}
                <div className="absolute top-1/3 right-20 w-32 h-32 border-4 border-blue-200 opacity-30 rounded-lg rotate-12"></div>
                <div className="absolute top-1/2 right-40 grid grid-cols-3 gap-2 opacity-20">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    ))}
                </div>

                {/* Bottom shapes */}
                <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-green-200 opacity-10 rounded-full"></div>
                <div className="absolute bottom-40 right-1/3 w-32 h-32 bg-red-500 opacity-10"
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
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 rounded-full border-2 border-blue-200 mb-6">
                        <Briefcase size={18} className="text-blue-600" />
                        <span className="text-sm font-bold text-blue-700">Our Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                        Tailored <span className="text-blue-600">Healthcare</span> Solutions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Three proven service packages for your individual healthcare staffing requirements.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className={`group relative bg-white rounded-3xl border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-300 overflow-hidden ${service.popular ? 'ring-4 ring-blue-100' : ''
                                    }`}
                            >
                                {/* Popular Badge */}
                                {service.popular && (
                                    <div className="absolute top-0 right-0 z-10">
                                        <div className="bg-blue-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm flex items-center gap-2">
                                            <Award size={16} />
                                            Popular
                                        </div>
                                    </div>
                                )}

                                {/* Decorative corner shape */}
                                <div className={`absolute top-0 left-0 w-32 h-32 ${service.accentColor} opacity-30 rounded-br-full`}></div>

                                {/* Header Section */}
                                <div className={`relative ${service.bgColor} p-8 pb-6 border-b-2 ${service.borderColor}`}>
                                    <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <Icon size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-sm font-semibold text-blue-600 mb-3">{service.subtitle}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                                </div>

                                {/* Content Section */}
                                <div className="p-8">
                                    {/* Pricing */}
                                    <div className="flex items-end justify-between mb-6 pb-6 border-b-2 border-gray-100">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Starting at</div>
                                            <div className="text-3xl font-black text-gray-900">{service.pricing}</div>
                                        </div>
                                        <div className={`px-3 py-1.5 ${service.accentColor} rounded-lg`}>
                                            <div className="text-xs font-bold text-gray-700">{service.timeline}</div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3 mb-8">
                                        {service.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`w-full py-3.5 ${service.iconBg} text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}>
                                        View Details
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* ROI Calculator Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden"
                >
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-20 translate-x-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-20 -translate-x-20"></div>
                    <div className="absolute top-1/2 right-20 w-24 h-24 border-4 border-white opacity-10 rounded-lg rotate-12"></div>

                    <div className="relative max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-white/20">
                            <Calculator size={40} className="text-white" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black mb-4">
                            ROI Calculator for Staffing Costs
                        </h3>
                        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                            Calculate the cost and time savings of our placement services compared to internal recruitment.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <TrendingUp size={24} />
                                    <div className="text-4xl font-black">65%</div>
                                </div>
                                <div className="text-sm font-semibold text-blue-100">Cost Savings</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Clock size={24} />
                                    <div className="text-4xl font-black">8 Mo</div>
                                </div>
                                <div className="text-sm font-semibold text-blue-100">Time Savings</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Award size={24} />
                                    <div className="text-4xl font-black">94%</div>
                                </div>
                                <div className="text-sm font-semibold text-blue-100">Success Rate</div>
                            </div>
                        </div>

                        <button
                            onClick={() => onNavigate?.('/services')}
                            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <Calculator size={24} />
                            Calculate Your ROI
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* View All Services Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={() => onNavigate?.('/services')}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-xl border-2 border-gray-900 transition-all duration-300"
                    >
                        <Briefcase size={20} />
                        All Services in Detail
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSummary;