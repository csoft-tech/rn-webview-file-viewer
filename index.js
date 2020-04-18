import React from 'react';
import { WebView } from 'react-native-webview';
import { Modal, View, Text } from 'react-native';
import styles from './styles';

export default function FileViewer(props) {
    let webViewUrl;
    let _webView;
    const url = props.url;
    
    /**Get the extention of file */
    let ext;
    if(url) {
        ext = url.split('.').reverse()[0];
    } 
    
    /**Check for the extention of file */
    if(ext === 'pdf') {
        webViewUrl = `https://docs.google.com/viewerng/viewer?url=${url}`;        
    } else {
        webViewUrl = url;
    }
    
    if(webViewUrl) {
        _webView = <WebView source={{ uri: webViewUrl }} />;
    } else {
        _webView = <Text>No url found!</Text>
    }
    
    return (
        <View style={styles.webView}>
            <Modal 
                animationType = {"slide"} 
                transparent = {false}
                visible = {props.isVisible}
            >
                <WebView source={{ uri: webViewUrl }} />
                <View style={styles.button}>{props.children}</View>
            </Modal>
        </View>
    )
}