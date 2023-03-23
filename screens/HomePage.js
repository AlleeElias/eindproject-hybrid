import {Image, Pressable,Text, View} from "react-native";
import {styles} from "../data/style";

export function HomePage({navigation}) {
    return (<>
        <View style={styles.item}>
            <Text style={styles.text}>Dit is de homepagina!
                In deze app zal je wat leuke info vinden over het prachtige volk sneeuwbeer!
                Enjoy ur fricking stay :)
            </Text>
        </View>
        <Image source={require('../assets/profilepic.jpeg')}
               style={{minHeight: 100, maxHeight: 200, minWidth: 100, maxWidth: 400}}/>
        <Pressable style={styles.item}
                   onPress={() =>
                       navigation.navigate('Wiki')
                   }
        ><Text style={styles.text}>Wiki</Text></Pressable>
        <Pressable style={styles.item}
                   onPress={() =>
                       navigation.navigate('Video')
                   }
        ><Text style={styles.text}>Video</Text></Pressable>
        <Pressable style={styles.item}
                   onPress={() =>
                       navigation.navigate('List')
                   }
        ><Text style={styles.text}>List</Text></Pressable>
        <Pressable style={styles.item}
                   onPress={() =>
                       navigation.navigate('Review')
                   }
        ><Text style={styles.text}>Review</Text></Pressable>
    </>);
}