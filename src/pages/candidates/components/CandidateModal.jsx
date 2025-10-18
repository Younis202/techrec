import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CandidateModal = ({ candidate, isOpen, onClose, onDownloadCV }) => {
    if (!isOpen || !candidate) return null;

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
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
                        <div>
                            <h2 className="text-2xl font-bold text-foreground">{candidate?.name}</h2>
                            <p className="text-muted-foreground">{candidate?.specialization}</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        iconName="X"
                        onClick={onClose}
                        className="p-2"
                    />
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-muted rounded-lg p-4 text-center">
                            <Icon name="Calendar" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Experience</p>
                            <p className="text-lg font-semibold text-foreground">{candidate?.experience} Years</p>
                        </div>
                        <div className="bg-muted rounded-lg p-4 text-center">
                            <Icon name="Languages" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">German Level</p>
                            <span className={`inline-block px-3 py-1 rounded-md text-sm font-medium border ${getLanguageBadgeColor(candidate?.germanLevel)}`}>
                                {candidate?.germanLevel}
                            </span>
                        </div>
                        <div className="bg-muted rounded-lg p-4 text-center">
                            <Icon name="MapPin" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="text-lg font-semibold text-foreground">{candidate?.location}</p>
                        </div>
                        <div className="bg-muted rounded-lg p-4 text-center">
                            <Icon name="Clock" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Availability</p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getAvailabilityColor(candidate?.availability)}`}>
                                {candidate?.availability}
                            </span>
                        </div>
                    </div>

                    {/* Professional Summary */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                            <Icon name="User" size={20} />
                            <span>Professional Profile</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {candidate?.summary}
                        </p>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                            <Icon name="Award" size={20} />
                            <span>Professional Skills</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {candidate?.skills?.map((skill, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-md border border-secondary/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                            <Icon name="Briefcase" size={20} />
                            <span>Work Experience</span>
                        </h3>
                        <div className="space-y-4">
                            {candidate?.workExperience?.map((job, index) => (
                                <div key={index} className="border-l-2 border-primary/20 pl-4">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-medium text-foreground">{job?.position}</h4>
                                            <p className="text-sm text-muted-foreground">{job?.hospital}</p>
                                        </div>
                                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                            {job?.duration}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{job?.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                            <Icon name="Certificate" size={20} />
                            <span>Certifications</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {candidate?.certifications?.map((cert, index) => (
                                <div key={index} className="bg-muted rounded-lg p-3">
                                    <h4 className="font-medium text-foreground text-sm">{cert?.name}</h4>
                                    <p className="text-xs text-muted-foreground">{cert?.issuer} • {cert?.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Language Skills */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                            <Icon name="Languages" size={20} />
                            <span>Language Skills</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {candidate?.languages?.map((lang, index) => (
                                <div key={index} className="bg-muted rounded-lg p-3 text-center">
                                    <p className="font-medium text-foreground">{lang?.language}</p>
                                    <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium border mt-1 ${getLanguageBadgeColor(lang?.level)}`}>
                                        {lang?.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                            <Icon name="Contact" size={20} />
                            <span>Contact Information</span>
                        </h3>
                        <div className="bg-muted rounded-lg p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <Icon name="Mail" size={16} color="var(--color-muted-foreground)" />
                                    <span className="text-sm text-muted-foreground">{candidate?.email}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Icon name="Phone" size={16} color="var(--color-muted-foreground)" />
                                    <span className="text-sm text-muted-foreground">{candidate?.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="sticky bottom-0 bg-card border-t border-border p-6">
                    <div className="flex space-x-3">
                        <Button
                            variant="default"
                            iconName="Download"
                            iconPosition="left"
                            onClick={() => onDownloadCV(candidate)}
                            className="flex-1"
                        >
                            Download Resume
                        </Button>
                        <Button
                            variant="outline"
                            iconName="Heart"
                            iconPosition="left"
                            className="flex-1"
                        >
                            Add to Favorites
                        </Button>
                        <Button
                            variant="secondary"
                            iconName="MessageSquare"
                            iconPosition="left"
                            className="flex-1"
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