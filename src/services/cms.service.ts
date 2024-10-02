import { fetchData } from "./api.service";
import { API_END_POINTS } from "./api.constant";
import { MasterLang, Testimonial } from "@/models/api.data";

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
