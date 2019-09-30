import axios from 'axios'

const service = axios.create({
    baseURL: 'http://comento.cafe24.com/',
    // baseURL: 'http://54.180.32.46/',
    // withCredentials: true,
    timeout: 5000
})

export function getList() {
    return service({
        url: 'request.php',
        method: 'get',
        params: {
            page: 1,
            ord: 'asc',
            category: [1]
        },
    })
}

//http://54.180.32.46/words
export function testApi() {
    return service({
        url: 'words',
        method: 'get',
    });
    // return axios.get('http://54.180.32.46/words');
}
