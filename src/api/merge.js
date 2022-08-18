import axios from 'axios';

import { API } from './api';

export const Merge = (inFiles) => {
    var formdata = new FormData();

    for (const item of inFiles) {
        formdata.append('inFiles', item.files[0]);
    }

    return axios
        .post(`${API}/merge`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error.response.data;
        });
};
