import React from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocationsSection = () => {
    const offices = [
        {
            city: "Munich",
            country: "Germany",
            type: "Headquarters",
            address: "Maximilianstraße 35, 80539 Munich",
            phone: "+49 89 123 456 789",
            email: "muenchen@techdeutsch.de",
            coordinates: "48.1351,11.5820",
            description: "Our headquarters in the heart of Munich coordinates all German activities and partnerships.",
            team: "12 Employees",
            specialties: ["Clinic Partnerships", "Compliance", "Quality Assurance"]
        },
        {
            city: "Berlin",
            country: "Germany",
            type: "Regional Office",
            address: "Unter den Linden 42, 10117 Berlin",
            phone: "+49 30 987 654 321",
            email: "berlin@techdeutsch.de",
            coordinates: "52.5200,13.4050",
            description: "Our Berlin office focuses on government relations and certification processes.",
            team: "8 Employees",
            specialties: ["Government Contacts", "Visa Processing", "Legal Matters"]
        },
        {
            city: "Baghdad",
            country: "Iraq",
            type: "Candidate Center",
            address: "Al-Karrada District, Medical City Area",
            phone: "+964 1 234 567 890",
            email: "baghdad@techdeutsch.de",
            coordinates: "33.3152,44.3661",
            description: "Our Iraqi center for candidate recruitment, screening and language preparation.",
            team: "15 Employees",
            specialties: ["Recruitment", "Language Training", "Document Preparation"]
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our Locations
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    With strategically placed offices in Germany and Iraq, we ensure optimal support for all stakeholders.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {offices?.map((office, index) => (
                    <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                        {/* Map Header */}
                        <div className="h-48 bg-muted relative overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                loading="lazy"
                                title={`${office?.city} Office Location`}
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps?q=${office?.coordinates}&z=14&output=embed`}
                                className="absolute inset-0"
                            />
                            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                <span className="text-sm font-medium text-foreground">{office?.type}</span>
                            </div>
                        </div>

                        {/* Office Info */}
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-1">
                                        {office?.city}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {office?.country}
                                    </p>
                                </div>
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <Icon name="MapPin" size={20} className="text-primary" />
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {office?.description}
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-4">
                                <div className="flex items-center gap-3 text-sm">
                                    <Icon name="MapPin" size={16} className="text-muted-foreground flex-shrink-0" />
                                    <span className="text-muted-foreground">{office?.address}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Icon name="Phone" size={16} className="text-muted-foreground flex-shrink-0" />
                                    <a href={`tel:${office?.phone}`} className="text-primary hover:underline">
                                        {office?.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Icon name="Mail" size={16} className="text-muted-foreground flex-shrink-0" />
                                    <a href={`mailto:${office?.email}`} className="text-primary hover:underline">
                                        {office?.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Icon name="Users" size={16} className="text-muted-foreground flex-shrink-0" />
                                    <span className="text-muted-foreground">{office?.team}</span>
                                </div>
                            </div>

                            {/* Specialties */}
                            <div>
                                <h4 className="text-sm font-medium text-foreground mb-2">Focus Areas:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {office?.specialties?.map((specialty, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                                        >
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                    Contact Us
                </h3>
                <p className="text-muted-foreground mb-6">
                    Have questions about our locations or would you like to visit us? We look forward to hearing from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="tel:+4989123456789"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        <Icon name="Phone" size={18} />
                        Call
                    </a>
                    <a
                        href="mailto:info@techdeutsch.de"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                    >
                        <Icon name="Mail" size={18} />
                        Send Email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OfficeLocationsSection;