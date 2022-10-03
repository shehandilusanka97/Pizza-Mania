import sanityClient from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";
export const client = sanityClient({
  projectId: "772cn4i9",
  dataset: "production",
  apiVersion: "2022-07-16",
  useCdn: true,
  token:
    "sk1TqX1D6NXQDMsnp8uTRF6RxTV2RTkT8LjqYNd6yzUult2oehsithEU5AC3WPfbccF26oDM561eY3pZ43wr8Q7Mt3VGT1c9unDK7jR1OAySO4TYNe3AH1of5CTlEXQI1V426CxZT5OYxRTJ5axpobSg632WojeX5AJGcWfIWORxgrMRQ7RQ",
});

const builder = ImageUrlBuilder(client);

export const urlFor =(source) => builder.image(source)
