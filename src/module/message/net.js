import { request, net } from '../../network'

export function getCityList() {
    return request({
        'data|1-10': [{
            'area': '@city()',
            'birthday': '@date("yyyy-MM-dd")'
        }]
    }, (resolve) => {
        net.get('/api/perMessage').then((data) => {
            resolve(data.data)
        })
    })
}