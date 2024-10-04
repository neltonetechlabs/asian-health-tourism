import { fetchData } from "./api.service";
import { API_END_POINTS } from "./api.constant";
import { BlogContent, DestinationList, MasterLang, Testimonial } from "@/models/api.data";

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
