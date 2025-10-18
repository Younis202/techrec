import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import CandidateFilters from './components/CandidateFilters';
import CandidateGrid from './components/CandidateGrid';
import CandidateModal from './components/CandidateModal';
import Icon from '../../components/AppIcon';

const CandidatesPage = () => {
    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialization, setSelectedSpecialization] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');
    const [selectedLanguageLevel, setSelectedLanguageLevel] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedAvailability, setSelectedAvailability] = useState('');
    const [sortBy, setSortBy] = useState('name');

    // UI states
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mock candidates data (removed photo URLs)
    const mockCandidates = [
        {
            id: 1,
            name: "Fatima Al-Rashid",
            specialization: "Intensive Care",
            location: "Berlin",
            experience: 8,
            germanLevel: "B2",
            availability: "Immediately Available",
            skills: ["Ventilation Therapy", "Cardiac Monitoring", "Emergency Medicine", "Patient Care", "Medication Administration"],
            isVerified: true,
            email: "fatima.rashid@email.com",
            phone: "+49 30 12345678",
            summary: `Experienced intensive care nurse with 8 years of professional experience in leading hospitals in Baghdad and Erbil. Specialized in ventilation therapy and cardiac monitoring with proven expertise in caring for critically ill patients. Fluent in Arabic and Kurdish, with solid German language skills at B2 level.`,
            workExperience: [
                {
                    position: "Lead Intensive Care Nurse",
                    hospital: "Al-Rashid Hospital, Baghdad",
                    duration: "2019 - 2024",
                    description: "Leading a team of 12 nurses in a 24-bed intensive care unit. Responsible for the care of patients with complex medical needs."
                },
                {
                    position: "Intensive Care Nurse",
                    hospital: "Erbil Medical Center",
                    duration: "2016 - 2019",
                    description: "Direct patient care in the intensive care unit, monitoring vital functions and assisting with medical procedures."
                }
            ],
            certifications: [
                { name: "Intensive Care Certificate", issuer: "Iraqi Nursing Council", year: "2020" },
                { name: "BLS/ALS Certification", issuer: "American Heart Association", year: "2023" },
                { name: "Ventilation Therapy", issuer: "Baghdad Medical University", year: "2021" }
            ],
            languages: [
                { language: "Arabic", level: "C2" },
                { language: "Kurdish", level: "C2" },
                { language: "German", level: "B2" },
                { language: "English", level: "B1" }
            ]
        },
        {
            id: 2,
            name: "Ahmed Hassan",
            specialization: "Surgery",
            location: "Munich",
            experience: 12,
            germanLevel: "C1",
            availability: "In 2 Weeks",
            skills: ["Surgical Assistance", "Wound Care", "Sterilization", "Anesthesia Care", "Patient Preparation"],
            isVerified: true,
            email: "ahmed.hassan@email.com",
            phone: "+49 89 87654321",
            summary: `Highly qualified surgical nurse with 12 years of experience in various surgical specialties. Expertise in surgical assistance and postoperative patient care. Excellent German language skills at C1 level and extensive experience working with international medical teams.`,
            workExperience: [
                {
                    position: "Senior Operating Room Nurse",
                    hospital: "Ibn Sina Hospital, Baghdad",
                    duration: "2018 - 2024",
                    description: "Assistance in complex surgical procedures, leading operating room preparation and mentoring junior staff."
                },
                {
                    position: "Operating Room Nurse",
                    hospital: "Al-Kindi Hospital, Baghdad",
                    duration: "2012 - 2018",
                    description: "Direct support in surgical procedures, instrument preparation and postoperative patient care."
                }
            ],
            certifications: [
                { name: "Surgical Nursing", issuer: "Iraqi Nursing Council", year: "2022" },
                { name: "Sterilization & Hygiene", issuer: "WHO Standards", year: "2023" },
                { name: "Anesthesia Nursing", issuer: "Baghdad Medical University", year: "2020" }
            ],
            languages: [
                { language: "Arabic", level: "C2" },
                { language: "German", level: "C1" },
                { language: "English", level: "B2" }
            ]
        },
        {
            id: 3,
            name: "Zahra Mahmoud",
            specialization: "Pediatrics",
            location: "Hamburg",
            experience: 6,
            germanLevel: "B1",
            availability: "In 1 Month",
            skills: ["Child Care", "Vaccinations", "Developmental Assessment", "Parent Counseling", "Pediatric Emergency"],
            isVerified: true,
            email: "zahra.mahmoud@email.com",
            phone: "+49 40 11223344",
            summary: `Dedicated pediatric nurse with 6 years of experience in pediatric care. Specialized in caring for infants and toddlers with special medical needs. Empathetic approach to patient care and excellent communication with families.`,
            workExperience: [
                {
                    position: "Pediatric Nurse",
                    hospital: "Baghdad Children's Hospital",
                    duration: "2020 - 2024",
                    description: "Comprehensive care for children aged 0-16 years, administering vaccinations and assisting with pediatric procedures."
                },
                {
                    position: "Pediatric Care Nurse",
                    hospital: "Al-Alwiya Children's Clinic",
                    duration: "2018 - 2020",
                    description: "Specialized care for newborns and infants, parent counseling and developmental monitoring."
                }
            ],
            certifications: [
                { name: "Pediatric Nursing", issuer: "Iraqi Nursing Council", year: "2021" },
                { name: "Vaccination Management", issuer: "WHO", year: "2022" },
                { name: "Pediatric Emergency", issuer: "Iraqi Pediatric Society", year: "2023" }
            ],
            languages: [
                { language: "Arabic", level: "C2" },
                { language: "German", level: "B1" },
                { language: "English", level: "B1" }
            ]
        },
        {
            id: 4,
            name: "Omar Al-Baghdadi",
            specialization: "Internal Medicine",
            location: "Cologne",
            experience: 10,
            germanLevel: "B2",
            availability: "Immediately Available",
            skills: ["Diabetes Care", "Cardiology", "ECG Interpretation", "Medication Management", "Patient Education"],
            isVerified: true,
            email: "omar.baghdadi@email.com",
            phone: "+49 221 55667788",
            summary: `Experienced internal medicine nurse with 10 years of professional experience in caring for patients with chronic diseases. Special expertise in diabetes care and cardiac nursing. Strong analytical skills and experience in patient education.`,
            workExperience: [
                {
                    position: "Internal Medicine Ward Nurse",
                    hospital: "Al-Yarmouk Hospital, Baghdad",
                    duration: "2019 - 2024",
                    description: "Care for patients with complex internal medical conditions, ECG monitoring and medication management."
                },
                {
                    position: "Cardiology Nurse",
                    hospital: "Baghdad Heart Center",
                    duration: "2014 - 2019",
                    description: "Specialized care for cardiac patients, monitoring heart rhythm and assisting with cardiological procedures."
                }
            ],
            certifications: [
                { name: "Internal Medicine Nursing", issuer: "Iraqi Nursing Council", year: "2022" },
                { name: "Diabetes Counseling", issuer: "Iraqi Diabetes Society", year: "2021" },
                { name: "ECG Interpretation", issuer: "Cardiology Society", year: "2020" }
            ],
            languages: [
                { language: "Arabic", level: "C2" },
                { language: "German", level: "B2" },
                { language: "English", level: "B2" }
            ]
        },
        {
            id: 5,
            name: "Maryam Al-Kuwaiti",
            specialization: "Geriatrics",
            location: "Frankfurt",
            experience: 7,
            germanLevel: "B1",
            availability: "In 3 Months",
            skills: ["Elderly Care", "Dementia Care", "Mobilization", "Medication Administration", "Palliative Care"],
            isVerified: false,
            email: "maryam.kuwaiti@email.com",
            phone: "+49 69 99887766",
            summary: `Compassionate geriatric nurse with 7 years of experience in caring for elderly patients. Specialized in dementia care and palliative care. Patient and empathetic approach with focus on patient dignity and quality of life.`,
            workExperience: [
                {
                    position: "Geriatric Nurse",
                    hospital: "Al-Noor Senior Center, Baghdad",
                    duration: "2020 - 2024",
                    description: "Comprehensive care for elderly patients, dementia care and support with activities of daily living."
                },
                {
                    position: "Elderly Care Nurse",
                    hospital: "Al-Rahma Nursing Home",
                    duration: "2017 - 2020",
                    description: "Direct patient care, medication administration and coordination with family members."
                }
            ],
            certifications: [
                { name: "Geriatric Nursing", issuer: "Iraqi Nursing Council", year: "2021" },
                { name: "Dementia Care", issuer: "Iraqi Alzheimer Society", year: "2022" },
                { name: "Palliative Care", issuer: "Palliative Medicine Center", year: "2023" }
            ],
            languages: [
                { language: "Arabic", level: "C2" },
                { language: "German", level: "B1" },
                { language: "English", level: "A2" }
            ]
        },
        {
            id: 6,
            name: "Hassan Al-Mosuli",
            specialization: "Emergency Room",
            location: "Stuttgart",
            experience: 9,
            germanLevel: "C1",
            availability: "Immediately Available",
            skills: ["Emergency Medicine", "Triage", "Resuscitation", "Trauma Care", "Rapid Decision Making"],
            isVerified: true,
            email: "hassan.mosuli@email.com",
            phone: "+49 711 44556677",
            summary: `Highly qualified emergency room nurse with 9 years of experience in acute care. Expertise in triage and trauma care with the ability to make quick and precise decisions under pressure. Excellent German language skills and experience working with emergency services.`,
            workExperience: [
                {
                    position: "Lead Emergency Room Nurse",
                    hospital: "Mosul Emergency Center",
                    duration: "2020 - 2024",
                    description: "Leading emergency room nursing, triage coordination and training junior staff in emergency protocols."
                },
                {
                    position: "Emergency Room Nurse",
                    hospital: "Al-Salam Hospital, Mosul",
                    duration: "2015 - 2020",
                    description: "Direct patient care in the emergency room, resuscitation measures and trauma treatment."
                }
            ],
            certifications: [
                { name: "Emergency Nursing", issuer: "Iraqi Nursing Council", year: "2023" },
                { name: "ACLS Certification", issuer: "American Heart Association", year: "2024" },
                { name: "Trauma Nursing", issuer: "Emergency Healthcare Professionals Association", year: "2022" }
            ],
            languages: [
                { language: "Arabic", level: "C2" },
                { language: "German", level: "C1" },
                { language: "English", level: "B2" }
            ]
        }
    ];

    // Debounced search effect
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm, selectedSpecialization, selectedExperience, selectedLanguageLevel, selectedLocation, selectedAvailability]);

    // Filter and sort candidates
    const filteredAndSortedCandidates = useMemo(() => {
        let filtered = mockCandidates?.filter((candidate) => {
            const matchesSearch = !searchTerm ||
                candidate?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                candidate?.specialization?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                candidate?.skills?.some((skill) => skill?.toLowerCase()?.includes(searchTerm?.toLowerCase()));

            const matchesSpecialization = !selectedSpecialization || candidate?.specialization === selectedSpecialization;

            const matchesExperience = !selectedExperience || (() => {
                const exp = candidate?.experience;
                switch (selectedExperience) {
                    case '1-2': return exp >= 1 && exp <= 2;
                    case '3-5': return exp >= 3 && exp <= 5;
                    case '6-10': return exp >= 6 && exp <= 10;
                    case '10+': return exp > 10;
                    default: return true;
                }
            })();

            const matchesLanguage = !selectedLanguageLevel || candidate?.germanLevel === selectedLanguageLevel;
            const matchesLocation = !selectedLocation || candidate?.location === selectedLocation;
            const matchesAvailability = !selectedAvailability || candidate?.availability === selectedAvailability;

            return matchesSearch && matchesSpecialization && matchesExperience &&
                matchesLanguage && matchesLocation && matchesAvailability;
        });

        // Sort candidates
        filtered?.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a?.name?.localeCompare(b?.name);
                case 'experience':
                    return b?.experience - a?.experience;
                case 'germanLevel':
                    const levelOrder = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
                    return (levelOrder?.[b?.germanLevel] || 0) - (levelOrder?.[a?.germanLevel] || 0);
                case 'availability':
                    const availabilityOrder = {
                        'Immediately Available': 1,
                        'In 2 Weeks': 2,
                        'In 1 Month': 3,
                        'In 3 Months': 4
                    };
                    return (availabilityOrder?.[a?.availability] || 5) - (availabilityOrder?.[b?.availability] || 5);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [searchTerm, selectedSpecialization, selectedExperience, selectedLanguageLevel, selectedLocation, selectedAvailability, sortBy]);

    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedSpecialization('');
        setSelectedExperience('');
        setSelectedLanguageLevel('');
        setSelectedLocation('');
        setSelectedAvailability('');
    };

    const handleViewProfile = (candidate) => {
        setSelectedCandidate(candidate);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCandidate(null);
    };

    const handleDownloadCV = (candidate) => {
        // Mock CV download
        const link = document.createElement('a');
        link.href = '#';
        link.download = `${candidate?.name?.replace(/\s+/g, '_')}_Resume.pdf`;
        link?.click();

        // Show success message (in a real app, this would be a toast notification)
        alert(`Resume for ${candidate?.name} is being downloaded...`);
    };

    return (
        <>
            <Helmet>
                <title>Qualified Candidates - MEDeutsch MENA Healthcare Staffing</title>
                <meta name="description" content="Discover qualified Iraqi healthcare professionals for German healthcare facilities. Browse profiles, download resumes and find the perfect candidates for your team." />
                <meta name="keywords" content="Healthcare Professionals, Candidates, Healthcare, Recruiting, Germany, Iraq, Intensive Care, Surgery, Pediatrics" />
                <meta property="og:title" content="Qualified Candidates - MEDeutsch MENA Healthcare Staffing" />
                <meta property="og:description" content="Discover qualified Iraqi healthcare professionals for German healthcare facilities." />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600">
                    <div className="max-w-7xl mx-auto px-6 py-16">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                    <Icon name="Users" size={24} className="text-blue-600" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white">
                                    Qualified Candidates
                                </h1>
                            </div>
                            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                                Discover highly qualified Iraqi healthcare professionals ready to
                                strengthen German healthcare facilities. Each candidate has been
                                carefully vetted and possesses proven professional competence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Filters */}
                    <CandidateFilters
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        selectedSpecialization={selectedSpecialization}
                        onSpecializationChange={setSelectedSpecialization}
                        selectedExperience={selectedExperience}
                        onExperienceChange={setSelectedExperience}
                        selectedLanguageLevel={selectedLanguageLevel}
                        onLanguageLevelChange={setSelectedLanguageLevel}
                        selectedLocation={selectedLocation}
                        onLocationChange={setSelectedLocation}
                        selectedAvailability={selectedAvailability}
                        onAvailabilityChange={setSelectedAvailability}
                        onClearFilters={handleClearFilters}
                        resultCount={filteredAndSortedCandidates?.length}
                        isLoading={isLoading}
                    />

                    {/* Candidates Grid */}
                    <CandidateGrid
                        candidates={filteredAndSortedCandidates}
                        isLoading={isLoading}
                        onViewProfile={handleViewProfile}
                        onDownloadCV={handleDownloadCV}
                        sortBy={sortBy}
                        onSortChange={setSortBy}
                    />
                </div>

                {/* Candidate Modal */}
                <CandidateModal
                    candidate={selectedCandidate}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onDownloadCV={handleDownloadCV}
                />
            </div>
        </>
    );
};

export default CandidatesPage;