export const SERVER_URL = "https://sell.epigraph.kz:2422/";
export const REST_API_URL = "https://sell.epigraph.kz/restapp/";

export const STD_HEADERS = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": document.cookie.match(/sessionid=[A-Za-z0-9]+/)[0],
}