import axios from 'axios';

const JWT_AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ0ZXN0IiwiZmlyc3RuYW1lIjoiRm9vIiwibGFzdG5hbWUiOiJCYXIiLCJlbWFpbCI6ImZvb0BiYXIuY29tIiwiaWF0IjoxNjU4OTAzMzIwLCJleHAiOjE2NTk1MDgxMjB9.kAvDpyh0KvPSp1x754vPCdMaFePMjWfYUZG1wDayULU ';

export default function initAppEnv() {
  window.state = {};
  axios.defaults.headers.common['accept'] = '*/*';
  axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_AUTH_TOKEN}`;
  console.log('init');
}
