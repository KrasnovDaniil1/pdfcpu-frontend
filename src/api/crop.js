import axios from 'axios';

import { API } from './api';

export const Crop = (inFile, selectedPages, description) => {
    var formdata = new FormData();
    formdata.append('inFile', inFile.files[0]);
    formdata.append('selectedPages', selectedPages);
    formdata.append('description', description);

    return axios
        .post(`${API}/crop`, formdata, {
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
