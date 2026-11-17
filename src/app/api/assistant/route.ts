import { NextRequest, NextResponse } from "next/server";
import { VERIFIED_KNOWLEDGE_BASE, KnowledgeFact } from "@/content/knowledgeBase";

function findRelevantKnowledge(query: string): { match: KnowledgeFact | null; score: number } {
  const normalizedQuery = query.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  const queryTokens = normalizedQuery.split(/\s+/).filter((t) => t.length > 2);

  let bestMatch: KnowledgeFact | null = null;
  let highestScore = 0;

  for (const fact of VERIFIED_KNOWLEDGE_BASE) {
    let score = 0;

    // Check keywords
    for (const kw of fact.keywords) {
      if (normalizedQuery.includes(kw)) {
        score += kw.includes(" ") ? 4 : 2;
      }
      for (const token of queryTokens) {
        if (kw === token) {
          score += 3;
        }
      }
    }

    // Check topic
    if (normalizedQuery.includes(fact.topic.toLowerCase())) {
      score += 5;
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = fact;
    }
  }

  return { match: bestMatch, score: highestScore };
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message cannot be empty." },
        { status: 400 }
      );
    }

    const trimmed = message.trim();

    // Check for greetings
    const lower = trimmed.toLowerCase();
    if (/^(hi|hello|namaste|hey|greetings|vanakkam|namaskara)\b/i.test(lower)) {
      return NextResponse.json({
        reply: "Hello! Welcome to Korama Hostel Trust's digital assistant. I can answer questions regarding the hostel, eligible communities (Korama, Koracha, Korava), verified facilities, location in Bengaluru, and admission guidance. How may I assist you today?",
        groundedTopic: "Greeting",
        isUnverifiedOrMissing: false,
      });
    }

    const { match, score } = findRelevantKnowledge(trimmed);

    // Score threshold check
    if (match && score >= 2) {
      let reply = match.verifiedAnswer;

      if (match.isUnverifiedOrMissing) {
        reply += `\n\n📌 Note: For authoritative confirmation on ${match.topic.toLowerCase()}, please reach out directly to hostel management through our Contact page or visit us at No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru.`;
      }

      return NextResponse.json({
        reply,
        groundedTopic: match.topic,
        isUnverifiedOrMissing: !!match.isUnverifiedOrMissing,
        suggestedContact: "No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru, Karnataka",
      });
    }

    // Fallback: PRD Section 8.8 rule - never guess unverified facts
    return NextResponse.json({
      reply: `I am the Korama Hostel Trust official assistant. I only provide verified and approved information regarding Korama Hostel and the Korama, Koracha, and Korava community heritage.\n\nI do not have verified records on your specific query: "${trimmed}". To prevent misinformation, we do not guess operational details, fees, or policies.\n\nPlease contact hostel management directly via our Contact page or visit the hostel at No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru.`,
      groundedTopic: "Unverified / Unknown Topic",
      isUnverifiedOrMissing: true,
      suggestedContact: "No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru, Karnataka",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while answering your question." },
      { status: 500 }
    );
  }
}
