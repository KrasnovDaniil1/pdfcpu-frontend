import axios from 'axios';

// const api = 'https://swapi.dev/api/starships/';

var formdata = new FormData();

export const AddStamp = (
    inFile,
    mode,
    onTop,
    selectedPages,
    textMode,
    fileMode,
    description
) => {
    formdata.append('inFile', inFile.files[0], 'test.pdf');
    formdata.append('mode', mode);
    formdata.append('onTop', onTop);
    formdata.append('update', false);
    formdata.append('selectedPages', selectedPages);
    formdata.append('text', textMode);
    formdata.append('description', description);

    axios
        .post('http://localhost:8181/addWatermarks', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(async (res) => {
            let blob = await res.blob();
            console.log(blob);

            //             let blob = await response.blob(); // скачиваем как Blob-объект

            // // создаём <img>
            // let img = document.createElement('img');
            // img.style = 'position:fixed;top:10px;left:10px;width:100px';
            // document.body.append(img);

            // // выводим на экран
            // img.src = URL.createObjectURL(blob);
        })
        .catch((err) => {
            console.log(err);
        });
};

// var formdata = new FormData();
// formdata.append("inFile", fileInput.files[0], "test.pdf");
// formdata.append("mode", "text");
// formdata.append("onTop", "true");
// formdata.append("update", "false");
// formdata.append("selectedPages", "all");
// formdata.append("text", "StampTest");
// formdata.append("description", "sc:.5 abs, diagonal:2");

// var requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("http://localhost:8080/addWatermarks", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// export const GetAllStarships = (page = 1) => {
//     return fetch(`${api}?page=${page}`).then((r) => r.json());
// };

// export const GetStarshipById = (id = -1) => {
//     return fetch(`${api}/${id}`).then((r) => r.json());
// };

// var axios = require('axios');
// var FormData = require('form-data');
// var fs = require('fs');
// var data = new FormData();
// data.append('inFile', fs.createReadStream('/home/ddkrasnov/Документы/test.pdf'));
// data.append('mode', 'text');
// data.append('onTop', 'true');
// data.append('update', 'false');
// data.append('selectedPages', 'all');
// data.append('text', 'StampTest');
// data.append('description', 'sc:.5 abs, diagonal:2');

// var config = {
//   method: 'post',
//   url: 'http://localhost:8080/addWatermarks',
//   headers: {
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
