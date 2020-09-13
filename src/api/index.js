import Request from '@/api/Axios'
import {RequestUrl} from '@/api/config'

const $http = params => {
    let url = RequestUrl[params.url];
    return Request({
        method: 'post',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: params.data || {}
    });
};


export default $http;