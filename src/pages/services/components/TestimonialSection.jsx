import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Dr. Maria Schneider",
            position: "Director of Nursing",
            company: "University Hospital Munich",
            location: "Munich, Bavaria",
            image: "https://images.unsplash.com/photo-1701212959262-d4d78ae19325",
            imageAlt: "Professional headshot of middle-aged woman with short blonde hair in white medical coat smiling at camera",
            rating: 5,
            text: `Working with MEDeutsch MENA was exceptionally professional. We received three highly qualified nurses from Middle East within 6 weeks.\n\nParticularly impressive was the language proficiency - all candidates had B2 certificates and could be integrated into daily work immediately.`,
            metrics: {
                placementTime: "6 Weeks",
                satisfaction: "98%",
                retention: "24 Months"
            }
        },
        {
            id: 2,
            name: "Thomas Weber",
            position: "HR Director",
            company: "Dortmund Hospital",
            location: "Dortmund, NRW",
            image: "https://images.unsplash.com/photo-1538155421123-6a79813f5deb",
            imageAlt: "Professional headshot of middle-aged man with dark hair in navy business suit smiling confidently",
            rating: 5,
            text: `After months of unsuccessful searching, MEDeutsch MENA helped us fill our staffing gaps. The Iraqi professionals bring not only excellent medical knowledge but also a remarkable work ethic.\n\nThe follow-up support was exemplary - even after a year, they still provide us with advisory support.`,
            metrics: {
                placementTime: "4 Weeks",
                satisfaction: "96%",
                retention: "18 Months"
            }
        },
        {
            id: 3,
            name: "Sandra Hoffmann",
            position: "Managing Director",
            company: "Sonnenhof Care Home",
            location: "Stuttgart, Baden-Württemberg",
            image: "https://images.unsplash.com/photo-1677594333284-68463516a828",
            imageAlt: "Professional headshot of woman with brown hair in elegant black blazer smiling warmly in modern office setting",
            rating: 5,
            text: `As a smaller facility, we were skeptical about whether we could successfully integrate international professionals. MEDeutsch MENA helped us not only with placement but also with cultural integration.\n\nOur residents and team are thrilled with the warmth and competence of our new colleagues.`,
            metrics: {
                placementTime: "8 Weeks",
                satisfaction: "99%",
                retention: "12 Months"
            }
        }];


    const partnerLogos = [
        {
            name: "University Hospital Munich",
            logo: "https://images.unsplash.com/photo-1655722931748-0a56017d39ef",
            logoAlt: "Modern hospital building exterior with glass facade and medical cross symbol"
        },
        {
            name: "Dortmund Hospital",
            logo: "https://images.unsplash.com/photo-1485325267073-1b1bf0976638",
            logoAlt: "Large medical center complex with multiple buildings and emergency entrance"
        },
        {
            name: "Charité Berlin",
            logo: "https://images.unsplash.com/photo-1517727384071-c930a28ff05d",
            logoAlt: "Historic medical university building with classical architecture and modern medical equipment"
        },
        {
            name: "Asklepios Clinics",
            logo: "https://images.unsplash.com/photo-1616421263313-3e0560c018b7",
            logoAlt: "Modern healthcare facility with curved glass architecture and medical staff entrance"
        },
        {
            name: "Helios Clinics",
            logo: "https://images.unsplash.com/photo-1658131550268-8d86f719a041",
            logoAlt: "Contemporary hospital building with white facade and large windows showing medical departments"
        },
        {
            name: "Sana Clinics",
            logo: "https://images.unsplash.com/photo-1720608594472-bc29045eef28",
            logoAlt: "Multi-story medical center with modern design and ambulance bay visible at entrance"
        }];


    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    };

    const currentTestimonial = testimonials?.[activeTestimonial];

    return (
        <div className="space-y-12">
            {/* Main Testimonial */}
            <div className="bg-card border border-border rounded-xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">What Our Partners Say</h2>
                    <p className="text-muted-foreground">
                        Experiences of German healthcare facilities with our placement services
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                            aria-label="Previous testimonial">

                            <Icon name="ChevronLeft" size={20} color="var(--color-primary)" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                            aria-label="Next testimonial">

                            <Icon name="ChevronRight" size={20} color="var(--color-primary)" />
                        </button>

                        {/* Testimonial Content */}
                        <div className="bg-muted/20 rounded-lg p-8">
                            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                                {/* Avatar and Info */}
                                <div className="flex-shrink-0 text-center md:text-left">
                                    <div className="w-20 h-20 mx-auto md:mx-0 mb-4 rounded-full overflow-hidden border-2 border-primary/20">
                                        <Image
                                            src={currentTestimonial?.image}
                                            alt={currentTestimonial?.imageAlt}
                                            className="w-full h-full object-cover" />

                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-foreground">{currentTestimonial?.name}</h3>
                                        <p className="text-sm text-muted-foreground">{currentTestimonial?.position}</p>
                                        <p className="text-sm font-medium text-primary">{currentTestimonial?.company}</p>
                                        <p className="text-xs text-muted-foreground">{currentTestimonial?.location}</p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex justify-center md:justify-start space-x-1 mt-3">
                                        {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
                                            <Icon key={i} name="Star" size={16} color="var(--color-warning)" />
                                        )}
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <div className="flex-1">
                                    <div className="mb-6">
                                        <Icon name="Quote" size={32} color="var(--color-primary)" className="mb-4 opacity-50" />
                                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {currentTestimonial?.text}
                                        </p>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="text-center p-3 bg-background/50 rounded-lg">
                                            <div className="text-lg font-bold text-primary">{currentTestimonial?.metrics?.placementTime}</div>
                                            <div className="text-xs text-muted-foreground">Placement Time</div>
                                        </div>
                                        <div className="text-center p-3 bg-background/50 rounded-lg">
                                            <div className="text-lg font-bold text-success">{currentTestimonial?.metrics?.satisfaction}</div>
                                            <div className="text-xs text-muted-foreground">Satisfaction</div>
                                        </div>
                                        <div className="text-center p-3 bg-background/50 rounded-lg">
                                            <div className="text-lg font-bold text-secondary">{currentTestimonial?.metrics?.retention}</div>
                                            <div className="text-xs text-muted-foreground">Retention Period</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center space-x-2 mt-6">
                            {testimonials?.map((_, index) =>
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === activeTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'}`
                                    }
                                    aria-label={`Show testimonial ${index + 1}`} />

                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Partner Logos */}
            <div className="bg-card border border-border rounded-xl p-8">
                <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Trusted by Leading Institutions</h3>
                    <p className="text-muted-foreground">
                        Over 150+ German healthcare facilities trust our services
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {partnerLogos?.map((partner, index) =>
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors duration-200 group">

                            <div className="w-full h-16 overflow-hidden rounded">
                                <Image
                                    src={partner?.logo}
                                    alt={partner?.logoAlt}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />

                            </div>
                        </div>
                    )}
                </div>

                <div className="text-center mt-8">
                    <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Shield" size={16} color="var(--color-success)" />
                        <span>All partners are certified German healthcare facilities</span>
                    </div>
                </div>
            </div>
        </div>);

};

export default TestimonialSection;