export default {
    namespace: 'cinema',
    state: {
        list: [],
    },
    reducers: {
        clearList(prevState: any, action: any) {
            return {
                ...prevState,
                list: [],
            };
        },
        changeList(prevState: any, action: any) {
            return {
                ...prevState,
                list: action.payload,
            };
        },
    },
    effects: {
        *getList(action: any, obj: any): any {
            // console.log('getList', action, obj);
            const { put, call } = obj;
            var res = yield call(getListForCinema, action.payload.cityId);
            // console.log(res)

            // yield put()

            yield put({
                type: 'changeList',
                payload: res,
            });
        },
    },
};

async function getListForCinema(cityId: any) {
    // console.log(cityId);
    var res = await fetch(
        `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=1493575`,
        {
            headers: {
                'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.1","e":"1710999442882169102729217","bc":"${cityId}"}`,
                'X-Host': 'mall.film-ticket.cinema.list',
            },
        },
    ).then((res) => res.json());
    // console.log(res)
    return res.data.cinemas;
}
