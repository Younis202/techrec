import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
    const testimonials = [
        {
            id: 1,
            name: "Dr. Michael Weber",
            position: "Head of Human Resources",
            company: "University Hospital Munich",
            avatar: "https://images.unsplash.com/photo-1729162128021-f37dca3ff30d",
            avatarAlt: "Professional headshot of middle-aged German doctor with gray hair in white coat",
            rating: 5,
            text: `The collaboration with MEDeutsch MENA was exceptionally professional. Within 6 weeks, we were able to hire 8 qualified nurses.\n\nThe candidates were not only technically excellent, but also very well prepared culturally.`
        },
        {
            id: 2,
            name: "Sandra Hoffmann",
            position: "HR Director",
            company: "Charité Berlin",
            avatar: "https://images.unsplash.com/photo-1688597628916-d3230d8ac41e",
            avatarAlt: "Professional portrait of blonde German businesswoman in navy blazer",
            rating: 5,
            text: `Finally a partner who understands what German clinics need. The Iraqi professionals are highly motivated and bring fresh perspectives.\n\nOur patient satisfaction has increased significantly since the collaboration.`
        },
        {
            id: 3,
            name: "Prof. Dr. Klaus Müller",
            position: "Chief Physician Internal Medicine",
            company: "Stuttgart Hospital",
            avatar: "https://images.unsplash.com/photo-1666887360541-e9a3cec344be",
            avatarAlt: "Senior German doctor with glasses and gray beard in medical scrubs",
            rating: 5,
            text: `The quality of the candidates exceeds our expectations. Particularly impressive is the high level of medical training.\n\nWe have already successfully integrated 12 professionals.`
        }];


    const statistics = [
        {
            value: "150+",
            label: "Successful Placements",
            description: "In the last 18 months",
            icon: "TrendingUp"
        },
        {
            value: "95%",
            label: "Success Rate",
            description: "Long-term employment",
            icon: "Target"
        },
        {
            value: "4.8/5",
            label: "Partner Rating",
            description: "Average satisfaction",
            icon: "Star"
        },
        {
            value: "28",
            label: "Active Partners",
            description: "German healthcare institutions",
            icon: "Users"
        }];


    const certifications = [
        {
            name: "ISO 9001:2015",
            description: "Quality Management",
            icon: "Award"
        },
        {
            name: "EU-GDPR Compliant",
            description: "General Data Protection Regulation",
            icon: "Shield"
        },
        {
            name: "BQG Certified",
            description: "Federal Association for Quality in Healthcare",
            icon: "CheckCircle"
        }];


    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) =>
            <Icon
                key={i}
                name="Star"
                size={16}
                className={i < rating ? "text-warning fill-current" : "text-muted-foreground"} />

        );
    };

    return (
        <div className="space-y-8">
            {/* Statistics */}
            <div className="bg-card rounded-xl border border-border p-8">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                        Trust Through Numbers
                    </h2>
                    <p className="text-muted-foreground">
                        Our track record speaks for itself
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {statistics?.map((stat, index) =>
                        <div key={index} className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Icon name={stat?.icon} size={24} className="text-primary" />
                            </div>
                            <div className="text-2xl font-bold text-foreground mb-1">
                                {stat?.value}
                            </div>
                            <div className="text-sm font-medium text-foreground mb-1">
                                {stat?.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                {stat?.description}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Testimonials */}
            <div className="bg-card rounded-xl border border-border p-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                        What Our Partners Say
                    </h2>
                    <p className="text-muted-foreground">
                        Experiences from leading German healthcare institutions
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {testimonials?.map((testimonial) =>
                        <div
                            key={testimonial?.id}
                            className="p-6 rounded-lg border border-border hover:border-primary/30 transition-colors">

                            <div className="flex items-center space-x-4 mb-4">
                                <Image
                                    src={testimonial?.avatar}
                                    alt={testimonial?.avatarAlt}
                                    className="w-12 h-12 rounded-full object-cover" />

                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-foreground">
                                        {testimonial?.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {testimonial?.position}
                                    </p>
                                    <p className="text-xs text-primary font-medium">
                                        {testimonial?.company}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-1 mb-3">
                                {renderStars(testimonial?.rating)}
                            </div>

                            <blockquote className="text-sm text-muted-foreground leading-relaxed">
                                "{testimonial?.text}"
                            </blockquote>
                        </div>
                    )}
                </div>
            </div>
            {/* Certifications */}
            <div className="bg-card rounded-xl border border-border p-8">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                        Certifications & Compliance
                    </h2>
                    <p className="text-muted-foreground">
                        Highest standards for your security
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {certifications?.map((cert, index) =>
                        <div
                            key={index}
                            className="flex items-center space-x-4 p-4 rounded-lg border border-border">

                            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                                <Icon name={cert?.icon} size={20} className="text-success" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-foreground">
                                    {cert?.name}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {cert?.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-6 p-4 bg-success/5 rounded-lg border border-success/20">
                    <div className="flex items-center space-x-3">
                        <Icon name="Shield" size={20} className="text-success flex-shrink-0" />
                        <div>
                            <p className="text-sm text-foreground font-medium">
                                100% Compliance Guarantee
                            </p>
                            <p className="text-xs text-muted-foreground">
                                All candidates undergo rigorous quality and compliance checks
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

};

export default TrustSignals;