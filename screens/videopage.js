import {Text, StyleSheet} from "react-native";
import Video from "react-native-video";

export function videopage() {
    return (<>
        <Text>Geniet van deze prachtige video!</Text>
        <Video source={{uri: "beelden"}}   // Can be a URL or a local file.
               ref={(ref) => {
                   this.player = ref
               }}                                      // Store reference
               onBuffer={this.onBuffer}                // Callback when remote video is buffering
               onError={this.videoError}               // Callback when video cannot be loaded
               style={styles.backgroundVideo}/>
    </>);
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});