import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Clock, Users, TrendingUp, ArrowRight, Heart, Activity } from 'lucide-react';

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
                    readyNurses: Math.floor(finalStats.readyNurses * easeOut),
                    pipelineCandidates: Math.floor(finalStats.pipelineCandidates * easeOut),
                    placementRate: Math.floor(finalStats.placementRate * easeOut),
                    avgPlacementTime: Math.floor(finalStats.avgPlacementTime * easeOut)
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
                staggerChildren: 0.15
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
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Background Image on Right Side */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Nurse Image Background - Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 right-0 bottom-0 w-1/2 hidden lg:block"
                >
                    <img
                        src="/assets/images/homeimage.png"
                        alt="Healthcare professional"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay to blend with content */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
                </motion.div>

                {/* Geometric shapes on left side */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 opacity-10 rounded-full"></div>
                <div className="absolute top-40 left-40 w-20 h-20 bg-red-500 opacity-10 rotate-45"></div>
                <div className="absolute bottom-32 left-20 grid grid-cols-4 gap-3 opacity-20">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    ))}
                </div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 border-4 border-blue-300 opacity-10 rounded-lg rotate-12"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 pt-18 pb-16">
                <div className="grid lg:grid-cols-2 gap-11">
                    {/* Left Content - Full Width on Left Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="z-10 lg:pr-12"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 rounded-full border-2 border-blue-200">
                                <Award size={18} className="text-blue-600" />
                                <span className="text-sm font-bold text-blue-700">Leading Healthcare Staffing</span>
                            </div>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tight">
                                <span className="block text-gray-900">Elite</span>
                                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-transparent bg-clip-text mb-3">
                                    Healthcare
                                </span>
                                <span className="block relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text">
                                        Talent
                                    </span>
                                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-red-200 opacity-30 -rotate-1"></div>
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
                                Connect with highly qualified Middle Eastern nursing professionals through our proven recruitment platform.
                            </p>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-12">
                            <button
                                onClick={() => onNavigate?.('/partner-access')}
                                className="group px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                            >
                                Request Access
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => onNavigate?.('/candidates')}
                                className="px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-xl border-2 border-gray-900 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                            >
                                <Users size={18} />
                                View Candidates
                            </button>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2.5">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Shield size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-900">EU Compliant</div>
                                    <div className="text-xs text-gray-500">Certified</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                    <Award size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-900">94% Success</div>
                                    <div className="text-xs text-gray-500">Placement Rate</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                                    <Clock size={20} className="text-amber-600" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-900">24/7 Support</div>
                                    <div className="text-xs text-gray-500">Available</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Empty space for background image */}
                    <div className="hidden lg:block"></div>
                </div>

                {/* Modern Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Ready to Deploy */}
                        <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="absolute top-3 right-3 w-8 h-8 bg-blue-600 rounded-lg opacity-10"></div>
                            <Users size={22} className="text-blue-600 mb-2" />
                            <div className="text-3xl font-black text-blue-600 mb-1">
                                {currentStats.readyNurses}
                            </div>
                            <div className="text-xs font-bold text-blue-900">Ready-to-Deploy</div>
                            <div className="text-xs text-blue-700 mt-0.5">Nurses Available</div>
                        </div>

                        {/* In Training */}
                        <div className="group relative bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="absolute top-3 right-3 w-8 h-8 bg-red-600 rounded-lg opacity-10"></div>
                            <Activity size={22} className="text-red-600 mb-2" />
                            <div className="text-3xl font-black text-red-600 mb-1">
                                {currentStats.pipelineCandidates}
                            </div>
                            <div className="text-xs font-bold text-red-900">In Training</div>
                            <div className="text-xs text-red-700 mt-0.5">Pipeline Candidates</div>
                        </div>

                        {/* Success Rate */}
                        <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="absolute top-3 right-3 w-8 h-8 bg-green-600 rounded-lg opacity-10"></div>
                            <TrendingUp size={22} className="text-green-600 mb-2" />
                            <div className="text-3xl font-black text-green-600 mb-1">
                                {currentStats.placementRate}%
                            </div>
                            <div className="text-xs font-bold text-green-900">Success Rate</div>
                            <div className="text-xs text-green-700 mt-0.5">Placement Success</div>
                        </div>

                        {/* Average Days */}
                        <div className="group relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="absolute top-3 right-3 w-8 h-8 bg-amber-600 rounded-lg opacity-10"></div>
                            <Clock size={22} className="text-amber-600 mb-2" />
                            <div className="text-3xl font-black text-amber-600 mb-1">
                                {currentStats.avgPlacementTime}
                            </div>
                            <div className="text-xs font-bold text-amber-900">Days Average</div>
                            <div className="text-xs text-amber-700 mt-0.5">Placement Time</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;