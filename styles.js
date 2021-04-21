import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    webView: {
        flex: 1,
    },
    button: {
        backgroundColor: '#fff',
        position: 'absolute',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        right: 10,
        bottom: 10,
        borderRadius: 100,
        width: 70,
        height: 70,
    },
    transparentView:{zIndex:1,height:60,position:'absolute',flex:1,width:100,right:0},
})
