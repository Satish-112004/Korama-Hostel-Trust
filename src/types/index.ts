export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    postalCodePlaceholder: string;
  };
  establishedYear: number;
  residentCount: string;
  studentCommunities: string[];
  mottos: {
    primary: string;
    alternative: string;
  };
  contact: {
    addressText: string;
    emailNote: string;
    phoneNote: string;
    googleMapsEmbedUrl: string;
  };
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  category: "Living" | "Wellness" | "Academics" | "Eco-Friendly";
  iconName: string;
  description: string;
  features: string[];
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: "General" | "Admission & Eligibility" | "Facilities" | "Student Life" | "Contact & Visits";
  question: string;
  answer: string;
  verified: boolean;
  requiresManagementContact?: boolean;
}

export interface TraditionalOccupation {
  id: string;
  title: string;
  description: string;
  iconName: string;
  materials: string;
}

export interface ModernProfession {
  category: string;
  iconName: string;
}

export interface CommunityValue {
  title: string;
  description: string;
  iconName: string;
}

export interface RegionalCard {
  state: string;
  notes: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: "unread" | "reviewed";
}
