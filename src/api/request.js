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

export function apiGetAds(params) {
    return service({
        url: 'ads.php',
        method: 'get',
        params: params,
    })
}

export function apiGetDetail(no) {
    return service({
        url: 'detail.php',
        method: 'get',
        params: {
            req_no: no
        }
    })
}
