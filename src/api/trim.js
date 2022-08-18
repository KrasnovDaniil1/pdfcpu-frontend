import axios from 'axios';

import { API } from './api';

export const Trim = (inFile, selectedPages) => {
    var formdata = new FormData();
    formdata.append('inFile', inFile.files[0]);
    formdata.append('selectedPages', selectedPages);

    return axios
        .post(`${API}/trim`, formdata, {
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
