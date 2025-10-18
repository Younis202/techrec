import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ConsultationScheduler = ({ onSchedule }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [consultationType, setConsultationType] = useState('');
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const availableDates = [
        { value: '2024-10-16', label: 'Wednesday, October 16, 2024' },
        { value: '2024-10-17', label: 'Thursday, October 17, 2024' },
        { value: '2024-10-18', label: 'Friday, October 18, 2024' },
        { value: '2024-10-21', label: 'Monday, October 21, 2024' },
        { value: '2024-10-22', label: 'Tuesday, October 22, 2024' },
        { value: '2024-10-23', label: 'Wednesday, October 23, 2024' }
    ];

    const availableTimes = [
        { value: '09:00', label: '09:00 - 09:30' },
        { value: '09:30', label: '09:30 - 10:00' },
        { value: '10:00', label: '10:00 - 10:30' },
        { value: '10:30', label: '10:30 - 11:00' },
        { value: '11:00', label: '11:00 - 11:30' },
        { value: '14:00', label: '14:00 - 14:30' },
        { value: '14:30', label: '14:30 - 15:00' },
        { value: '15:00', label: '15:00 - 15:30' },
        { value: '15:30', label: '15:30 - 16:00' },
        { value: '16:00', label: '16:00 - 16:30' }
    ];

    const consultationTypes = [
        { value: 'initial', label: 'Initial Consultation (30 Min.)' },
        { value: 'detailed', label: 'Detailed Consultation (60 Min.)' },
        { value: 'demo', label: 'Platform Demo (45 Min.)' },
        { value: 'custom', label: 'Custom Consultation' }
    ];

    const handleInputChange = (field, value) => {
        setContactInfo(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e?.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        const appointmentData = {
            date: selectedDate,
            time: selectedTime,
            type: consultationType,
            contact: contactInfo,
            scheduledAt: new Date()?.toISOString()
        };

        if (onSchedule) {
            onSchedule(appointmentData);
        }

        setIsSubmitting(false);
    };

    const isFormValid = () => {
        return selectedDate && selectedTime && consultationType &&
            contactInfo?.name && contactInfo?.email && contactInfo?.phone;
    };

    return (
        <div className="bg-card rounded-xl border border-border p-8">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Schedule a Consultation
                </h2>
                <p className="text-muted-foreground">
                    Speak directly with our partner team about your requirements
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Consultation Type */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center">
                        <Icon name="Calendar" size={20} className="mr-2 text-primary" />
                        Type of Consultation
                    </h3>

                    <Select
                        label="Consultation Type"
                        placeholder="Select consultation type"
                        options={consultationTypes}
                        value={consultationType}
                        onChange={setConsultationType}
                        required
                    />
                </div>

                {/* Date and Time Selection */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center">
                        <Icon name="Clock" size={20} className="mr-2 text-primary" />
                        Select Appointment
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select
                            label="Date"
                            placeholder="Select a date"
                            options={availableDates}
                            value={selectedDate}
                            onChange={setSelectedDate}
                            required
                        />

                        <Select
                            label="Time"
                            placeholder="Select a time"
                            options={availableTimes}
                            value={selectedTime}
                            onChange={setSelectedTime}
                            disabled={!selectedDate}
                            required
                        />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center">
                        <Icon name="User" size={20} className="mr-2 text-primary" />
                        Contact Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Full Name"
                            type="text"
                            placeholder="Your name"
                            value={contactInfo?.name}
                            onChange={(e) => handleInputChange('name', e?.target?.value)}
                            required
                        />

                        <Input
                            label="Company"
                            type="text"
                            placeholder="Institution name"
                            value={contactInfo?.company}
                            onChange={(e) => handleInputChange('company', e?.target?.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="your.email@institution.com"
                            value={contactInfo?.email}
                            onChange={(e) => handleInputChange('email', e?.target?.value)}
                            required
                        />

                        <Input
                            label="Phone Number"
                            type="tel"
                            placeholder="+1 555 123 4567"
                            value={contactInfo?.phone}
                            onChange={(e) => handleInputChange('phone', e?.target?.value)}
                            required
                        />
                    </div>
                </div>

                {/* Appointment Summary */}
                {selectedDate && selectedTime && consultationType && (
                    <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center">
                            <Icon name="Calendar" size={16} className="mr-2 text-primary" />
                            Appointment Summary
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Date:</span>
                                <span className="text-foreground font-medium">
                                    {availableDates?.find(d => d?.value === selectedDate)?.label}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Time:</span>
                                <span className="text-foreground font-medium">
                                    {availableTimes?.find(t => t?.value === selectedTime)?.label}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Consultation Type:</span>
                                <span className="text-foreground font-medium">
                                    {consultationTypes?.find(c => c?.value === consultationType)?.label}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <div className="pt-6">
                    <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        loading={isSubmitting}
                        disabled={!isFormValid()}
                        iconName="Calendar"
                        iconPosition="right"
                        fullWidth
                    >
                        Schedule Appointment
                    </Button>
                </div>
            </form>
            {/* Additional Information */}
            <div className="mt-8 p-6 bg-muted/20 rounded-lg">
                <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="text-sm font-medium text-foreground mb-2">
                            What You Can Expect
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Personalized needs analysis for your institution</li>
                            <li>• Introduction to our candidate pool</li>
                            <li>• Customized cost calculations</li>
                            <li>• Next steps towards partnership</li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-3">
                            You will receive a confirmation email with all appointment details and a calendar link.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultationScheduler;