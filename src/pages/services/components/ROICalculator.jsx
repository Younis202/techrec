import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ROICalculator = ({ onScheduleConsultation }) => {
    const [formData, setFormData] = useState({
        facilityType: '',
        staffingNeeds: '',
        urgency: '',
        currentCosts: '',
        location: ''
    });

    const [results, setResults] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const facilityOptions = [
        { value: 'hospital', label: 'Hospital' },
        { value: 'clinic', label: 'Clinic' },
        { value: 'care-home', label: 'Care Home' },
        { value: 'rehabilitation', label: 'Rehabilitation Center' },
        { value: 'other', label: 'Other' }
    ];

    const urgencyOptions = [
        { value: 'immediate', label: 'Immediate (1-2 weeks)' },
        { value: 'urgent', label: 'Urgent (1 month)' },
        { value: 'planned', label: 'Planned (2-3 months)' },
        { value: 'future', label: 'Future (6+ months)' }
    ];

    const locationOptions = [
        { value: 'bayern', label: 'Bavaria' },
        { value: 'nrw', label: 'North Rhine-Westphalia' },
        { value: 'bw', label: 'Baden-Württemberg' },
        { value: 'niedersachsen', label: 'Lower Saxony' },
        { value: 'hessen', label: 'Hesse' },
        { value: 'other', label: 'Other States' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const calculateROI = () => {
        setIsCalculating(true);

        // Simulate calculation delay
        setTimeout(() => {
            const staffingNeedsNum = parseInt(formData?.staffingNeeds) || 1;
            const currentCostsNum = parseInt(formData?.currentCosts) || 50000;

            // Mock calculation logic
            const baseCostPerPlacement = 8500;
            const urgencyMultiplier = formData?.urgency === 'immediate' ? 1.2 :
                formData?.urgency === 'urgent' ? 1.1 : 1.0;
            const locationMultiplier = ['bayern', 'bw']?.includes(formData?.location) ? 1.15 : 1.0;

            const totalPlacementCost = staffingNeedsNum * baseCostPerPlacement * urgencyMultiplier * locationMultiplier;
            const timeToFill = formData?.urgency === 'immediate' ? '2-3 Weeks' :
                formData?.urgency === 'urgent' ? '4-6 Weeks' :
                    formData?.urgency === 'planned' ? '8-12 Weeks' : '12-16 Weeks';

            const annualSavings = Math.max(0, currentCostsNum - totalPlacementCost);
            const roiPercentage = currentCostsNum > 0 ? ((annualSavings / currentCostsNum) * 100)?.toFixed(1) : 0;

            setResults({
                totalCost: totalPlacementCost?.toLocaleString('de-DE'),
                timeToFill,
                annualSavings: annualSavings?.toLocaleString('de-DE'),
                roiPercentage,
                candidatesAvailable: Math.min(staffingNeedsNum * 3, 28),
                guaranteePeriod: '12 Months'
            });

            setIsCalculating(false);
        }, 1500);
    };

    const isFormValid = formData?.facilityType && formData?.staffingNeeds && formData?.urgency && formData?.location;

    return (
        <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calculator" size={32} color="var(--color-primary)" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">ROI Calculator</h2>
                <p className="text-muted-foreground">
                    Calculate your costs and savings for staffing placement
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Select
                    label="Facility Type"
                    options={facilityOptions}
                    value={formData?.facilityType}
                    onChange={(value) => handleInputChange('facilityType', value)}
                    placeholder="Select your facility"
                    required
                />

                <Input
                    label="Number of Staff Needed"
                    type="number"
                    placeholder="e.g. 5"
                    value={formData?.staffingNeeds}
                    onChange={(e) => handleInputChange('staffingNeeds', e?.target?.value)}
                    min="1"
                    max="50"
                    required
                />

                <Select
                    label="Urgency"
                    options={urgencyOptions}
                    value={formData?.urgency}
                    onChange={(value) => handleInputChange('urgency', value)}
                    placeholder="When do you need staff?"
                    required
                />

                <Select
                    label="Location"
                    options={locationOptions}
                    value={formData?.location}
                    onChange={(value) => handleInputChange('location', value)}
                    placeholder="Select state"
                    required
                />

                <div className="md:col-span-2">
                    <Input
                        label="Current Annual Staffing Costs (optional)"
                        type="number"
                        placeholder="e.g. 250000"
                        value={formData?.currentCosts}
                        onChange={(e) => handleInputChange('currentCosts', e?.target?.value)}
                        description="For a more accurate ROI calculation"
                    />
                </div>
            </div>
            <div className="text-center mb-8">
                <Button
                    variant="default"
                    size="lg"
                    iconName="Calculator"
                    iconPosition="left"
                    onClick={calculateROI}
                    disabled={!isFormValid}
                    loading={isCalculating}
                >
                    {isCalculating ? 'Calculating...' : 'Calculate ROI'}
                </Button>
            </div>
            {results && (
                <div className="border-t border-border pt-8">
                    <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                        Your Cost Analysis
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                            <div className="text-2xl font-bold text-primary mb-1">€{results?.totalCost}</div>
                            <div className="text-sm text-muted-foreground">Total Placement Cost</div>
                        </div>

                        <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
                            <div className="text-2xl font-bold text-success mb-1">{results?.timeToFill}</div>
                            <div className="text-sm text-muted-foreground">Average Time to Fill</div>
                        </div>

                        <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                            <div className="text-2xl font-bold text-secondary mb-1">{results?.candidatesAvailable}</div>
                            <div className="text-sm text-muted-foreground">Available Candidates</div>
                        </div>
                    </div>

                    {results?.annualSavings !== '0' && (
                        <div className="bg-success/5 border border-success/20 rounded-lg p-6 mb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold text-success mb-1">Potential Annual Savings</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Based on your current staffing costs
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-success">€{results?.annualSavings}</div>
                                    <div className="text-sm text-success">ROI: {results?.roiPercentage}%</div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="text-center">
                        <Button
                            variant="outline"
                            size="lg"
                            iconName="Calendar"
                            iconPosition="left"
                            onClick={onScheduleConsultation}
                        >
                            Schedule Free Consultation
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ROICalculator;