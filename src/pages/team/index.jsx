import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TeamMemberCard from './components/TeamMemberCard';
import CompanyInfoSection from './components/CompanyInfoSection';
import OfficeLocationsSection from './components/OfficeLocationsSection';
import ContactTeamModal from './components/ContactTeamModal';

const TeamPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const teamMembers = [
        {
            id: 1,
            name: "Dr. Sarah Weber",
            position: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1734456611474-13245d164868",
            imageAlt: "Professional headshot of Dr. Sarah Weber, blonde woman in navy business suit smiling confidently",
            shortBio: "15 years of experience in German healthcare with specialization in international recruitment and compliance.",
            experience: `Dr. Weber previously led the HR department at Munich University Hospital and developed innovative recruitment strategies for healthcare shortages. She holds a doctorate in Healthcare Management from LMU Munich and has extensive expertise in EU labor law and visa procedures.\n\nUnder her leadership, MEDeutsch MENA has realized over 500 successful placements and built partnerships with 85+ German clinics.`,
            expertise: ["Strategic Leadership", "Compliance Management", "Clinic Partnerships", "EU Labor Law", "Quality Assurance"],
            certifications: [
                "Doctorate in Healthcare Management (LMU Munich)",
                "Certified International Recruiter (CIR)",
                "ISO 9001 Lead Auditor",
                "GDPR Data Protection Officer"
            ],
            languages: ["German (Native)", "English (C2)", "Arabic (B1)"]
        },
        {
            id: 2,
            name: "Ahmad Al-Rashid",
            position: "Head of Candidate Recruitment",
            image: "https://images.unsplash.com/photo-1711602324914-9f78d3743be7",
            imageAlt: "Professional portrait of Ahmad Al-Rashid, Middle Eastern man with dark hair in charcoal suit and blue tie",
            shortBio: "Medical background with 12 years of experience in healthcare professional recruitment in the Middle East.",
            experience: `Ahmad worked as a senior physician in Baghdad before dedicating himself to personnel recruitment. He knows the Iraqi healthcare landscape firsthand and understands the challenges of transitioning to the German system.\n\nHis medical background enables precise evaluation of candidate qualifications and professional suitability. Ahmad has personally qualified over 300 healthcare professionals for German positions.`,
            expertise: ["Medical Assessment", "Candidate Screening", "Cultural Integration", "Professional Competency Review", "Mentoring"],
            certifications: [
                "Specialist in Internal Medicine (Iraq)",
                "German Recognition Procedure",
                "Certified Talent Acquisition Professional",
                "Intercultural Communication (Goethe Institute)"
            ],
            languages: ["Arabic (Native)", "German (C1)", "English (B2)", "Kurdish (B2)"]
        },
        {
            id: 3,
            name: "Lisa Hoffmann",
            position: "Head of Language Programs",
            image: "https://images.unsplash.com/photo-1725271765764-669af9988700",
            imageAlt: "Professional photo of Lisa Hoffmann, young woman with brown hair in white blouse smiling warmly",
            shortBio: "Linguist with focus on German as a foreign language and medical terminology for healthcare professions.",
            experience: `Lisa developed MEDeutsch MENA's innovative language curriculum, specifically tailored for medical professionals. She combines classical language pedagogy with VR technology and simulations of real clinic situations.\n\nHer programs achieve a 95% success rate for B2 certifications and reduce preparation time by an average of 30%. Lisa is a certified BAMF course instructor and examiner for medical language.`,
            expertise: ["Language Pedagogy", "Medical Terminology", "E-Learning Development", "Exam Preparation", "VR Training"],
            certifications: [
                "M.A. German as a Foreign Language (Heidelberg University)",
                "BAMF Approval as Course Instructor",
                "telc Examiner License Medicine",
                "Certified Learning Experience Designer"
            ],
            languages: ["German (Native)", "English (C2)", "French (B2)", "Spanish (B1)"]
        },
        {
            id: 4,
            name: "Michael Schneider",
            position: "Head of Compliance & Legal",
            image: "https://images.unsplash.com/photo-1735181094336-7fa757df9622",
            imageAlt: "Professional headshot of Michael Schneider, middle-aged man with graying hair in dark business suit",
            shortBio: "Attorney specializing in labor law, visa procedures and international recruitment.",
            experience: `Michael was previously a partner at a renowned Munich law firm focusing on labor and immigration law. He handles complex visa procedures and ensures that all placements comply with German and EU legal standards.\n\nHis expertise in recognition procedures and work permits has enabled MEDeutsch MENA to achieve a 99.2% success rate in visa applications. Michael also represents the company before authorities and chambers.`,
            expertise: ["Labor Law", "Visa Procedures", "Recognition Law", "Compliance", "Government Communication"],
            certifications: [
                "Attorney (Munich Bar)",
                "Specialist in Labor Law",
                "Certified Compliance Officer",
                "Immigration Law Specialist (DAV)"
            ],
            languages: ["German (Native)", "English (C1)", "French (B1)"]
        },
        {
            id: 5,
            name: "Fatima Al-Zahra",
            position: "Head of Candidate Support",
            image: "https://images.unsplash.com/photo-1507532459814-b32f63cf4497",
            imageAlt: "Professional portrait of Fatima Al-Zahra, woman with dark hair wearing professional attire and warm smile",
            shortBio: "Psychologist and cultural expert for holistic support of candidates throughout the entire placement process.",
            experience: `Fatima accompanies candidates from initial application to successful integration in German clinics. As a psychologist, she understands the emotional challenges of migration and develops individual support programs.\n\nHer cultural competence and empathy have led to a 96% satisfaction rate among supported candidates. Fatima also coordinates the mentoring program with already placed professionals.`,
            expertise: ["Psychological Support", "Cultural Integration", "Mentoring Programs", "Crisis Intervention", "Family Counseling"],
            certifications: [
                "M.Sc. Psychology (University of Baghdad)",
                "German Recognition (Licensed)",
                "Systemic Counselor (DGSF)",
                "Intercultural Trainer (IKT)"
            ],
            languages: ["Arabic (Native)", "German (C1)", "English (B2)", "Persian (A2)"]
        },
        {
            id: 6,
            name: "Thomas Müller",
            position: "Head of Clinic Partnerships",
            image: "https://images.unsplash.com/photo-1602872246746-7578684cfc96",
            imageAlt: "Professional headshot of Thomas Müller, mature man with salt-and-pepper hair in navy suit with confident expression",
            shortBio: "Former clinic CEO with 20 years of experience in German healthcare and personnel management.",
            experience: `Thomas led a 400-bed hospital in Bavaria for 15 years and knows the challenges of healthcare shortages firsthand. His contacts with clinic decision-makers and his understanding of operational needs make him the ideal liaison.\n\nUnder his leadership, MEDeutsch MENA has built partnerships with leading German clinics and developed customized solutions for various specialties.`,
            expertise: ["Clinic Management", "Personnel Planning", "Contract Negotiation", "Quality Management", "Strategic Partnerships"],
            certifications: [
                "MBA Healthcare Management (ESCP Berlin)",
                "Certified Healthcare Executive (CHE)",
                "Lean Six Sigma Black Belt",
                "DIN EN ISO 9001 Auditor"
            ],
            languages: ["German (Native)", "English (C2)", "French (B1)"]
        }
    ];

    const handleContactMember = (member) => {
        setSelectedMember(member);
        setIsContactModalOpen(true);
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
        setSelectedMember(null);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Icon name="Users" size={16} />
                            Our Expert Team
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            The Team Behind Your
                            <span className="text-primary block">Recruitment Success</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Meet the experts who passionately and skillfully connect German clinics with qualified Iraqi healthcare professionals.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                            <div className="text-3xl font-bold text-primary mb-2">35+</div>
                            <div className="text-sm text-muted-foreground">Team Members</div>
                        </div>
                        <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                            <div className="text-3xl font-bold text-primary mb-2">50+</div>
                            <div className="text-sm text-muted-foreground">Years Combined Experience</div>
                        </div>
                        <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                            <div className="text-3xl font-bold text-primary mb-2">12</div>
                            <div className="text-sm text-muted-foreground">Languages Spoken</div>
                        </div>
                        <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                            <div className="text-3xl font-bold text-primary mb-2">3</div>
                            <div className="text-sm text-muted-foreground">Country Presence</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Leadership Team */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Leadership Team
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our leaders bring decades of experience in healthcare, law and international recruitment.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {teamMembers?.map((member) =>
                            <TeamMemberCard
                                key={member?.id}
                                member={member}
                                onContactMember={handleContactMember}
                            />
                        )}
                    </div>
                </div>
            </section>
            {/* Company Information */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-6">
                    <CompanyInfoSection />
                </div>
            </section>
            {/* Office Locations */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <OfficeLocationsSection />
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Ready to Partner?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Our team is ready to solve your staffing challenges and find qualified professionals for your facility.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/partner-access">
                            <Button
                                variant="default"
                                size="lg"
                                iconName="ArrowRight"
                                iconPosition="right"
                                className="w-full sm:w-auto"
                            >
                                Become a Partner
                            </Button>
                        </Link>
                        <Link to="/process">
                            <Button
                                variant="outline"
                                size="lg"
                                iconName="GitBranch"
                                iconPosition="left"
                                className="w-full sm:w-auto"
                            >
                                Our Process
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Contact Team Modal */}
            <ContactTeamModal
                isOpen={isContactModalOpen}
                onClose={closeContactModal}
                selectedMember={selectedMember}
            />
        </div>
    );
};

export default TeamPage;