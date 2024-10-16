import { ProcedureCard } from '@/components';
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

export interface CommonLocaleTitle {
  title_en: string;
  title_ar: string | null;
  title_ru: string | null;
  title_es: string | null;
  title_fr: string | null;
  title_fa: string | null;
}

export interface CommonSmallDescription {
  small_description_en: string;
  small_description_ar: string | null;
  small_description_fr: string | null;
  small_description_fa: string | null;
  small_description_es: string | null;
  small_description_ru: string | null;
}

export interface CommonDescription {
  description_en: string;
  description_ar: string | null;
  description_es: string | null;
  description_fa: string | null;
  description_fr: string | null;
  description_ru: string | null;
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

export interface BlogContent
  extends CommonTable,
    CommonLocaleTitle,
    CommonSmallDescription {
  image: string | null;
  blog_date: string;
  slug: string;
}

export interface BlogDetail
  extends CommonTable,
    CommonLocaleTitle,
    BlogContent {
  blog_content_en: string;
  blog_content_es: string | null;
  blog_content_ar: string | null;
  blog_content_fa: string | null;
  blog_content_fr: string | null;
  blog_content_ru: string | null;
}

export interface BlogDetailResponse {
  blog: BlogDetail;
  latest_blogs: BlogContent[];
}

export interface DestinationList
  extends CommonTable,
    CommonLocaleTitle,
    CommonSmallDescription {
  image: string | null;
  slug: string;
}

export interface FaqCategoryList extends CommonTable, CommonLocaleTitle {}

export interface FaqData
  extends CommonTable,
    CommonLocaleTitle,
    CommonDescription {
      category: number;
    }

export interface SocialMediaLink extends CommonTable {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  linkedin: string;
  thread: string; 
}


export interface SliderImages extends CommonTable, CommonLocaleTitle, CommonDescription {
  image: string;
  mobile_image: string;
}

export interface ServiceHomePage extends CommonTable, CommonLocaleTitle, CommonDescription {
  image: string;
}

export interface HomeCountObject extends CommonTable, CommonLocaleTitle, CommonDescription {
  languages_supported: string;
  online_consultations: string;
  countries: string;
  image: string;
}

export interface HomeSpecialities extends CommonTable, CommonLocaleTitle {

}

export interface AboutContent extends CommonTable, CommonLocaleTitle, CommonDescription{
  caption_en: string;
  caption_es: string | null;
  caption_ar: string | null;
  caption_ru: string | null;
  caption_fr: string | null;
  caption_fa: string | null;
  about_us_en: string;
  about_us_es: string | null;
  about_us_ar: string | null;
  about_us_ru: string | null;
  about_us_fr: string | null;
  about_us_fa: string | null;
  why_us_en: string;
  why_us_es: string | null;
  why_us_ar: string | null;
  why_us_ru: string | null;
  why_us_fr: string | null;
  why_us_fa: string | null;
  description_en: string;
  description_es: string | null;
  description_ar: string | null;
  description_ru: string | null;
  description_fr: string | null;
  description_fa: string | null;
  free_consultation_description_en: string;
  free_consultation_description_es: string | null;
  free_consultation_description_ar: string | null;
  free_consultation_description_ru: string | null;
  free_consultation_description_fr: string | null;
  free_consultation_description_fa: string | null;
  image: string;
  years_of_experience: string;
  happy_clients: string;
  service: string;
}

export interface DestinationObject extends CommonTable, CommonLocaleTitle, CommonSmallDescription, CommonDescription {
  more_info_en: string;
  more_info_es: string | null;
  more_info_ar: string | null;
  more_info_ru: string | null;
  more_info_fr: string | null;
  more_info_Fa: string | null;
  image: string | null;
}

export interface ProcedureData extends CommonTable, CommonLocaleTitle, CommonSmallDescription{
  image: string | null;
  slug: string;
  package_features: {
    id: string;
    feature_en: string;
    feature_es: string | null;
    feature_ar: string | null;
    feature_ru: string | null;
    feature_fr: string | null;
    feature_fa: string | null;
    image: string;
  }[]
}

export interface DestinationDetail {
  destination: DestinationObject;
  other_destinations: DestinationList[];
  procedures: ProcedureData[] | null;
}

export interface MetaObject extends CommonTable{
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

export interface BannerObject extends CommonTable, CommonLocaleTitle {
  caption_en: string;
  caption_es: string | null;
  caption_ar: string | null;
  caption_ru: string | null;
  caption_fr: string | null;
  caption_fa: string | null;
  image: string;
}


export interface ContactData extends CommonTable{
  address_en: string;
  address_es: string | null;
  address_ru: string | null;
  address_fa: string | null;
  address_fr: string | null;
  address_ar: string | null;
  email: string;
  location_url: string;
  primary_phone_number: string;
  secondary_phone_number: string;
}