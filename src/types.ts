export type Language = 'az' | 'ru' | 'en';

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  expertise: string[];
}

export interface VideoContent {
  title: {
    [key in Language]: string;
  };
  content: {
    [key in Language]: string;
  };
  videoUrl: string;
}