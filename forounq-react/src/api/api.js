import axios from 'axios';

const server = 'http://localhost:7000';

const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data);

export const materias = body => request('get', '/materias', body);
export const publicaciones = data => request('get', `/search?q=${data}`)

