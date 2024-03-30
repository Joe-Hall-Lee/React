import request from "../utils/request";

export function getCinemaListService() {
    return request(
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2917607",
        {
            headers: {
                "X-Client-Info":
                    '{"a":"3000","ch":"1002","v":"5.2.1","e":"1710999442882169102729217","bc":"110100"}',
                "X-Host": "mall.film-ticket.film.list",
            },
        }
    );
}
