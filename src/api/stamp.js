import axios from 'axios';


import {API} from "./api"

export const AddStamp = (
    inFile,
    mode,
    onTop,
    update,
    selectedPages,
    textMode,
    fileMode,
    pagePdfMode,
    description
) => {
    var formdata = new FormData();
    formdata.append('inFile', inFile.files[0]);
    formdata.append('mode', mode);
    formdata.append('onTop', onTop);
    formdata.append('update', update);
    formdata.append('description', description);
    formdata.append('selectedPages', selectedPages);
    if (mode == 'text') {
        formdata.append('text', textMode);
    }
    if (mode != 'text') {
        formdata.append('fileMode', fileMode.files[0]);
    }
    if (mode == 'pdf') {
        formdata.append('pagePdfMode', pagePdfMode);
    }

    return axios
        .post(`${API}/addWatermarks`, formdata, {
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

export const DeleteStamp = (inFile, selectedPages) => {
    var formdata = new FormData();
    formdata.append('inFile', inFile.files[0]);
    formdata.append('selectedPages', selectedPages);

    return axios
        .post(`${API}/removeWatermarks`, formdata, {
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
