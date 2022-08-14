import axios from 'axios';

export const AddStamp = (
    inFile,
    mode,
    onTop,
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
    formdata.append('update', false);
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
    if (description != '') {
        formdata.append('description', description);
    }

    return axios
        .post('http://localhost:8080/addWatermarks', formdata, {
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

export const UpdateStamp = (
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
    if (description != '') {
        formdata.append('description', description);
    }

    return axios
        .post('http://localhost:8080/addWatermarks', formdata, {
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
        .post('http://localhost:8080/deleteWatermarks', formdata, {
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
