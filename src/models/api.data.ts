export interface CommonTable {
  id: number;
  status?: number;
  sort_order?: number;
}
export interface CommonLocaleContent {
  content_en: string;
  content_ar: string | null;
  content_ru: string | null;
  content_es: string | null;
  content_fr: string | null;
  content_fa: string | null;
}
export interface CommonLocaleName {
  name_en: string;
  name_ar: string | null;
  name_ru: string | null;
  name_es: string | null;
  name_fr: string | null;
  name_fa: string | null;
}
export interface Testimonial
  extends CommonLocaleName,
    CommonLocaleContent,
    CommonTable {
  image: string | null;
  star_rating: number | null;
}


export interface MasterLang extends CommonTable {
  language: string;
  code: string;
}