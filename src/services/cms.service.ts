import {
  AboutContent,
  BannerObject,
  BlogDetail,
  BlogDetailResponse,
  ContactData,
  DestinationDetail,
  FooterLinkData,
  MetaObject,
  PackageCategory,
  ProcedureData,
} from "./../models/api.data";
import { fetchData, postData } from "./api.service";
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

interface LimitParams {
  offset?: number;
  limit?: number;
  pckg_category?: string;
}

function createQueryString(params: any) {
  if (params) {
    const queryString = new URLSearchParams(params).toString();
    return `?${queryString}`;
  }
  return "";
}

export const fetchBlogs = async (funcParams?: LimitParams) => {
  const blogs = await fetchData<BlogContent[]>({
    apiEndPoint: getapi.BLOG_LIST + `${createQueryString(funcParams)}`,
  });
  return blogs || [];
};

export const fetchBlogDetail = async (slug: string) => {
  const blogdetail = await fetchData<BlogDetailResponse>({
    apiEndPoint: getapi.BLOG_DETAIL + `/${slug}`,
  });
  return (
    blogdetail || {
      blog: null,
      latest_blogs: [],
    }
  );
};

export const fetchDestinations = async (funcParams?: LimitParams) => {
  const destinations = await fetchData<DestinationList[]>({
    apiEndPoint: getapi.DESTINATIONS + `${createQueryString(funcParams)}`,
  });
  return destinations || [];
};

export const fetchDestinationDetail = async (slug: string) => {
  const response = await fetchData<DestinationDetail>({
    apiEndPoint: getapi.DESTINATION_DETAIL + "/" + slug,
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

export const fetchFAQList = async (catId?: string) => {
  const faqdata = await fetchData<FaqData[]>({
    apiEndPoint: getapi.FAQ_LIST,
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

export const fetchMetaData = async (page: string) => {
  const metadata = await fetchData<MetaObject>({
    apiEndPoint: getapi.META_DATA + `/${page}`,
  });

  return metadata || null;
};

export const fetchBanners = async (page: string) => {
  const innerbanner = await fetchData<BannerObject>({
    apiEndPoint: getapi.INNER_BANNER + `/${page}`,
  });

  return innerbanner || null;
};

export const fetchProcedures = async (funcParams?: LimitParams) => {
  const procedures = await fetchData<ProcedureData[]>({
    apiEndPoint: getapi.PROCEDURES + `${createQueryString(funcParams)}`,
  });

  return procedures || [];
};

export const fetchProcedureDetail = async (slug: string) => {
  const procedure = await fetchData<ProcedureData>({
    apiEndPoint: getapi.PROCEDURE_DETAIL + `/${slug}`,
  });

  return procedure || null;
};

export const fetchContact = async () => {
  const innerbanner = await fetchData<ContactData>({
    apiEndPoint: getapi.CONTACT_DATA,
  });

  return innerbanner || null;
};

export const fetchProcedureCategories = async (searchParam?: any) => {
  let categories: any = [];
  if (searchParam?.search) {
    categories = await fetchData<PackageCategory[]>({
      apiEndPoint: getapi.SEARCH_API,
    });
  } else {
    categories = await fetchData<PackageCategory[]>({
      apiEndPoint: getapi.PACKAGE_CATEGORY,
    });
  }
  return categories || [];
};

export const fetchProcedureCategorDetail = async (slug: string) => {
  const category = await fetchData<PackageCategory>({
    apiEndPoint: getapi.CATEGORY_DETAIL + `/${slug}`,
  });

  return category || null;
};

export const fetchFooterLinks = async () => {
  const category = await fetchData<FooterLinkData[]>({
    apiEndPoint: getapi.FOOTER_PACKAGE_LINKS,
  });

  return category || [];
};

export const fetchVisibilityConifg = async (): Promise<{
  blogs: boolean;
  reviews: boolean;
}> => {
  const settings = await fetchData<any[]>({
    apiEndPoint: getapi.PAGE_VISIBILIY,
  });

  const result = settings?.reduce((acc, item) => {
    for (let key in item) {
      if (key !== "id") {
        acc[key] = item[key]; // Flip the boolean value
      }
    }
    return acc;
  }, {});

  return result || null;
};

export const submiContactForm = async (data: Object) => {
  const response = await postData({
    api: "submit-contact-form",
    payload: data,
  });

  return response || null;
};
