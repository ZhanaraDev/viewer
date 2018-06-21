import {SERVER_URL, REST_API_URL,STD_HEADERS } from '../settings/base';
const courseStructureUrl = REST_API_URL + "course_structure/";


export const getCourseStructure = (courseID) => (
  fetch(
    courseStructureUrl+"?course_id="+courseID,
    {
      method: 'GET',
      headers: STD_HEADERS,
    }
  )
);


const testUrl = REST_API_URL + "test/" +"get_test/";


export const getTest = (itemPK) => (
  fetch(
    testUrl+"?item_pk="+itemPK,
    {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        headers: STD_HEADERS,      
      },
    }
  )
);