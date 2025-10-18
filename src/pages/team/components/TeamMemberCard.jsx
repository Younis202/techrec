import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamMemberCard = ({ member, onContactMember }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-muted">
                        <Image
                            src={member?.image}
                            alt={member?.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>

                {/* Member Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                                {member?.name}
                            </h3>
                            <p className="text-primary font-medium mb-2">
                                {member?.position}
                            </p>
                            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                                {member?.shortBio}
                            </p>

                            {/* Expertise Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {member?.expertise?.slice(0, 3)?.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                                {member?.expertise?.length > 3 && (
                                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                                        +{member?.expertise?.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Contact Button */}
                        <div className="flex-shrink-0">
                            <Button
                                variant="outline"
                                size="sm"
                                iconName="Mail"
                                iconPosition="left"
                                onClick={() => onContactMember(member)}
                                className="w-full sm:w-auto"
                            >
                                Contact
                            </Button>
                        </div>
                    </div>

                    {/* Expandable Details */}
                    <div className="mt-4 pt-4 border-t border-border">
                        <Button
                            variant="ghost"
                            size="sm"
                            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
                            iconPosition="right"
                            onClick={toggleExpanded}
                            className="text-sm text-muted-foreground hover:text-foreground p-0"
                        >
                            {isExpanded ? "Show Less" : "More Details"}
                        </Button>

                        {isExpanded && (
                            <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
                                {/* Experience */}
                                <div>
                                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                        <Icon name="Briefcase" size={16} className="text-primary" />
                                        Experience
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {member?.experience}
                                    </p>
                                </div>

                                {/* Certifications */}
                                {member?.certifications && member?.certifications?.length > 0 && (
                                    <div>
                                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                            <Icon name="Award" size={16} className="text-primary" />
                                            Certifications
                                        </h4>
                                        <ul className="space-y-1">
                                            {member?.certifications?.map((cert, index) => (
                                                <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                                    <Icon name="CheckCircle" size={12} className="text-success flex-shrink-0" />
                                                    {cert}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Languages */}
                                <div>
                                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                        <Icon name="Languages" size={16} className="text-primary" />
                                        Languages
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {member?.languages?.map((lang, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard; 