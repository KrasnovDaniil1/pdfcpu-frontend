import axios from 'axios';

// const api = 'https://swapi.dev/api/starships/';

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

    // .then((res) => {
    //     console.log('no err', res);

    //     // return res.data;
    // })
    // .catch(function (error) {
    //     if (error.response) {
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //     } else if (error.request) {
    //         console.log(error.request);
    //     } else {
    //         console.log('Error', error.message);
    //     }
    // });
};
