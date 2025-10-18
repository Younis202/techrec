import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactTeamModal = ({ isOpen, onClose, selectedMember }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        urgency: 'normal'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const urgencyOptions = [
        { value: 'low', label: 'Low - General Inquiry' },
        { value: 'normal', label: 'Normal - Standard Request' },
        { value: 'high', label: 'High - Urgent Request' },
        { value: 'urgent', label: 'Very Urgent - Immediate Response Required' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e?.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success message and close modal
        alert(`Your message has been successfully sent to ${selectedMember?.name}. You will receive a response within 24 hours.`);

        setIsSubmitting(false);
        setFormData({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: '',
            urgency: 'normal'
        });
        onClose();
    };

    if (!isOpen || !selectedMember) return null;

    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                            <img
                                src={selectedMember?.image}
                                alt={selectedMember?.imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-foreground">
                                Contact {selectedMember?.name}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                {selectedMember?.position}
                            </p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Icon name="X" size={20} />
                    </Button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Your Name"
                            type="text"
                            placeholder="John Smith"
                            value={formData?.name}
                            onChange={(e) => handleInputChange('name', e?.target?.value)}
                            required
                        />
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="john.smith@clinic.com"
                            value={formData?.email}
                            onChange={(e) => handleInputChange('email', e?.target?.value)}
                            required
                        />
                    </div>

                    <Input
                        label="Company/Clinic"
                        type="text"
                        placeholder="University Hospital Munich"
                        value={formData?.company}
                        onChange={(e) => handleInputChange('company', e?.target?.value)}
                        description="Optional - helps us provide better consultation"
                    />

                    {/* Subject and Urgency */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Subject"
                            type="text"
                            placeholder="Inquiry about healthcare recruitment"
                            value={formData?.subject}
                            onChange={(e) => handleInputChange('subject', e?.target?.value)}
                            required
                        />
                        <Select
                            label="Urgency"
                            options={urgencyOptions}
                            value={formData?.urgency}
                            onChange={(value) => handleInputChange('urgency', value)}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Your Message *
                        </label>
                        <textarea
                            className="w-full min-h-[120px] px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
                            placeholder={`Hello ${selectedMember?.name},\n\nI am interested in your services regarding...`}
                            value={formData?.message}
                            onChange={(e) => handleInputChange('message', e?.target?.value)}
                            required
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            Minimum 20 characters required
                        </p>
                    </div>

                    {/* Member Expertise Reminder */}
                    <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                            <Icon name="Lightbulb" size={16} className="text-primary" />
                            {selectedMember?.name}'s Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {selectedMember?.expertise?.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Response Time Info */}
                    <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <Icon name="Clock" size={16} className="text-success flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-medium text-success mb-1">Response Time</h4>
                                <p className="text-sm text-success/80">
                                    {selectedMember?.name} typically responds within 24 hours.
                                    For urgent requests, you will receive a response within 4 hours.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                            type="submit"
                            variant="default"
                            loading={isSubmitting}
                            iconName="Send"
                            iconPosition="right"
                            className="flex-1"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            disabled={isSubmitting}
                            className="sm:w-auto"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactTeamModal;