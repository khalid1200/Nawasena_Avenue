import {
  getFacilities,
  getCarousel,
  getVenue,
  getFaq,
  getVisi,
  getMisi,
} from "./contentful";

export const fetchFacilities = async () => {
  try {
    const response = await getFacilities();

    if (response) {
      const newResponse = response.map((venue: any) => ({
        facility: venue.facility,
        slug: venue.slug,
        description: venue.shortDescription,
        thumbnailUrl: venue.thumbnail.fields.file.url.startsWith("http")
          ? venue.thumbnail.fields.file.url
          : "https:" + venue.thumbnail.fields.file.url,
        images: venue.images.map((image: any) => ({
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

export const fetchVenue = async () => {
  try {
    const response = await getVenue();
    if (response) {
      const newResponse = response.map((venue: any) => ({
        venue: venue.venue,
        slug: venue.slug,
        description: venue.shortDescription,
        thumbnailUrl: venue.thumbnail.fields.file.url.startsWith("http")
          ? venue.thumbnail.fields.file.url
          : "https:" + venue.thumbnail.fields.file.url,
        features: venue.features,
        images: venue.images.map((image: any) => ({
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

export const fetchFaq = async () => {
  try {
    const response = await getFaq();
    if (response) {
      const newResponse = response.map((val: any) => ({
        question: val.question,
        answer: val.answer,
      }));
      return newResponse;
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchVisi = async () => {
  try {
    const response = await getVisi();
    if (response) {
      const newResponse = response.map((val: any) => ({
        visi: val.visi,
      }));
      return newResponse;
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchMisi = async () => {
  try {
    const response = await getMisi();
    if (response) {
      const newResponse = response.map((val: any) => ({
        misi: val.misi,
      }));
      return newResponse;
    }
  } catch (error) {
    console.error(error);
  }
};
