import { createClient } from "contentful";

const createContentClient = () => {
  return createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || "",
  });
};

const client = createContentClient();

const getEntriesByType = async (type: string) => {
  try {
    const response = await client.getEntries({ content_type: type });
    return response.items;
  } catch (error) {
    console.error(error);
  }
};

export const getFacilities = async () => {
  try {
    const response = await getEntriesByType("facilities");
    const facilities = response?.map((facility) => facility.fields);
    return facilities;
  } catch (error) {
    console.error(error);
  }
};

export const getCarousel = async () => {
  try {
    const response = await getEntriesByType("carousel");
    const carouselItem = response?.map((val) => val.fields);
    return carouselItem;
  } catch (error) {
    console.error(error);
  }
};

export const getVenue = async () => {
  try {
    const response = await getEntriesByType("venue");
    const venue = response?.map((val) => val.fields);
    return venue;
  } catch (error) {
    console.error(error);
  }
};

export const getVenueBySlug = async (slug: any) => {
  try {
    const response = await getEntriesByType("venue");
    if (!response) {
      throw new Error("Failed to fetch data from Contentful");
    }
    const venue = response.find((entry) => entry.fields.slug === slug);
    console.log(venue);

    return venue;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getFaq = async () => {
  try {
    const response = await getEntriesByType("faq");
    const FaqItems = response?.map((val) => val.fields);
    return FaqItems;
  } catch (error) {
    console.error(error);
  }
};

export const getVisi = async () => {
  try {
    const response = await getEntriesByType("visi");
    const visi = response?.map((val) => val.fields);
    return visi;
  } catch (error) {
    console.error(error);
  }
};

export const getMisi = async () => {
  try {
    const response = await getEntriesByType("misi");
    const misi = response?.map((val) => val.fields);
    return misi;
  } catch (error) {
    console.error(error);
  }
};
