import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServiceCard = ({ service, onRequestQuote, featured = false }) => {
    return (
        <div className={`relative bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${featured ? 'ring-2 ring-primary/20 scale-105' : ''
            }`}>
            {featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                    </div>
                </div>
            )}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={service?.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground">{service?.title}</h3>
                        <p className="text-sm text-muted-foreground">{service?.subtitle}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{service?.price}</div>
                    <div className="text-sm text-muted-foreground">{service?.priceUnit}</div>
                </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
                {service?.description}
            </p>
            <div className="space-y-4 mb-8">
                <h4 className="font-medium text-foreground">Services Overview:</h4>
                <ul className="space-y-2">
                    {service?.features?.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <Icon name="Check" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{service?.timeline}</div>
                    <div className="text-xs text-muted-foreground">Average Duration</div>
                </div>
                <div className="text-center">
                    <div className="text-lg font-semibold text-success">{service?.successRate}</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
            </div>
            <div className="space-y-3">
                <Button
                    variant="default"
                    fullWidth
                    iconName="MessageSquare"
                    iconPosition="left"
                    onClick={() => onRequestQuote(service)}
                >
                    Request Quote
                </Button>

                {service?.sampleDownload && (
                    <Button
                        variant="outline"
                        fullWidth
                        iconName="Download"
                        iconPosition="left"
                        onClick={() => window.open(service?.sampleDownload, '_blank')}
                    >
                        Download Sample Documents
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;