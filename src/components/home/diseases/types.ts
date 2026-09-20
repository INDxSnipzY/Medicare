export interface Disease {
  id: string;
  name: string;
  category: string;
  description: string;
  symptoms: string[];
  image: string;
  href: string;
  featured?: boolean;
}
