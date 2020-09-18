import Axios from 'axios'
// import Qs from 'qs'

/****** 创建axios实例 ******/
const request = Axios.create({
    baseURL: '/api',  // api的base_url
    timeout: 5000  // 请求超时时间
});

/****** request拦截器==>对请求参数做处理 ******/
request.interceptors.request.use(config => {
    // 发送参数前进行处理。 这时候我们通过Qs.stringify转换为表单查询参数
    // config.method === 'post'
    //     ? config.data = Qs.stringify({ ...config.data })
    //     : config.params = { ...config.params };
    // // 设置Content - Type
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    return config;
}, error => {
    //请求错误处理
    Promise.reject(error)
});


/****** respone拦截器==>对响应做处理 ******/
request.interceptors.response.use(
    response => { 
        // console.log(response);
        //成功请求到数据
        //这里根据后端提供的数据进行对应的处理
        if (response.data.code === 1 ) {
            return response.data.data;
        } else {
            // 提示错误
            return response.data;
        }
    },
    error => {  //响应错误处理
        console.log('error');
        console.log(error);
        // console.log(JSON.stringify(error));

        // let text = JSON.parse(JSON.stringify(error)).response.status === 404 ? '404' : '网络异常，请重试';
        // 提示错误
        // console.log(text);

        return Promise.reject(error)
    }
);

export default request;
