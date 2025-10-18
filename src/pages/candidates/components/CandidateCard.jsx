import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CandidateCard = ({ candidate, onViewProfile, onDownloadCV }) => {
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
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            {/* Header Section with Icon and Info */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 relative">
                <div className="flex items-center gap-4">
                    {/* Avatar Icon */}
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                            <Icon
                                name="User"
                                size={28}
                                className="text-blue-600"
                            />
                        </div>
                        {candidate?.isVerified && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                <Icon name="Check" size={12} className="text-white" />
                            </div>
                        )}
                    </div>

                    {/* Name and Basic Info */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-1 truncate">
                            {candidate?.name}
                        </h3>
                        <p className="text-blue-100 text-sm font-medium mb-1">
                            {candidate?.specialization}
                        </p>
                        <div className="flex items-center gap-1.5 text-blue-100 text-xs">
                            <Icon name="MapPin" size={12} />
                            <span>{candidate?.location}</span>
                        </div>
                    </div>
                </div>

                {/* Availability Badge */}
                <div className="mt-4">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold border-2 ${getAvailabilityColor(candidate?.availability)}`}>
                        {candidate?.availability}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Icon name="Briefcase" size={16} className="text-gray-400 mx-auto mb-1" />
                        <div className="text-xs text-gray-500 mb-1">Experience</div>
                        <div className="text-sm font-bold text-gray-900">{candidate?.experience} Years</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Icon name="MessageCircle" size={16} className="text-gray-400 mx-auto mb-1" />
                        <div className="text-xs text-gray-500 mb-1">German Level</div>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-bold border ${getLanguageBadgeColor(candidate?.germanLevel)}`}>
                            {candidate?.germanLevel}
                        </span>
                    </div>
                </div>

                {/* Core Competencies */}
                <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                        <Icon name="Award" size={14} className="text-blue-600" />
                        <p className="text-xs font-semibold text-gray-700">Core Competencies</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {candidate?.skills?.slice(0, 3)?.map((skill, index) => (
                            <span
                                key={index}
                                className="inline-block px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-200"
                            >
                                {skill}
                            </span>
                        ))}
                        {candidate?.skills?.length > 3 && (
                            <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg border border-gray-200">
                                +{candidate?.skills?.length - 3} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        iconName="Eye"
                        iconPosition="left"
                        onClick={() => onViewProfile(candidate)}
                        className="flex-1 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium"
                    >
                        View Profile
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        iconName="Download"
                        onClick={() => onDownloadCV(candidate)}
                        className="px-3 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default CandidateCard;