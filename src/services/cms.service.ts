import { AboutContent, DestinationDetail } from './../models/api.data';
import { fetchData } from "./api.service";
import { API_END_POINTS } from "./api.constant";
import {
  BlogContent,
  DestinationList,
  FaqCategoryList,
  FaqData,
  HomeCountObject,
  HomeSpecialities,
  MasterLang,
  ServiceHomePage,
  SliderImages,
  SocialMediaLink,
  Testimonial,
} from "@/models/api.data";

const getapi = API_END_POINTS.GET_API;

export const fetchMasterLangs = async () => {
  const languages = await fetchData<MasterLang[]>({
    apiEndPoint: getapi.LANGUAGES,
  });
  return languages || [];
};

export const fetchTestimonials = async () => {
  const testimonials = await fetchData<Testimonial[]>({
    apiEndPoint: getapi.TESTIMONIALS,
  });
  return testimonials || [];
};

export const fetchBlogs = async () => {
  const blogs = await fetchData<BlogContent[]>({
    apiEndPoint: getapi.BLOG_LIST,
  });
  return blogs || [];
};

export const fetchDestinations = async () => {
  const destinations = await fetchData<DestinationList[]>({
    apiEndPoint: getapi.DESTINATIONS,
  });
  return destinations || [];
};

export const fetchDestinationDetail = async (slug: string) => {
  const response = await fetchData<DestinationDetail>({
    apiEndPoint: getapi.DESTINATION_DETAIL + '/' + slug,
  });
  return response || null;
};

export const fetchFaqCategories = async () => {
  const faqcategories = await fetchData<FaqCategoryList[]>({
    apiEndPoint: getapi.FAQ_CATEGORY,
  });
  return faqcategories || [];
};

export const fetchFaqByCategory = async (catId?: string) => {
  const faqdata = await fetchData<FaqData[]>({
    apiEndPoint: getapi.FAQ_BY_CATEGORY + `/${catId || ""}`,
  });
  return faqdata || [];
};

export const fetchSocialMedia = async () => {
  const sociallinks = await fetchData<SocialMediaLink>({
    apiEndPoint: getapi.SOCIAL_MEDIA_LINKS,
  });

  return sociallinks || null;
};

export const fetchSliders = async () => {
  const sliderImages = await fetchData<SliderImages[]>({
    apiEndPoint: getapi.SLIDER,
  });

  return sliderImages || [];
};

export const fetchServices = async () => {
  const serviceSections = await fetchData<ServiceHomePage[]>({
    apiEndPoint: getapi.SERVICES,
  });

  return serviceSections || [];
};

export const fetchHomeCount = async () => {
  const homeCount = await fetchData<HomeCountObject>({
    apiEndPoint: getapi.HOMECOUNT,
  });

  return homeCount || null;
};


export const fetchHomeSpecialities = async () => {
  const homeSpecialities = await fetchData<HomeSpecialities[]>({
    apiEndPoint: getapi.HOME_SPECIALITY,
  });

  return homeSpecialities || [];
};


export const fetchAbout = async () => {
  const aboutContent = await fetchData<AboutContent>({
    apiEndPoint: getapi.ABOUT_CONTENT,
  });

  return aboutContent || null;
};
