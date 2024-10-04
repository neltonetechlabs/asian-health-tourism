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

export interface BlogContent extends CommonTable, CommonLocaleTitle, CommonSmallDescription {
  image: string | null;
  blog_date: string;
}

export interface BlogDetail extends CommonTable, CommonLocaleTitle, BlogContent {
  blog_content_en: string;
  blog_content_es: string | null;
  blog_content_ar: string | null;
  blog_content_fa: string | null;
  blog_content_fr: string | null;
  blog_content_ru: string | null;
}

export interface DestinationList extends CommonTable, CommonLocaleTitle, CommonSmallDescription {
  image: string | null;
  slug: string;
}