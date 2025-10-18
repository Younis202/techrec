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
                <div className="flex items-center justify-between">
                    <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
                    <div className="h-10 bg-muted rounded w-48 animate-pulse"></div>
                </div>
                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(8)]?.map((_, index) => (
                        <div key={index} className="bg-card border border-border rounded-xl p-6 animate-pulse">
                            <div className="flex items-start space-x-4 mb-4">
                                <div className="w-16 h-16 bg-muted rounded-full"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 bg-muted rounded w-3/4"></div>
                                    <div className="h-3 bg-muted rounded w-1/2"></div>
                                    <div className="h-3 bg-muted rounded w-2/3"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-muted rounded-lg p-3 h-16"></div>
                                <div className="bg-muted rounded-lg p-3 h-16"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-3 bg-muted rounded w-full"></div>
                                <div className="h-8 bg-muted rounded w-full"></div>
                                <div className="flex space-x-2">
                                    <div className="h-8 bg-muted rounded flex-1"></div>
                                    <div className="h-8 bg-muted rounded w-12"></div>
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
            <div className="text-center py-12">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" size={32} color="var(--color-muted-foreground)" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                    No Candidates Found
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Try broadening your search criteria or clearing filters to find more results.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Sort Controls */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    Showing {candidates?.length} candidates
                </p>

                <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => onSortChange(e?.target?.value)}
                        className="bg-card border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                        {sortOptions?.map((option) => (
                            <option key={option?.value} value={option?.value}>
                                {option?.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
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
        </div>
    );
};

export default CandidateGrid;