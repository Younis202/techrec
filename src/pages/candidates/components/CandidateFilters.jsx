import React from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CandidateFilters = ({
    searchTerm,
    onSearchChange,
    selectedSpecialization,
    onSpecializationChange,
    selectedExperience,
    onExperienceChange,
    selectedLanguageLevel,
    onLanguageLevelChange,
    selectedLocation,
    onLocationChange,
    selectedAvailability,
    onAvailabilityChange,
    onClearFilters,
    resultCount,
    isLoading
}) => {
    const specializationOptions = [
        { value: '', label: 'All Specialties' },
        { value: 'Intensive Care', label: 'Intensive Care' },
        { value: 'Surgery', label: 'Surgery' },
        { value: 'Internal Medicine', label: 'Internal Medicine' },
        { value: 'Pediatrics', label: 'Pediatrics' },
        { value: 'Geriatrics', label: 'Geriatrics' },
        { value: 'Emergency', label: 'Emergency' },
        { value: 'Anesthesia', label: 'Anesthesia' },
        { value: 'Cardiology', label: 'Cardiology' },
        { value: 'Neurology', label: 'Neurology' },
        { value: 'Oncology', label: 'Oncology' }
    ];

    const experienceOptions = [
        { value: '', label: 'All Experience Levels' },
        { value: '1-2', label: '1-2 Years' },
        { value: '3-5', label: '3-5 Years' },
        { value: '6-10', label: '6-10 Years' },
        { value: '10+', label: '10+ Years' }
    ];

    const languageLevelOptions = [
        { value: '', label: 'All Language Levels' },
        { value: 'A1', label: 'A1 - Beginner' },
        { value: 'A2', label: 'A2 - Elementary' },
        { value: 'B1', label: 'B1 - Intermediate' },
        { value: 'B2', label: 'B2 - Upper Intermediate' },
        { value: 'C1', label: 'C1 - Advanced' },
        { value: 'C2', label: 'C2 - Proficient' }
    ];

    const locationOptions = [
        { value: '', label: 'All Locations' },
        { value: 'Berlin', label: 'Berlin' },
        { value: 'Munich', label: 'Munich' },
        { value: 'Hamburg', label: 'Hamburg' },
        { value: 'Cologne', label: 'Cologne' },
        { value: 'Frankfurt', label: 'Frankfurt' },
        { value: 'Stuttgart', label: 'Stuttgart' },
        { value: 'Düsseldorf', label: 'Düsseldorf' },
        { value: 'Dortmund', label: 'Dortmund' },
        { value: 'Essen', label: 'Essen' },
        { value: 'Leipzig', label: 'Leipzig' },
        { value: 'Bremen', label: 'Bremen' },
        { value: 'Dresden', label: 'Dresden' },
        { value: 'Hanover', label: 'Hanover' },
        { value: 'Nuremberg', label: 'Nuremberg' }
    ];

    const availabilityOptions = [
        { value: '', label: 'All Availabilities' },
        { value: 'Immediately Available', label: 'Immediately Available' },
        { value: 'In 2 Weeks', label: 'In 2 Weeks' },
        { value: 'In 1 Month', label: 'In 1 Month' },
        { value: 'In 3 Months', label: 'In 3 Months' }
    ];

    const hasActiveFilters = selectedSpecialization || selectedExperience || selectedLanguageLevel || selectedLocation || selectedAvailability || searchTerm;

    return (
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
            {/* Search Bar */}
            <div className="mb-6">
                <Input
                    type="search"
                    placeholder="Search candidates by name, skills, or certifications..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e?.target?.value)}
                    className="w-full"
                />
            </div>
            {/* Filter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-4">
                <Select
                    label="Specialty"
                    options={specializationOptions}
                    value={selectedSpecialization}
                    onChange={onSpecializationChange}
                    searchable
                />

                <Select
                    label="Experience"
                    options={experienceOptions}
                    value={selectedExperience}
                    onChange={onExperienceChange}
                />

                <Select
                    label="German Level"
                    options={languageLevelOptions}
                    value={selectedLanguageLevel}
                    onChange={onLanguageLevelChange}
                />

                <Select
                    label="Preferred Location"
                    options={locationOptions}
                    value={selectedLocation}
                    onChange={onLocationChange}
                    searchable
                />

                <Select
                    label="Availability"
                    options={availabilityOptions}
                    value={selectedAvailability}
                    onChange={onAvailabilityChange}
                />
            </div>
            {/* Results Summary and Clear Filters */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <p className="text-sm text-muted-foreground">
                        {isLoading ? (
                            <span className="flex items-center space-x-2">
                                <Icon name="Loader2" size={16} className="animate-spin" />
                                <span>Searching...</span>
                            </span>
                        ) : (
                            <span>
                                <span className="font-medium text-foreground">{resultCount}</span> candidates found
                            </span>
                        )}
                    </p>

                    {hasActiveFilters && (
                        <Button
                            variant="ghost"
                            size="sm"
                            iconName="X"
                            iconPosition="left"
                            onClick={onClearFilters}
                        >
                            Clear Filters
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CandidateFilters;