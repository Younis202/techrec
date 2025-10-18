import React from 'react';
import CandidateCard from './CandidateCard';
import Icon from '../../../components/AppIcon';

const CandidateGrid = ({
    candidates,
    isLoading,
    onViewProfile,
    onDownloadCV,
    sortBy,
    onSortChange
}) => {
    const sortOptions = [
        { value: 'name', label: 'Name A-Z', icon: 'ArrowUpAZ' },
        { value: 'experience', label: 'Experience (high-low)', icon: 'TrendingUp' },
        { value: 'germanLevel', label: 'German Level', icon: 'Languages' },
        { value: 'availability', label: 'Availability', icon: 'Clock' }
    ];

    if (isLoading) {
        return (
            <div className="space-y-6">
                {/* Sort Controls Skeleton */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                    <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 rounded w-48 animate-pulse"></div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(8)]?.map((_, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden animate-pulse">
                            {/* Header Skeleton */}
                            <div className="bg-gradient-to-br from-gray-300 to-gray-400 p-6 h-32">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-white/30 rounded w-3/4"></div>
                                        <div className="h-3 bg-white/20 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Content Skeleton */}
                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-100 rounded-lg p-3 h-20"></div>
                                    <div className="bg-gray-100 rounded-lg p-3 h-20"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-9 bg-gray-200 rounded-lg flex-1"></div>
                                    <div className="h-9 bg-gray-200 rounded-lg w-12"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (candidates?.length === 0) {
        return (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Search" size={36} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No Candidates Found
                </h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    Try adjusting your search criteria or clearing filters to discover more healthcare professionals.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Icon name="Lightbulb" size={16} className="text-blue-600" />
                    <span>Tip: Try broader search terms or check back later for new candidates</span>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Candidates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {candidates?.map((candidate) => (
                    <CandidateCard
                        key={candidate?.id}
                        candidate={candidate}
                        onViewProfile={onViewProfile}
                        onDownloadCV={onDownloadCV}
                    />
                ))}
            </div>

            {/* Results Info Footer */}
            {candidates?.length > 0 && (
                <div className="text-center py-4">
                    <p className="text-sm text-gray-500">
                        Displaying all {candidates?.length} candidates matching your criteria
                    </p>
                </div>
            )}
        </div>
    );
};

export default CandidateGrid;