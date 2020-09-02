import Prismic from "prismic-javascript";

export const apiEndpoint = "https://urivida.cdn.prismic.io/api/v2";
export const accessToken =
  "MC5YMDh1NFJBQUFDUUFRZ3J4.77-977-977-977-977-977-9Au-_vQgFKAfvv73vv71kG--_vTps77-977-9Be-_vVY_cSIReh1aCA";

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));
