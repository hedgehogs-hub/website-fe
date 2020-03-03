import axios from 'axios';

const request= axios.create({
    baseURL: `http://127.0.0.1:8000/`,
    headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default request;

// export class BaseService {
//     post(url, data) {
//         axios.create( url, data);
//     }
//
//     get(url) {
//         axios.get( url);
//     }
//
//     getById(url, id) {
//         axios.get();
//     }
// }