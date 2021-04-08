'use strict';

 
let currentId = 2;

let initialData = [{
  "_id": "pj01_UC01",
  "name": "Predict system downtimes",
  "description": "Predict downtime of different system componenets in application landscape",
  "type": "Regression",
  "status": "Data Exploration",
  "experiments": [
    {
      "id": "123",
      "name": "INS_Resolver Time",
      "dataset": "CMB_Echo 2",
      "description": "description will come here",
      "target": "Resolver Time",
      "runtime": "00:30:21",
      "status": "model building completed"
    },
    {
      "id": "1234",
      "name": "INS_Resolver Time",
      "dataset": "CMB_Echo 3",
      "description": "description will come here",
      "target": "Resolver Time",
      "runtime": "00:30:21",
      "status": "model building completed"
    }
  ],
  "lastedit": "2020-07-09T17:21:20.665Z",
  "createdon": "2020-07-09T17:21:20.665Z"
},{
  "_id": "pj01_UC02",
  "name": "Predict system downtimes new",
  "description": "Predict downtime of different system componenets in application landscape",
  "type": "Classification",
  "status": "Data Injection",
  "experiments": [
    {
      "id": "123",
      "name": "INS_Resolver Time",
      "dataset": "CMB_Echo 2",
      "description": "description will come here",
      "target": "Resolver Time",
      "runtime": "00:30:21",
      "status": "model building completed"
    },
    {
      "id": "1234",
      "name": "INS_Resolver Time",
      "dataset": "CMB_Echo 3",
      "description": "description will come here",
      "target": "Resolver Time",
      "runtime": "00:30:21",
      "status": "model building completed"
    }
  ],
  "lastedit": "2020-07-09T17:21:20.665Z",
  "createdon": "2020-07-09T17:21:20.665Z"
}];
 
module.exports = {
  get: (url) => {
    if(url.includes("getexperiments")){
      initialData = [
        {
          "id": "123",
          "name": "INS_Resolver Time",
          "dataset": "CMB_Echo 2",
          "description": "description will come here",
          "target": "Resolver Time",
          "runtime": "00:30:21",
          "status": "model building completed"
        },
        {
          "id": "1234",
          "name": "INS_Resolver Time",
          "dataset": "CMB_Echo 3",
          "description": "description will come here",
          "target": "Resolver Time",
          "runtime": "00:30:21",
          "status": "model building completed"
        }
      ];
    }
    return Promise.resolve({
      data: initialData
    });
  },
  post: (url, data) => {
    let name = "";
    name = (data && data.usecasename !== 'undefined')?data.usecasename:"";
    let usecasedescription = (data && data.usecasedescription !== 'undefined')?data.usecasedescription:"";
    let usecasetype = (data && data.usecasetype !== 'undefined')?data.usecasetype:"";
    let newRecord = {
      "_id": `pj01_UC0${currentId++}`,
      "name": name,
      "description": usecasedescription,
      "type": usecasetype,
      "status": "Data Injection",
      "experiments": [
        {
          "id": "123",
          "name": "INS_Resolver Time",
          "dataset": "CMB_Echo 2",
          "description": "description will come here",
          "target": "Resolver Time",
          "runtime": "00:30:21",
          "status": "model building completed"
        },
        {
          "id": "1234",
          "name": "INS_Resolver Time",
          "dataset": "CMB_Echo 3",
          "description": "description will come here",
          "target": "Resolver Time",
          "runtime": "00:30:21",
          "status": "model building completed"
        }
      ],
      "lastedit": new Date(),
      "createdon": new Date()
    }
    initialData.unshift(newRecord);
    return Promise.resolve({
      data: initialData
    });
  }
};