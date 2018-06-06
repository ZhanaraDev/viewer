import { LOCAL_SERVER_URL, LOCAL_REST_API_URL } from '../settings/base';

const courseStructureUrl = LOCAL_REST_API_URL + "course_structure/";


export const getCourseStructure = (courseID) => (
  fetch(
    courseStructureUrl+"?course_id="+courseID,
    {
      credentials: "include",
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json654",
//        "Cookie": "csrftoken=I4o3Dt6InQTJNwi01GeDaJVsmshQ1L4UGmNJ2rHquganJS6iFfsY3mRkE3QrRJoZ; _ym_uid=1528196110546093226; _ym_visorc_47828767=w; _ym_isad=2; sessionid=2syjchw78nyfpu3gsg22phfhrpvg5wx8; _ga=GA1.1.1779845637.1528197237; _gid=GA1.1.787647361.1528197237",
      },
    }
  )
);


const testUrl = LOCAL_REST_API_URL + "test/" +"get_test/";


export const getTest = (itemPK) => (
  fetch(
    testUrl+"?item_pk="+itemPK,
    {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    }
  )
);