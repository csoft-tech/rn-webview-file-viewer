# rn-webview-file-viewer
Light weight react native library for file viewer using react-native-webview.

## Getting Started

- `react-native` version used - 0.60.5
- Supported `file types`: `pdf`, `png`, `jpg`, `txt`, `docx`

#### Peer Dependencies

[react-native-webview](https://www.npmjs.com/package/react-native-webview) | React Native WebView is a modern, well-supported, and cross-platform WebView for React Native

1. `npm install react-native-webview --save`

## Installation

1. Run `npm install rn-webview-file-viewer --save`


## Usage

To use react-native-qrcode-scanner, `import` the `rn-webview-file-viewer` module and use the `<FileViewer />` tag.

Here is an example of basic usage:

```js
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import FileViewer from 'rn-webview-file-viewer';

function FileViewScreen() {

    const url = "http://www.africau.edu/images/default/sample.pdf";
    
    return (
        <FileViewer url = {url}/>
    );
}

AppRegistry.registerComponent('default', () => ScanScreen);
```

## Sample JSON Input
```js
const data = {
  headerData: {
    hospital: {
      hospitalName: "ANNASAWMY MUDALIAR GENERAL HOSPITAL",
      hospitalAddress:
        "No. 1, Moore Market Square, Bourdillon Road, Frazer Town, Bangalore.",
      contactNo: "080-42404111/4122",
      eMail: "dhs@gmail.com",
      HospitalLogo:
        "http://annasawmyhospital.com/wp-content/uploads/2018/04/hospital_logo.jpg"
    },
    patient: {
      patientName: "Jeenath Begum",
      patientId: "781/2020",
      dateOfBirth: "05-02-1960",
      gender: "F"
    },
    report: {
      reportTitle: "Medical Report",
      fromDate: "09-04-2020",
      toDate: "09-04-2020"
    }
  },
  footerData: {
    personDetails: {
      doctorName: "Dr. KM Dharmarajan",
      medicalCouncilNumber: "49962"
    },
    footNote: "Prescription invalild without prescribing Doctors",
    dateOfPrint: "09-04-2020"
  },
  reportData: {
    numberOfTables: 2,
    table_data: [
      {
        numberOfColumns: 3,
        data: [
          {
            col1: "1",
            col2: "2",
            col3: "3"
          },
          {
            col1: "1",
            col2: "2",
            col3: "3"
          },
          {
            col1: "1",
            col2: "2",
            col3: "3"
          }
        ],
        above_table_data: { tableTitle: "title 1" },
        below_table_data: { tableFooter: "footer 1" }
      },
      {
        numberOfColumns: 3,
        data: [
          {
            col11: "1",
            col22: "2",
            col33: "3"
          },
          {
            col11: "11",
            col22: "22",
            col33: "33"
          },
          {
            col11: "111",
            col22: "222",
            col33: "333"
          }
        ],
        above_table_data: { tableTitle: "table 2" },
        below_table_data: { tableFooter: "footer 2" }
      }
    ]
  };
```