import { BASE_URL } from "../Constants";
import axios from "axios";

export const ApiCall = async ({ params, route, verb, token, baseurl }) => {
  try {
    let url = null;
    if (baseurl === false) {
      url = route;
    } else {
      url = `${BASE_URL}/${route}`;
    }
    // console.log("url", url);
    // console.log("token", token);
    // console.log("params", params);

    let response = null;
    switch (verb) {
      case "get":
        const queryString = Object.keys(params)
          .map(
            (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
          )
          .join("&");
        response = await axios.get(
          `${url}?${queryString}`,
          token ? { headers: { "x-access-token": token } } : null
        );
        break;
      case "post":
        response = await axios.post(
          url,
          params,

          token
            ? { headers: { "x-access-token": token } }
            : {
                mode: "no-cors",
                credentials: "same-origin",
                headers: {
                  "Access-Control-Allow-Origin": "http://localhost:3000",
                  "Content-Type": "application/json",
                },
              }
        );
        break;

      case "put":
        response = await axios.put(
          url,
          params,

          token ? { headers: { "x-access-token": token } } : null
        );
        break;
      case "patch":
        response = await axios.patch(
          url,
          params,
          token ? { headers: { "x-access-token": token } } : null
        );
        break;
      case "delete":
        response = await axios.delete(
          url,
          token ? { headers: { "x-access-token": token } } : null,
          params
        );
        break;

      default:
        return { code: "400", response: "method not found" };
    }

    if (response) {
      return { status: 200, response: response.data };
    } else {
      return response;
    }
  } catch (e) {
    return {
      status: 400,
      response: e?.response?.data
        ? e?.response?.data
        : { message: e.toString() },
    };
  }
};
