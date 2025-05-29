export interface PhotoFeedback {
  goodPoints: string[];
  areasForImprovement: string[];
  overallFeedback: string;
}

export interface AnalyzedPhoto {
  id: string;
  imageDataUrl: string; // base64 data URL
  feedback: PhotoFeedback | null;
  analysisError?: string;
  timestamp: number; // Store as number (Date.now()) for easier JSON serialization
}

export enum AppView {
  Home = 'Home', // Added Home view
  Analyze = 'Analyze',
  Tutorials = 'Tutorials',
  History = 'History',
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  details: string[]; // Array of paragraphs for details
}

// For Gemini API communication
export interface GeminiImagePart {
  inlineData: {
    mimeType: string;
    data: string; // base64 encoded string without prefix
  };
}
export interface GeminiTextPart {
  text: string;
}

export interface GeminiContent {
  parts: (GeminiImagePart | GeminiTextPart)[];
  role?: string;
}