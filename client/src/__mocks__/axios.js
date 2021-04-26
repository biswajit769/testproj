'use strict';

 
let currentId = 3;

let textCleanInitialData = [{
  "columnname":"INS_Resolver Time",
  "datatype":"int",
},{
  "columnname":"CMB_Echo 2",
  "datatype":"float",
},{
  "columnname":"CMB_Echo 2",
  "datatype":"float",
}]

let experimentfeatureselectionData = [{
  "dataset":"column 1",
},{
  "dataset":"column 2",
},{
  "dataset":"column 3",
}]


let experimentTargetColumn = [{
  "columnname":"PCT",
  "datatype":"int",
},{
  "columnname":"Memory Mean",
  "datatype":"float",
},{
  "columnname":"CPU Mean",
  "datatype":"int",
},{
  "columnname":"Max At",
  "datatype":"int",
},{
  "columnname":"PCT",
  "datatype":"int",
}]

let datainformation = [{
  "info": "info",
  "field1": "Field1",
  "field2": "Field2",
  "field3": "Field3",
  "field4": "Field4",
  "field5": "Field5",
},{
  "info": "info",
  "field1": "Field1",
  "field2": "Field2",
  "field3": "Field3",
  "field4": "Field4",
  "field5": "Field5",
},{
  "info": "info",
  "field1": "Field1",
  "field2": "Field2",
  "field3": "Field3",
  "field4": "Field4",
  "field5": "Field5",
},{
  "info": "info",
  "field1": "Field1",
  "field2": "Field2",
  "field3": "Field3",
  "field4": "Field4",
  "field5": "Field5",
},{
  "info": "info",
  "field1": "Field1",
  "field2": "Field2",
  "field3": "Field3",
  "field4": "Field4",
  "field5": "Field5",
},{
  "info": "info",
  "field1": "Field1",
  "field2": "Field2",
  "field3": "Field3",
  "field4": "Field4",
  "field5": "Field5",
},{
  "info": "info",
  "field1": "Field1",
  "field2": "Field2",
  "field3": "Field3",
  "field4": "Field4",
  "field5": "Field5",
}]
let dataCleanData = [
  {
    "columnname":"INS_Resolver Time",
    "datatype":"int"
  },
  {
    "columnname":"CMB_Echo 2",
    "datatype":"FLOAT"
  },
  {
    "columnname":"CMB_Echo 2",
    "datatype":"FLOAT"
  }
]
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
},{
  "_id": "pj01_UC03",
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

let intitailExperiments = [
  {
    "id": "123",
    "name": "INS_Resolver Time",
    "dataset": "CMB_Echo 2",
    "description": "description will come here",
    "target": "Resolver Time",
    "runtime": "00:30:21",
    "status": "data ingestion completed",
    "cstat":"da"
  },
  {
    "id": "1234",
    "name": "INS_Resolver Time",
    "dataset": "CMB_Echo 3",
    "description": "description will come here",
    "target": "Resolver Time",
    "runtime": "00:30:21",
    "status": "model building completed",
    "cstat":"mb"
  }
];

module.exports = {
  get: (url) => {
    if(url.includes("getexperiments")){
      initialData = intitailExperiments;
    }else if(url.includes("getdatainformation")){
      initialData = datainformation;
    }else if(url.includes("datacleanservice")){
      initialData = dataCleanData;
    }else if(url.includes("textcleanservice")){
      initialData = textCleanInitialData;
    }else if(url.includes("experimenttargetcolumn")){
      initialData = experimentTargetColumn;
    }else if(url.includes("experimentfeatureselection")){
      initialData = experimentfeatureselectionData;
    }else if (url.includes("getdataset")){
      initialData = [
        {
          "id": "123",
          "dataset": "CMB_Echo 1",
          "gbgf": "CMB",
          "sl": "eChannels",
          "rows": "3K",
          "column": "12",
          "uploaded": "20 Feb, 2021 | 30:21"
        },
        {
          "id": "345",
          "dataset": "CMB_Echo 1",
          "gbgf": "CMB",
          "sl": "eChannels",
          "rows": "3K",
          "column": "12",
          "uploaded": "20 Feb, 2021 | 30:21"
        },
        {
          "id": "1233",
          "dataset": "CMB_Echo 1",
          "gbgf": "CMB",
          "sl": "eChannels",
          "rows": "3K",
          "column": "12",
          "uploaded": "20 Feb, 2021 | 30:21"
        },
        {
          "id": "3454",
          "dataset": "CMB_Echo 1",
          "gbgf": "CMB",
          "sl": "eChannels",
          "rows": "3K",
          "column": "12",
          "uploaded": "20 Feb, 2021 | 30:21"
        },
        {
          "id": "1232",
          "dataset": "CMB_Echo 1",
          "gbgf": "CMB",
          "sl": "eChannels",
          "rows": "3K",
          "column": "12",
          "uploaded": "20 Feb, 2021 | 30:21"
        },
        {
          "id": "3451",
          "dataset": "CMB_Echo 1",
          "gbgf": "CMB",
          "sl": "eChannels",
          "rows": "3K",
          "column": "12",
          "uploaded": "20 Feb, 2021 | 30:21"
        },
        {
          "id": "1238",
          "dataset": "CMB_Echo 1",
          "gbgf": "CMB",
          "sl": "eChannels",
          "rows": "3K",
          "column": "12",
          "uploaded": "20 Feb, 2021 | 30:21"
        },
        {
          "id": "3457",
          "dataset": "CMB_Echo 1",
          "gbgf": "CMB",
          "sl": "eChannels",
          "rows": "3K",
          "column": "12",
          "uploaded": "20 Feb, 2021 | 30:21"
        }
      ];
    } else if(url.includes("usecases")){
      initialData = [{
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
      },{
        "_id": "pj01_UC03",
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
    }
    return Promise.resolve({
      data: initialData
    });
  },
  post: (url, data) => {
    console.log("post request====",url);
    let newRecord;
    if(url.includes("saveexperiments")){
      initialData = intitailExperiments;
      let name = "";
      name = (data && data.experimentname !== 'undefined')?data.experimentname:"";
      let usecasedescription = (data && data.experimentdescription !== 'undefined')?data.experimentdescription:"";
      let usecasetype = (data && data.dataset !== 'undefined')?data.dataset:"";
      newRecord = {
        "id": "123",
        "name": name,
        "dataset": usecasetype,
        "description": usecasedescription,
        "target": "Resolver Time",
        "runtime": "00:30:21",
        "status": "model building completed"
      }
    }else if(url.includes("usecases")){
      console.log("intial data====",initialData);
      let name = "";
      name = (data && data.usecasename !== 'undefined')?data.usecasename:"";
      let usecasedescription = (data && data.usecasedescription !== 'undefined')?data.usecasedescription:"";
      let usecasetype = (data && data.usecasetype !== 'undefined')?data.usecasetype:"";
      newRecord = {
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
    }
    
    initialData.unshift(newRecord);
    return Promise.resolve({
      data: initialData
    });
  }
};