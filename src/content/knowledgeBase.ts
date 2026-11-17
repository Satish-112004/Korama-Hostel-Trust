export interface KnowledgeFact {
  topic: string;
  keywords: string[];
  verifiedAnswer: string;
  isUnverifiedOrMissing?: boolean;
  unverifiedClarification?: string;
}

export const VERIFIED_KNOWLEDGE_BASE: KnowledgeFact[] = [
  {
    topic: "Organization Name",
    keywords: ["name", "organization", "trust", "koram", "korama"],
    verifiedAnswer: "The official initiative is known as Korama Hostel Trust (also commonly referred to as Koram Hostel).",
  },
  {
    topic: "Hostel Location and Address",
    keywords: ["address", "location", "where", "landmark", "situated", "directions", "bengaluru", "bangalore"],
    verifiedAnswer: "Korama Hostel is located at: No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru, Karnataka, India.",
  },
  {
    topic: "Establishment Year",
    keywords: ["established", "founded", "history", "year", "when", "started"],
    verifiedAnswer: "The hostel project traces its establishment back to 1985 (as recorded in community project archives), serving generations of higher-education students.",
  },
  {
    topic: "Eligible Communities",
    keywords: ["eligible", "who can join", "community", "eligibility", "korama", "koracha", "korava"],
    verifiedAnswer: "The hostel primarily accommodates students belonging to the Korama, Koracha, and Korava communities pursuing higher education and university degrees in Bengaluru.",
  },
  {
    topic: "Current Resident Count",
    keywords: ["residents", "capacity", "how many students", "resident count", "staying"],
    verifiedAnswer: "At present, Korama Hostel provides a home for approximately 15 to 20 students pursuing various professional and academic degrees.",
  },
  {
    topic: "Hostel Purpose",
    keywords: ["purpose", "mission", "vision", "goal", "why established"],
    verifiedAnswer: "The hostel was established to support deserving students who travel to Bengaluru from different parts of Karnataka for higher education, eliminating accommodation barriers and fostering academic success.",
  },
  {
    topic: "Verified Facilities",
    keywords: ["facilities", "amenities", "what is available", "rooms", "beds", "living"],
    verifiedAnswer: "Verified facilities include: clean and spacious accommodation with individual study desks and beds, home-style nutritious food prepared daily in the mess, 24/7 RO-purified drinking water, on-premise washing machines for laundry, regular cleanliness and sanitation, an eco-friendly solar water-heating system, and a peaceful, disciplined academic environment.",
  },
  {
    topic: "Internet / Wi-Fi Facility",
    keywords: ["wifi", "wi-fi", "internet", "broadband"],
    verifiedAnswer: "Wi-Fi and internet connectivity details are currently pending official verification from hostel management. Please enquire directly with management on arrival.",
    isUnverifiedOrMissing: true,
  },
  {
    topic: "Hostel Fees and Cost",
    keywords: ["fee", "fees", "cost", "price", "charges", "payment", "scholarship", "rent"],
    verifiedAnswer: "Official fee structures are heavily subsidized for community students, but the exact current figures must be confirmed directly with Trust management. Please contact hostel management via our Contact Form or visit in person.",
    isUnverifiedOrMissing: true,
    unverifiedClarification: "We do not guess or state unverified fee amounts.",
  },
  {
    topic: "Hostel Timings and Curfew",
    keywords: ["timing", "timings", "gate", "curfew", "in-time", "out-time", "closing"],
    verifiedAnswer: "The hostel operates under student-safety hours with standard evening return times. For the exact gate closing time and daily schedule, please speak directly with the warden or management.",
    isUnverifiedOrMissing: true,
  },
  {
    topic: "Food and Mess Menu",
    keywords: ["food", "mess", "menu", "meals", "breakfast", "dinner", "lunch"],
    verifiedAnswer: "Home-style nutritious vegetarian meals are freshly prepared daily in the hostel mess with care and affection. The specific daily rotating menu is maintained on-premise by the mess coordinator.",
  },
  {
    topic: "Drinking Water",
    keywords: ["water", "drinking water", "ro", "filter"],
    verifiedAnswer: "Safe, pure RO-filtered drinking water is available 24/7 inside the hostel premises.",
  },
  {
    topic: "Laundry and Washing",
    keywords: ["laundry", "washing machine", "clothes", "wash"],
    verifiedAnswer: "Modern washing machines are provided on-site for student laundry convenience along with dedicated clothes drying areas.",
  },
  {
    topic: "Courses and Degrees Studied",
    keywords: ["courses", "degrees", "engineering", "optometry", "mca", "nursing", "pharmacy", "study"],
    verifiedAnswer: "Residents are enrolled in programs including Engineering (B.E./B.Tech.), Doctor of Optometry, Master of Computer Applications (MCA), B.Sc. Nursing, Pharm.D., Fashion Designing, and other undergraduate/postgraduate degrees.",
  },
  {
    topic: "Warden / Management Contact",
    keywords: ["warden", "manager", "staff", "incharge", "contact number", "phone", "email"],
    verifiedAnswer: "Official direct phone numbers and warden contacts are in the process of official Trust verification. To submit an enquiry or request a callback, please use the Contact Form on this website or visit the hostel at No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru.",
    isUnverifiedOrMissing: true,
  },
  {
    topic: "Parent and Visitor Visits",
    keywords: ["parent", "parents", "visitor", "visiting hours", "guest"],
    verifiedAnswer: "Parents and guardians are welcome to visit during daytime hours. For overnight accommodation or specific visiting queries, prior clearance from hostel management is required.",
  },
  {
    topic: "Traditional Occupations of Community",
    keywords: ["occupation", "craft", "weaving", "basket", "mat", "rope", "traditional"],
    verifiedAnswer: "Ancestral community skills include: Basket Weaving, Mat Weaving, Rope Making, Handicrafts, Agricultural Support, and Livestock Care, which provided essential products and services across rural economies.",
  },
];
