import axios from 'axios'

const service = axios.create({
    baseURL: 'http://comento.cafe24.com/',
    timeout: 5000
})

export function apiGetList(params) {
    return service({
        url: 'request.php',
        method: 'get',
        params: params,
        // params: {
        //     page: 1,
        //     ord: 'asc',
        //     category: [1]
        // },
    })
}

export function apiGetCategory() {
    return service({
        url: 'category.php',
        method: 'get',
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
