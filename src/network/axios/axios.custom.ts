import * as axios from "./axios.instance";

// JSONPlaceholder의 /posts url
const apiPostsURL = "/posts";

/**
 * https://jsonplaceholder.typicode.com/posts로 get요청을 하는 함수
 * @param userId : query string에 포함될 optional parameter
 * @param id : query string에 포함될 optional parameter
 * @returns : 요청 성공 시 응답 반환, 요청 실패 시 에러 반환
 */
export const apiGetPosts = async (userId?: number, id?: number) => {
  try {
    const response = await axios.instance.get(apiPostsURL, {
      params: {
        userId: userId,
        id: id,
      }
    });
    console.log(response);
    return (response);
  } catch (error) {
    console.log(error);
    return (error);
  }
};

// HTTP method: post
// optional parameter: title, body, userId
/**
 * https://jsonplaceholder.typicode.com/posts로 post요청을 하는 함수
 * @param title : request body에 포함될 optional parameter
 * @param body : request body에 포함될 optional parameter
 * @param userId : request body에 포함될 optional parameter
 * @returns : 요청 성공 시 응답 반환, 요청 실패 시 에러 반환
 */
export const apiPostPosts = async (title?: string, body?: string, userId?: number) => {
  try {
    const response = await axios.instance.post(apiPostsURL, {
      title: title,
      body: body,
      userId: userId,
    });
    console.log(response);
    return (response);
  } catch (error) {
    console.log(error);
    return (error);
  }
};