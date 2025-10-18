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
        { value: 'Emergency Room', label: 'Emergency Room' },
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
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="Filter" size={20} className="text-blue-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Filter Candidates</h3>
                    <p className="text-sm text-gray-500">Refine your search to find the perfect match</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <div className="relative">
                    <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                        type="search"
                        placeholder="Search by name, skills, or certifications..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e?.target?.value)}
                        className="w-full pl-10"
                    />
                </div>
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Icon name="Stethoscope" size={14} className="inline mr-1.5 text-blue-600" />
                        Specialty
                    </label>
                    <Select
                        options={specializationOptions}
                        value={selectedSpecialization}
                        onChange={onSpecializationChange}
                        searchable
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Icon name="Briefcase" size={14} className="inline mr-1.5 text-blue-600" />
                        Experience
                    </label>
                    <Select
                        options={experienceOptions}
                        value={selectedExperience}
                        onChange={onExperienceChange}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Icon name="MessageCircle" size={14} className="inline mr-1.5 text-blue-600" />
                        German Level
                    </label>
                    <Select
                        options={languageLevelOptions}
                        value={selectedLanguageLevel}
                        onChange={onLanguageLevelChange}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Icon name="MapPin" size={14} className="inline mr-1.5 text-blue-600" />
                        Location
                    </label>
                    <Select
                        options={locationOptions}
                        value={selectedLocation}
                        onChange={onLocationChange}
                        searchable
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Icon name="Clock" size={14} className="inline mr-1.5 text-blue-600" />
                        Availability
                    </label>
                    <Select
                        options={availabilityOptions}
                        value={selectedAvailability}
                        onChange={onAvailabilityChange}
                    />
                </div>
            </div>

            {/* Results Summary and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                    {isLoading ? (
                        <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="Loader2" size={16} className="animate-spin text-blue-600" />
                            <span className="text-sm font-medium">Searching candidates...</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <Icon name="Users" size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold text-gray-900">{resultCount}</span>
                                <span className="text-sm text-gray-500 ml-2">
                                    {resultCount === 1 ? 'candidate' : 'candidates'} found
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {hasActiveFilters && !isLoading && (
                    <Button
                        variant="outline"
                        size="sm"
                        iconName="X"
                        iconPosition="left"
                        onClick={onClearFilters}
                        className="border-gray-300 hover:bg-gray-50 font-medium"
                    >
                        Clear All Filters
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CandidateFilters;