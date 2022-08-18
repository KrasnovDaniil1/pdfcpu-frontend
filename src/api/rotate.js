import axios from 'axios';

import { API } from './api';

export const Rotate = (inFile, selectedPages, rotate) => {
    var formdata = new FormData();
    formdata.append('inFile', inFile.files[0]);
    formdata.append('selectedPages', selectedPages);
    formdata.append('rotate', rotate);

    return axios
        .post(`${API}/rotate`, formdata, {
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
