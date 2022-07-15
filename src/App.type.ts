export interface Option {
  value: string;
  label: string;
  key?: string;
  disabled?: boolean;
}

export interface Doctor {
  doctor_id: string;
  name: string;
  photo: string;
  hospital: string;
  price: string;
  about: string;
  specialization: string;
}

interface Photo {
  size_formatted: string;
  url: string;
  formats: {
    thumbnail: string;
    large: string;
    medium: string;
    small: string;
  };
}

interface Price {
  raw: string;
  formatted: string;
}

interface Specialization {
  id: string;
  name: string;
}

interface Hospital {
  id: string;
  name: string;
  image: Photo;
  icon: Photo;
}
export interface Data {
  doctor_id: string;
  name: string;
  slug: string;
  is_populer: boolean;
  about: string;
  overview: string;
  photo: Photo;
  sip: string;
  experience: string;
  price: Price;
  specialization: Specialization;
  hospital: Array<Hospital>;
  about_preview: string;
}
