import axios from "axios";

// axios config: https://axios-http.com/kr/docs/req_config

export const instance = axios.create({
  // client의 location을 baseURL로 지정
  //baseURL: window.location.origin,

  // axios 테스트를 위한 fake API server를 baseURL로 지정
  baseURL: "https://jsonplaceholder.typicode.com",

  // axios 요청에 대한 응답이 timeout[ms] 초과 시, 요청 중단
  // default value: 0, 초과시간 없음
  timeout: 5000,

  // response로 받을 HTTP response status code 지정
  // default value: 200 <= status < 300 
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
});