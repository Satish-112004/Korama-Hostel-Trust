import { TraditionalOccupation, CommunityValue, RegionalCard } from "@/types";

export const communityNarrative = {
  hero: {
    title: "About Our Community",
    subtitle: "Celebrating Our Heritage, Culture, Unity, and Progress",
    description: "Honoring generations of craftsmanship, resilience, and wisdom while advancing through higher education, technology, and public service.",
  },
  welcomeText: `Koram Hostel is a home for students belonging to the Korama, Koracha, and Korava communities. Our hostel is more than just a place to stay—it is a family that supports education, unity, culture, and personal growth.

Our community has a rich cultural heritage, a long history of traditional skills, and a strong spirit of resilience. While preserving our traditions, today's generation is making remarkable progress in education, technology, business, government service, and many other professions.

We take pride in our identity, our culture, and our commitment to building a brighter future.`,
  whoAreWeFeatures: [
    {
      title: "Traditional Craftsmanship",
      desc: "Deep knowledge of organic materials, natural fibres, and sustainable handcrafted utility.",
      icon: "Hammer",
    },
    {
      title: "Hard Work & Resilience",
      desc: "An enduring legacy of perseverance that overcomes social and economic barriers.",
      icon: "Shield",
    },
    {
      title: "Adaptability",
      desc: "Harmonizing rich ancient folk roots with modern professional and technological advancements.",
      icon: "Compass",
    },
    {
      title: "Strong Family Values",
      desc: "Unwavering respect for elders, tight-knit family structures, and mutual community support.",
      icon: "Users",
    },
    {
      title: "Rich Folk Traditions",
      desc: "Expressive music, oral storytelling, dances, and vibrant cultural celebrations.",
      icon: "Music",
    },
    {
      title: "Cultural Diversity",
      desc: "Unique regional expressions spanning Karnataka, Andhra Pradesh, Telangana, and Tamil Nadu.",
      icon: "Globe",
    },
  ],
  regions: [
    {
      state: "Karnataka",
      notes: "Known primarily as Korama and Koracha in regional dialects and historical references.",
    },
    {
      state: "Andhra Pradesh",
      notes: "Related community lineages historically identified as Korava / Yerukala in regional studies.",
    },
    {
      state: "Telangana",
      notes: "Shared ancestral linguistic and artisanal roots with active regional welfare groups.",
    },
    {
      state: "Tamil Nadu",
      notes: "Traditional artisan communities with celebrated heritage in folk craft and oral culture.",
    },
  ] as RegionalCard[],
  historyPeriods: [
    {
      era: "Centuries of Heritage",
      title: "Ecological Wisdom & Artisanal Craft",
      description: "Ancestors held deep, intuitive knowledge of forests, native plants, animals, geography, and sustainable natural materials, providing vital utilitarian goods to local economies.",
    },
    {
      era: "Rural Economic Contribution",
      title: "Handcrafted Goods & Agricultural Integration",
      description: "Through basketry, mat weaving, rope production, and animal husbandry, community artisans formed indispensable backbones of village markets and trading hubs.",
    },
    {
      era: "Endurance & Resilience",
      title: "Overcoming Historical & Social Barriers",
      description: "Despite colonial misclassifications and historical marginalization, the community preserved its cultural dignity, self-reliance, and close-knit communal spirit.",
    },
    {
      era: "The Modern Era",
      title: "The Catalyst of Education",
      description: "Recognizing education as the ultimate equalizer, community elders established supportive hostels like Korama Hostel to propel youth into university degrees and nation-building careers.",
    },
  ],
  traditionalOccupations: [
    {
      id: "basket-weaving",
      title: "Basket Weaving",
      description: "Artisanal craftsmanship utilizing bamboo, wild reeds, and natural fibres to create durable baskets for agriculture, grain storage, and domestic utility.",
      iconName: "ShoppingBag",
      materials: "Bamboo, reeds, natural splits",
    },
    {
      id: "mat-weaving",
      title: "Mat Weaving",
      description: "Handcrafted mats woven with indigenous grasses and reeds, providing natural cooling, eco-friendly sleeping surfaces, and ritual mats.",
      iconName: "Layers",
      materials: "Korai grass, plant reed fibres",
    },
    {
      id: "rope-making",
      title: "Rope Making",
      description: "Durable ropes twisted and braided from agave, coir, and plant fibres for agricultural implements, cattle tethers, and structural tying.",
      iconName: "Link2",
      materials: "Agave fibre, hemp, coir",
    },
    {
      id: "handicrafts",
      title: "Handicrafts & Utilitarian Art",
      description: "Practical household products and tools handcrafted with geometric precision, reflecting generational ergonomics and creative ingenuity.",
      iconName: "Palette",
      materials: "Wood, bamboo, natural cordage",
    },
    {
      id: "agriculture-support",
      title: "Agriculture Support",
      description: "Integral labor and seasonal expertise assisting rural farming communities with harvesting, winnowing, and farm logistics.",
      iconName: "Wheat",
      materials: "Field tools, storage containers",
    },
    {
      id: "animal-care",
      title: "Animal Care & Husbandry",
      description: "Generational veterinary knowledge and responsible livestock management contributing to rural self-sustenance.",
      iconName: "HeartHandshake",
      materials: "Livestock care, traditional remedies",
    },
  ] as TraditionalOccupation[],
  cultureThemes: [
    { title: "Respect for Elders", desc: "Honoring the wisdom, guidance, and oral histories passed down by senior community members." },
    { title: "Unity Among Families", desc: "Standing together through hardships, pooling resources, and celebrating collective milestones." },
    { title: "Warm Hospitality", desc: "Welcoming guests and relatives with heartfelt care, generosity, and open homes." },
    { title: "Dignity of Labor", desc: "Taking profound pride in honest toil, craftsmanship, and self-sufficient livelihood." },
    { title: "Simplicity & Honesty", desc: "A grounded lifestyle valuing integrity, trust, and unpretentious communal relationships." },
    { title: "Mutual Support", desc: "Lifting one another up—exemplified by establishing student hostels to educate coming generations." },
  ],
  values: [
    { title: "Education", description: "The paramount catalyst that transforms individuals, empowers families, and builds community progress.", iconName: "GraduationCap" },
    { title: "Equality", description: "Advocating dignity, self-respect, and equal access to opportunities for all members.", iconName: "Scale" },
    { title: "Unity", description: "Building brotherhood and solidarity across regional borders and generational lines.", iconName: "Users2" },
    { title: "Respect", description: "Deep reverence for ancestors, elders, teachers, and cultural heritage.", iconName: "Heart" },
    { title: "Service to Society", description: "Giving back to the community and contributing meaningfully to national advancement.", iconName: "HandHeart" },
    { title: "Hard Work", description: "Relentless dedication and discipline in academics, vocational crafts, and careers.", iconName: "Flame" },
    { title: "Integrity", description: "Uncompromising honesty, truthfulness, and ethical conduct in all spheres of life.", iconName: "CheckCircle2" },
    { title: "Cultural Preservation", description: "Safeguarding folk arts, oral history, music, and traditions for posterity.", iconName: "Bookmark" },
  ] as CommunityValue[],
  modernProfessions: [
    { category: "Software Engineers", iconName: "Code2" },
    { category: "Doctors & Healthcare", iconName: "Stethoscope" },
    { category: "Teachers & Professors", iconName: "BookOpenCheck" },
    { category: "Government Officers", iconName: "Landmark" },
    { category: "Police & Defense", iconName: "ShieldAlert" },
    { category: "Entrepreneurs", iconName: "Briefcase" },
    { category: "Progressive Farmers", iconName: "Sprout" },
    { category: "Business Owners", iconName: "Store" },
    { category: "Scientists & Researchers", iconName: "Microscope" },
    { category: "University Students", iconName: "Award" },
  ],
  strengths: [
    "Strong Work Ethic",
    "Practical Artisanal Skills",
    "High Adaptability",
    "Vibrant Cultural Heritage",
    "Close Family Values",
    "Community Cooperation",
    "Enduring Perseverance",
    "Commitment to Continuous Learning",
  ],
  visionPillars: [
    { title: "Quality Education", desc: "Ensuring every youth has access to higher education and professional degrees." },
    { title: "Equal Opportunities", desc: "Removing economic, social, and logistical hurdles for deserving students." },
    { title: "Skill Development", desc: "Blending traditional aptitude with cutting-edge vocational and digital capabilities." },
    { title: "Career Guidance", desc: "Mentorship and counseling connecting students to thriving modern industries." },
    { title: "Digital Literacy", desc: "Empowering every child with computer, web, and technological fluency." },
    { title: "Leadership Opportunities", desc: "Nurturing confident voices who lead communities with wisdom and integrity." },
  ],
  historicalAccuracyNote: {
    title: "Historical Accuracy & Dignity Note",
    content: "During the British colonial era, outdated and discriminatory classifications—including references under the former Criminal Tribes Act—were unjustly applied to numerous indigenous artisan and pastoralist communities across India. Modern historical scholarship and democratic India recognize that these colonial labels were instruments of imperial surveillance and do not define the rich heritage, dignified culture, or intrinsic worth of the Korama, Koracha, and Korava communities today. We honor our ancestors' perseverance and celebrate our community's contemporary achievements in education, nation-building, and social progress.",
  },
};
