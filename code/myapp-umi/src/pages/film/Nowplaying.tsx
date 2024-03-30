import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'umi';

export default function Nowplaying() {
    const [list, setlist] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch(
            'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4572797',
            {
                headers: {
                    'X-Client-Info':
                        '{"a":"3000","ch":"1002","v":"5.2.1","e":"1710999442882169102729217","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list',
                },
            },
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data.films);
                setlist(res.data.films);
            });
    }, []);
    return (
        <div>
            {list.map((item: any) => (
                <li
                    key={item.filmId}
                    onClick={() => {
                        // console.log(history);

                        history.push(`/detail/${item.filmId}`);
                    }}
                >
                    {item.name}
                </li>
            ))}
        </div>
    );
}
