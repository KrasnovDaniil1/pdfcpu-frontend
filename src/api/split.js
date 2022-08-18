import axios from 'axios';

import { API } from './api';

export const Split = (inFile, span) => {
    var formdata = new FormData();
    formdata.append('inFile', inFile.files[0]);
    formdata.append('span', span);

    return axios
        .post(`${API}/split`, formdata, {
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
