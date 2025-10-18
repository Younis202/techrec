import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const AccessRequestForm = ({ onSubmit, isSubmitting }) => {
    const [formData, setFormData] = useState({
        institutionName: '',
        institutionType: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        staffingNeeds: '',
        urgencyLevel: '',
        budgetRange: '',
        preferredContact: '',
        licenseNumber: '',
        acceptTerms: false,
        acceptPrivacy: false
    });

    const [errors, setErrors] = useState({});
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const institutionTypes = [
        { value: 'hospital', label: 'Hospital' },
        { value: 'clinic', label: 'Clinic' },
        { value: 'care_home', label: 'Care Home' },
        { value: 'rehabilitation', label: 'Rehabilitation Center' },
        { value: 'medical_center', label: 'Medical Center' },
        { value: 'other', label: 'Other' }
    ];

    const urgencyLevels = [
        { value: 'immediate', label: 'Immediate (1-2 Weeks)' },
        { value: 'urgent', label: 'Urgent (1 Month)' },
        { value: 'moderate', label: 'Moderate (2-3 Months)' },
        { value: 'planned', label: 'Planned (3+ Months)' }
    ];

    const budgetRanges = [
        { value: '10000-25000', label: '€10,000 - €25,000' },
        { value: '25000-50000', label: '€25,000 - €50,000' },
        { value: '50000-100000', label: '€50,000 - €100,000' },
        { value: '100000+', label: '€100,000+' }
    ];

    const contactMethods = [
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone' },
        { value: 'video', label: 'Video Conference' },
        { value: 'in_person', label: 'In-Person Meeting' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors?.[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleFileUpload = (event) => {
        const files = Array.from(event?.target?.files);
        const newFiles = files?.map(file => ({
            id: Date.now() + Math.random(),
            name: file?.name,
            size: file?.size,
            type: file?.type
        }));
        setUploadedFiles(prev => [...prev, ...newFiles]);
    };

    const removeFile = (fileId) => {
        setUploadedFiles(prev => prev?.filter(file => file?.id !== fileId));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData?.institutionName?.trim()) {
            newErrors.institutionName = 'Institution name is required';
        }

        if (!formData?.institutionType) {
            newErrors.institutionType = 'Please select an institution type';
        }

        if (!formData?.contactPerson?.trim()) {
            newErrors.contactPerson = 'Contact person is required';
        }

        if (!formData?.email?.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData?.phone?.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData?.staffingNeeds?.trim()) {
            newErrors.staffingNeeds = 'Staffing needs are required';
        }

        if (!formData?.urgencyLevel) {
            newErrors.urgencyLevel = 'Urgency level is required';
        }

        if (!formData?.budgetRange) {
            newErrors.budgetRange = 'Budget range is required';
        }

        if (!formData?.acceptTerms) {
            newErrors.acceptTerms = 'Agreement to terms and conditions is required';
        }

        if (!formData?.acceptPrivacy) {
            newErrors.acceptPrivacy = 'Agreement to privacy policy is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors)?.length === 0;
    };

    const handleSubmit = (e) => {
        e?.preventDefault();
        if (validateForm()) {
            onSubmit({ ...formData, uploadedFiles });
        }
    };

    return (
        <div className="bg-card rounded-xl border border-border p-8">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Partner Access Request
                </h2>
                <p className="text-muted-foreground">
                    Fill out the form to gain access to our partner network
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Institution Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center">
                        <Icon name="Building2" size={20} className="mr-2 text-primary" />
                        Institution Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Institution Name"
                            type="text"
                            placeholder="e.g. University Hospital Munich"
                            value={formData?.institutionName}
                            onChange={(e) => handleInputChange('institutionName', e?.target?.value)}
                            error={errors?.institutionName}
                            required
                        />

                        <Select
                            label="Institution Type"
                            placeholder="Select type"
                            options={institutionTypes}
                            value={formData?.institutionType}
                            onChange={(value) => handleInputChange('institutionType', value)}
                            error={errors?.institutionType}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Contact Person"
                            type="text"
                            placeholder="First and last name"
                            value={formData?.contactPerson}
                            onChange={(e) => handleInputChange('contactPerson', e?.target?.value)}
                            error={errors?.contactPerson}
                            required
                        />

                        <Input
                            label="License Number"
                            type="text"
                            placeholder="Institution license (optional)"
                            value={formData?.licenseNumber}
                            onChange={(e) => handleInputChange('licenseNumber', e?.target?.value)}
                        />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center">
                        <Icon name="Mail" size={20} className="mr-2 text-primary" />
                        Contact Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="contact@institution.com"
                            value={formData?.email}
                            onChange={(e) => handleInputChange('email', e?.target?.value)}
                            error={errors?.email}
                            required
                        />

                        <Input
                            label="Phone Number"
                            type="tel"
                            placeholder="+1 555 123 4567"
                            value={formData?.phone}
                            onChange={(e) => handleInputChange('phone', e?.target?.value)}
                            error={errors?.phone}
                            required
                        />
                    </div>

                    <Input
                        label="Address"
                        type="text"
                        placeholder="Street and number"
                        value={formData?.address}
                        onChange={(e) => handleInputChange('address', e?.target?.value)}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="City"
                            type="text"
                            placeholder="Munich"
                            value={formData?.city}
                            onChange={(e) => handleInputChange('city', e?.target?.value)}
                        />

                        <Input
                            label="Postal Code"
                            type="text"
                            placeholder="80331"
                            value={formData?.postalCode}
                            onChange={(e) => handleInputChange('postalCode', e?.target?.value)}
                        />
                    </div>
                </div>

                {/* Staffing Requirements */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center">
                        <Icon name="Users" size={20} className="mr-2 text-primary" />
                        Staffing Needs
                    </h3>

                    <Input
                        label="Description of Staffing Needs"
                        type="text"
                        placeholder="e.g. 5 nurses for intensive care unit"
                        value={formData?.staffingNeeds}
                        onChange={(e) => handleInputChange('staffingNeeds', e?.target?.value)}
                        error={errors?.staffingNeeds}
                        description="Describe your current staffing needs"
                        required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select
                            label="Urgency"
                            placeholder="Select urgency"
                            options={urgencyLevels}
                            value={formData?.urgencyLevel}
                            onChange={(value) => handleInputChange('urgencyLevel', value)}
                            error={errors?.urgencyLevel}
                            required
                        />

                        <Select
                            label="Budget Range"
                            placeholder="Select your budget"
                            options={budgetRanges}
                            value={formData?.budgetRange}
                            onChange={(value) => handleInputChange('budgetRange', value)}
                            error={errors?.budgetRange}
                            required
                        />
                    </div>

                    <Select
                        label="Preferred Contact Method"
                        placeholder="How would you like to be contacted?"
                        options={contactMethods}
                        value={formData?.preferredContact}
                        onChange={(value) => handleInputChange('preferredContact', value)}
                    />
                </div>

                {/* File Upload */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center">
                        <Icon name="Upload" size={20} className="mr-2 text-primary" />
                        Documents (Optional)
                    </h3>

                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                        <input
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx,.jpg,.png"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                            <Icon name="Upload" size={32} className="mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground mb-1">
                                Click here to upload documents
                            </p>
                            <p className="text-xs text-muted-foreground">
                                PDF, DOC, DOCX, JPG, PNG (max. 10MB per file)
                            </p>
                        </label>
                    </div>

                    {uploadedFiles?.length > 0 && (
                        <div className="space-y-2">
                            {uploadedFiles?.map((file) => (
                                <div key={file?.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <Icon name="File" size={16} className="text-muted-foreground" />
                                        <span className="text-sm text-foreground">{file?.name}</span>
                                        <span className="text-xs text-muted-foreground">
                                            ({(file?.size / 1024 / 1024)?.toFixed(2)} MB)
                                        </span>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeFile(file?.id)}
                                        iconName="X"
                                    >
                                        Remove
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4 pt-4 border-t border-border">
                    <Checkbox
                        label="I agree to the terms and conditions"
                        checked={formData?.acceptTerms}
                        onChange={(e) => handleInputChange('acceptTerms', e?.target?.checked)}
                        error={errors?.acceptTerms}
                        required
                    />

                    <Checkbox
                        label="I agree to the privacy policy"
                        checked={formData?.acceptPrivacy}
                        onChange={(e) => handleInputChange('acceptPrivacy', e?.target?.checked)}
                        error={errors?.acceptPrivacy}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                    <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        loading={isSubmitting}
                        iconName="Send"
                        iconPosition="right"
                        fullWidth
                    >
                        Send Access Request
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AccessRequestForm;