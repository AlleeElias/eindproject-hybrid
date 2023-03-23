import {Button, Image, StyleSheet, Text} from "react-native";

export function HomePage({navigation}) {
    return (<>
        <Text>Dit is de homepagina!
            In deze app zal je wat leuke info vinden over het prachtige volk sneeuwbeer!
            Enjoy ur fricking stay :)
        </Text>
        <Image source={require('../assets/profilepic.jpeg')}
               style={{minHeight: 100, maxHeight: 200, minWidth: 100, maxWidth: 400}}/>
        <Button title={'Wiki'}
                onPress={() =>
                    navigation.navigate('Wiki')
                }
        />
        <Button title={'Video'}
                onPress={() =>
                    navigation.navigate('Video')
                }
        />
        <Button title={'List'}
                onPress={() =>
                    navigation.navigate('List')
                }
        />
        <Button title={'Review'}
                onPress={() =>
                    navigation.navigate('Review')
                }
        />
    </>);
}