import request from '../promisedHttpRequest';

let BASE_URL_TOKUBUY = process.env.REACT_APP_ROOT_API_TOKUBUY;

if (process.env.REACT_APP_ENV === 'staging') {
  BASE_URL_TOKUBUY = process.env.REACT_APP_ROOT_API_STG_TOKUBUY;
}

export function fetchPointHistory(page, token) {
  const url = `${BASE_URL_TOKUBUY}user/me/point-history-web?page=${page}`;
  return request.get(url, token);
}
