import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceComparison = () => {
    const [activeTab, setActiveTab] = useState('features');

    const comparisonData = {
        features: [
            {
                feature: 'Candidate Pre-screening',
                permanent: 'Comprehensive Review',
                contract: 'Standard Review',
                training: 'Not Included'
            },
            {
                feature: 'Language Certification',
                permanent: 'B2/C1 Guaranteed',
                contract: 'B1/B2 Level',
                training: 'A1 to C1'
            },
            {
                feature: 'Professional Qualification',
                permanent: 'Full Recognition',
                contract: 'Partial Recognition Possible',
                training: 'Recognition Preparation'
            },
            {
                feature: 'Visa Support',
                permanent: 'Full Service',
                contract: 'Basic Support',
                training: 'Consultation'
            },
            {
                feature: 'Follow-up Support',
                permanent: '12 Months',
                contract: '6 Months',
                training: '3 Months'
            },
            {
                feature: 'Replacement Guarantee',
                permanent: '100% within 3 Months',
                contract: '50% within 1 Month',
                training: 'Not Available'
            }
        ],
        pricing: [
            {
                aspect: 'Base Fee',
                permanent: '€8,500 per placement',
                contract: '€4,200 per placement',
                training: '€2,800 per participant'
            },
            {
                aspect: 'Success Fee',
                permanent: 'No additional costs',
                contract: '15% of annual salary',
                training: 'None'
            },
            {
                aspect: 'Minimum Term',
                permanent: 'None',
                contract: '6 Months',
                training: '12 Months'
            },
            {
                aspect: 'Payment Terms',
                permanent: '50% upon contract signing',
                contract: '30% monthly',
                training: 'Quarterly'
            }
        ]
    };

    const tabs = [
        { id: 'features', label: 'Service Comparison', icon: 'CheckSquare' },
        { id: 'pricing', label: 'Pricing Structure', icon: 'Euro' }
    ];

    const getStatusIcon = (value) => {
        if (value?.includes('Guaranteed') || value?.includes('Full Service') || value?.includes('100%')) {
            return <Icon name="CheckCircle" size={16} color="var(--color-success)" />;
        }
        if (value?.includes('Not') || value?.includes('None')) {
            return <Icon name="XCircle" size={16} color="var(--color-error)" />;
        }
        return <Icon name="MinusCircle" size={16} color="var(--color-warning)" />;
    };

    return (
        <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Service Comparison</h2>
                <p className="text-muted-foreground">
                    Find the right package for your requirements
                </p>
            </div>
            <div className="flex justify-center mb-8">
                <div className="flex bg-muted/30 rounded-lg p-1">
                    {tabs?.map((tab) => (
                        <button
                            key={tab?.id}
                            onClick={() => setActiveTab(tab?.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${activeTab === tab?.id
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            <Icon name={tab?.icon} size={16} />
                            <span className="font-medium">{tab?.label}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="text-left py-4 px-4 font-semibold text-foreground">
                                {activeTab === 'features' ? 'Service' : 'Cost Aspect'}
                            </th>
                            <th className="text-center py-4 px-4">
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Icon name="Users" size={20} color="var(--color-primary)" />
                                    </div>
                                    <div className="font-semibold text-foreground">Permanent</div>
                                    <div className="text-xs text-muted-foreground">Full-time Employment</div>
                                </div>
                            </th>
                            <th className="text-center py-4 px-4">
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                                        <Icon name="Clock" size={20} color="var(--color-secondary)" />
                                    </div>
                                    <div className="font-semibold text-foreground">Contract</div>
                                    <div className="text-xs text-muted-foreground">Temporary Work</div>
                                </div>
                            </th>
                            <th className="text-center py-4 px-4">
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                                        <Icon name="GraduationCap" size={20} color="var(--color-warning)" />
                                    </div>
                                    <div className="font-semibold text-foreground">Training</div>
                                    <div className="text-xs text-muted-foreground">Language Courses</div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData?.[activeTab]?.map((row, index) => (
                            <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                                <td className="py-4 px-4 font-medium text-foreground">
                                    {activeTab === 'features' ? row?.feature : row?.aspect}
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <div className="flex items-center justify-center space-x-2">
                                        {activeTab === 'features' && getStatusIcon(row?.permanent)}
                                        <span className="text-sm text-muted-foreground">{row?.permanent}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <div className="flex items-center justify-center space-x-2">
                                        {activeTab === 'features' && getStatusIcon(row?.contract)}
                                        <span className="text-sm text-muted-foreground">{row?.contract}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <div className="flex items-center justify-center space-x-2">
                                        {activeTab === 'features' && getStatusIcon(row?.training)}
                                        <span className="text-sm text-muted-foreground">{row?.training}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 p-6 bg-muted/20 rounded-lg">
                <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-foreground mb-2">Important Notes</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• All prices exclude statutory VAT</li>
                            <li>• Custom packages and volume discounts available upon request</li>
                            <li>• Success guarantee applies when agreed framework conditions are met</li>
                            <li>• Language certificates are issued by recognized examination institutes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceComparison;