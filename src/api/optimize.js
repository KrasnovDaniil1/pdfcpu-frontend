import axios from 'axios';

import { API } from './api';

export const Optimize = (inFile) => {
    var formdata = new FormData();
    formdata.append('inFile', inFile.files[0]);

    return axios
        .post(`${API}/optimize`, formdata, {
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
