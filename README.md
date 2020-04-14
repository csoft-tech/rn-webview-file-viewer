# rn-webview-file-viewer
Light weight react native library for file viewer using react-native-webview.

## Getting Started

- `react-native` version used - 0.60.5
- Supported `file types`: `pdf`, `png`, `jpg`, `txt`, `docx`

#### Peer Dependencies

[react-native-webview](https://www.npmjs.com/package/react-native-webview) | React Native WebView is a modern, well-supported, and cross-platform WebView for React Native

1. `npm install react-native-webview --save`

## Installation

1. Run `npm install @csoft-tech/rn-webview-file-viewer@1.0.0 --save`


## Usage

To use rn-webview-file-viewer, `import` the `@csoft-tech/rn-webview-file-viewer` module and use the `<FileViewer />` tag.

Here is an example of basic usage:

```js
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import FileViewer from '@csoft-tech/rn-webview-file-viewer';

function FileViewScreen() {

    const url = "http://www.africau.edu/images/default/sample.pdf";
    
    return (
        <FileViewer url = {url}/>
    );
}

AppRegistry.registerComponent('default', () => ScanScreen);
```
