import {Text, Linking, View} from "react-native";
import WebView from "react-native-webview";
import {styles} from "../data/style";

export function VideoPage() {
    const uri = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    return (<>
        <View style={styles.item}>
            <Text style={styles.text}>Geniet van deze prachtige video!</Text>
        </View>
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