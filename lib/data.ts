import { getFacilities, getCarousel } from "./contentful";

export const fetchFacilities = async () => {
  try {
    const response = await getFacilities();
    if (response) {
      const newResponse = response.map((facility: any) => ({
        facility: facility.facility,
        slug: facility.slug,
        description: facility.description,
        thumbnailUrl: facility.thumbnail.fields.file.url.startsWith("http")
          ? facility.thumbnail.fields.file.url
          : "https:" + facility.thumbnail.fields.file.url,
        denahUrl: facility.denah.fields.file.url.startsWith("http")
          ? facility.denah.fields.file.url
          : "https:" + facility.denah.fields.file.url,
        images: facility.images.map((image: any) => ({
          imageUrl: image.fields.file.url.startsWith("http")
            ? image.fields.file.url
            : "https:" + image.fields.file.url,
        })),
      }));

      return newResponse;
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchCarousel = async () => {
  try {
    const response = await getCarousel();
    if (response) {
      const newResponse = response.map((item: any) => {
        // Check if item.image is an object and has the required nested properties
        const imageUrl =
          item.image &&
          item.image.fields &&
          item.image.fields.file &&
          item.image.fields.file.url;

        const image =
          imageUrl && imageUrl.startsWith("http")
            ? imageUrl
            : "https:" + imageUrl;

        return {
          image: image,
          text: item.text,
          slug: item.slug,
          description: item.description,
        };
      });

      return newResponse;
    }
  } catch (error) {
    console.error(error);
  }
};
