import React from 'react';
import { WebView } from 'react-native-webview';

export default function FileViewer(props) {
    
    let webViewUrl;
    const url = props.url;
    
    /**Get the extention of file */
    let ext = url.split('.').reverse()[0];

    /**Check for the extention of file */
    if(ext === 'pdf') {
        webViewUrl = `https://docs.google.com/viewerng/viewer?url=${url}`;
    } else {
        webViewUrl = url;
    }
    
    return (
        <WebView source={{ uri: webViewUrl }} />
    )
}