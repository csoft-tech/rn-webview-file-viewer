import React,{useEffect, useState} from 'react';
import { WebView } from 'react-native-webview';
import { Modal, View, Text,Alert } from 'react-native';
import styles from './styles';

export default function FileViewer(props) {
    let url = props.url;
    const[webViewUrl,setWebViewUrl] =useState(null);
    const[preview,setPreview] =useState(true);
    let _webView;


    useEffect(() =>{

    /**Get the extention of file */
    let ext;
   
        if(url) {
            const pdfURL = url.split('?');
            ext = pdfURL[0].split('.').reverse()[0];
        }
        
        /**Check for the extention of file */
        if(ext === 'pdf' && preview) {
            url = encodeURIComponent(url);
            setWebViewUrl(`https://docs.google.com/viewerng/viewer?url=${url}`); 
        }else{
            setWebViewUrl(`${url}`); 
        } 
    },[props.url])


    const onMessage = (event) => {
        const baseURI = event.nativeEvent.data    
        url = encodeURIComponent(url);
        if (baseURI !== `https://docs.google.com/viewerng/viewer?url=${url}` && baseURI !== props.url &&  preview) {
            setWebViewUrl(props.url)
            setPreview(false)
            Alert.alert(
                ' ',
                'Your file will be downloaded shortly.Please check your downloads.',
                [
                  {
                    text: 'OK',
                    onPress: () => {props.setFileData({isVisible: false, url: null})}, 
                  },
                ],
                { cancelable: false }
              );
        }   
      }

    const myInjectedJs = `    
    (function(){ 
      window.ReactNativeWebView.postMessage(window.document.baseURI);
    })();`
    if(webViewUrl && webViewUrl != null) {
        _webView = <WebView 
                        source={{ uri: webViewUrl }} 
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={true}
                        injectedJavaScript={myInjectedJs}
                        onMessage={onMessage}
                    />
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
               {props.showTransparentView? <View transparent style={styles.transparentView} /> :null}
                {_webView}
                <View style={styles.button}>{props.children}</View>
            </Modal>
        </View>
    )
}
