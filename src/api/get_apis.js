import { LOCAL_SERVER_URL, LOCAL_REST_API_URL } from '../settings/base';

const courseStructureUrl = LOCAL_REST_API_URL + "course_structure/";


export const getCourseStructure = (courseID) => (
  fetch(
    courseStructureUrl+"?course_id="+courseID,
    {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
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