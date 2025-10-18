import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CandidateModal = ({ candidate, isOpen, onClose, onDownloadCV }) => {
    if (!isOpen || !candidate) return null;

    const getLanguageBadgeColor = (level) => {
        const colors = {
            'A1': 'bg-red-50 text-red-700 border-red-200',
            'A2': 'bg-orange-50 text-orange-700 border-orange-200',
            'B1': 'bg-yellow-50 text-yellow-700 border-yellow-200',
            'B2': 'bg-blue-50 text-blue-700 border-blue-200',
            'C1': 'bg-emerald-50 text-emerald-700 border-emerald-200',
            'C2': 'bg-emerald-50 text-emerald-800 border-emerald-300'
        };
        return colors?.[level] || 'bg-gray-50 text-gray-700 border-gray-200';
    };

    const getAvailabilityColor = (status) => {
        const colors = {
            'Immediately Available': 'bg-emerald-50 text-emerald-700 border-emerald-200',
            'In 2 Weeks': 'bg-yellow-50 text-yellow-700 border-yellow-200',
            'In 1 Month': 'bg-orange-50 text-orange-700 border-orange-200',
            'In 3 Months': 'bg-blue-50 text-blue-700 border-blue-200'
        };
        return colors?.[status] || 'bg-gray-50 text-gray-700 border-gray-200';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white border border-gray-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">

                {/* Header */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                            {/* Avatar Icon */}
                            <div className="relative">
                                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                                    <Icon
                                        name="User"
                                        size={36}
                                        className="text-blue-600"
                                    />
                                </div>
                                {candidate?.isVerified && (
                                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                        <Icon name="Check" size={14} className="text-white" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1">{candidate?.name}</h2>
                                <p className="text-blue-100 text-sm font-medium">{candidate?.specialization}</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            iconName="X"
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 text-white"
                        />
                    </div>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                            <Icon name="Briefcase" size={20} className="text-blue-600 mx-auto mb-2" />
                            <p className="text-xs text-gray-500 mb-1">Experience</p>
                            <p className="text-sm font-bold text-gray-900">{candidate?.experience} Years</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                            <Icon name="MessageCircle" size={20} className="text-blue-600 mx-auto mb-2" />
                            <p className="text-xs text-gray-500 mb-1">German</p>
                            <span className={`inline-block px-2 py-1 rounded text-xs font-bold border ${getLanguageBadgeColor(candidate?.germanLevel)}`}>
                                {candidate?.germanLevel}
                            </span>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                            <Icon name="MapPin" size={20} className="text-blue-600 mx-auto mb-2" />
                            <p className="text-xs text-gray-500 mb-1">Location</p>
                            <p className="text-sm font-bold text-gray-900">{candidate?.location}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                            <Icon name="Clock" size={20} className="text-blue-600 mx-auto mb-2" />
                            <p className="text-xs text-gray-500 mb-1">Availability</p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold border ${getAvailabilityColor(candidate?.availability)}`}>
                                {candidate?.availability?.split(' ').slice(0, 2).join(' ')}
                            </span>
                        </div>
                    </div>

                    {/* Professional Summary */}
                    <div className="bg-gray-50 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Icon name="FileText" size={18} className="text-blue-600" />
                            <span>Professional Profile</span>
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {candidate?.summary}
                        </p>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Icon name="Award" size={18} className="text-blue-600" />
                            <span>Professional Skills</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {candidate?.skills?.map((skill, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-3 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Icon name="Briefcase" size={18} className="text-blue-600" />
                            <span>Work Experience</span>
                        </h3>
                        <div className="space-y-4">
                            {candidate?.workExperience?.map((job, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-500">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm">{job?.position}</h4>
                                            <p className="text-sm text-gray-600">{job?.hospital}</p>
                                        </div>
                                        <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 whitespace-nowrap">
                                            {job?.duration}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">{job?.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Icon name="Award" size={18} className="text-blue-600" />
                            <span>Certifications</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {candidate?.certifications?.map((cert, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{cert?.name}</h4>
                                    <p className="text-xs text-gray-500">{cert?.issuer} • {cert?.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Language Skills */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Icon name="Languages" size={18} className="text-blue-600" />
                            <span>Language Skills</span>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {candidate?.languages?.map((lang, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                                    <p className="font-semibold text-gray-900 text-sm mb-2">{lang?.language}</p>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getLanguageBadgeColor(lang?.level)}`}>
                                        {lang?.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Icon name="Mail" size={18} className="text-blue-600" />
                            <span>Contact Information</span>
                        </h3>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Icon name="Mail" size={14} className="text-blue-600" />
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium">{candidate?.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Icon name="Phone" size={14} className="text-blue-600" />
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium">{candidate?.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="border-t border-gray-200 p-4 bg-white">
                    <div className="flex gap-3">
                        <Button
                            variant="default"
                            iconName="Download"
                            iconPosition="left"
                            onClick={() => onDownloadCV(candidate)}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 font-medium"
                        >
                            Download CV
                        </Button>
                        <Button
                            variant="outline"
                            iconName="Heart"
                            iconPosition="left"
                            className="flex-1 border-gray-300 hover:bg-gray-50 font-medium"
                        >
                            Save
                        </Button>
                        <Button
                            variant="outline"
                            iconName="MessageSquare"
                            iconPosition="left"
                            className="flex-1 border-gray-300 hover:bg-gray-50 font-medium"
                        >
                            Contact
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateModal;