import {Text, Linking} from "react-native";
import WebView from "react-native-webview";

export function VideoPage() {
    const uri = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    return (<>
        <Text>Geniet van deze prachtige video!</Text>
        <WebView
            source={{uri}}
            onShouldStartLoadWithRequest={(request) => {
                if (request.url !== uri) {
                    Linking.openURL(request.url);
                    return false;
                }

                return true;
            }}
        />
    </>);
}