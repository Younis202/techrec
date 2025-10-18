import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CandidateCard = ({ candidate, onViewProfile, onDownloadCV }) => {
    const getLanguageBadgeColor = (level) => {
        const colors = {
            'A1': 'bg-red-100 text-red-800 border-red-200',
            'A2': 'bg-orange-100 text-orange-800 border-orange-200',
            'B1': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'B2': 'bg-blue-100 text-blue-800 border-blue-200',
            'C1': 'bg-green-100 text-green-800 border-green-200',
            'C2': 'bg-emerald-100 text-emerald-800 border-emerald-200'
        };
        return colors?.[level] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const getAvailabilityColor = (status) => {
        const colors = {
            'Immediately Available': 'bg-green-100 text-green-800 border-green-200',
            'In 2 Weeks': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'In 1 Month': 'bg-orange-100 text-orange-800 border-orange-200',
            'In 3 Months': 'bg-blue-100 text-blue-800 border-blue-200'
        };
        return colors?.[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    return (
        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
            {/* Header with Photo and Basic Info */}
            <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border">
                        <Image
                            src={candidate?.photo}
                            alt={candidate?.photoAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {candidate?.isVerified && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Icon name="CheckCircle" size={14} color="var(--color-primary-foreground)" />
                        </div>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1 truncate">
                        {candidate?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                        {candidate?.specialization}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={14} />
                        <span>{candidate?.location}</span>
                    </div>
                </div>
            </div>
            {/* Experience and Language */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                        <Icon name="Calendar" size={14} color="var(--color-muted-foreground)" />
                        <span className="text-xs text-muted-foreground">Experience</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                        {candidate?.experience} Years
                    </p>
                </div>

                <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                        <Icon name="Languages" size={14} color="var(--color-muted-foreground)" />
                        <span className="text-xs text-muted-foreground">German</span>
                    </div>
                    <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium border ${getLanguageBadgeColor(candidate?.germanLevel)}`}>
                        {candidate?.germanLevel}
                    </span>
                </div>
            </div>
            {/* Skills */}
            <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Core Competencies</p>
                <div className="flex flex-wrap gap-1">
                    {candidate?.skills?.slice(0, 3)?.map((skill, index) => (
                        <span
                            key={index}
                            className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md"
                        >
                            {skill}
                        </span>
                    ))}
                    {candidate?.skills?.length > 3 && (
                        <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                            +{candidate?.skills?.length - 3} more
                        </span>
                    )}
                </div>
            </div>
            {/* Availability */}
            <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getAvailabilityColor(candidate?.availability)}`}>
                    {candidate?.availability}
                </span>
            </div>
            {/* Actions */}
            <div className="flex space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                    iconPosition="left"
                    onClick={() => onViewProfile(candidate)}
                    className="flex-1"
                >
                    View Profile
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    iconName="Download"
                    onClick={() => onDownloadCV(candidate)}
                    className="px-3"
                />
            </div>
        </div>
    );
};

export default CandidateCard;