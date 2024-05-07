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
