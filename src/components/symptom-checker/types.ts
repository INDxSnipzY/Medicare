export interface Symptom {
  id: string;
  name: string;
  category: string;
  description?: string;
}

export interface PossibleCondition {
  id: string;
  name: string;
  slug: string;
  category: string;
  matchPercentage: number;
  matchingSymptoms: string[];
  description: string;
}

export interface SymptomCheckerState {
  selectedSymptoms: Symptom[];
  results: PossibleCondition[];
  isChecking: boolean;
}