import React, { useEffect } from 'react';

export default function Comingsoon() {
    useEffect(() => {
        fetch(
            '/rest/cbc/portalsearchcorrectorservice/v1/hot-words?appId=com.huaweicloud.portal.search.high&type=PC&language=zh-cn',
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
    }, []);
    return <div>Comingsoon</div>;
}
