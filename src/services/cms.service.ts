import { fetchData } from "./api.service";
import { API_END_POINTS } from "./api.constant";
import {
  BlogContent,
  DestinationList,
  FaqCategoryList,
  FaqData,
  MasterLang,
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
