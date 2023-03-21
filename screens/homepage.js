import {Button, Text} from "react-native";

export function homepage({navigation}) {
    return (<>
        <Text>Dit is de homepagina!</Text>
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