import {FlatList, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "../data/style";
import {DATA} from "../data/data";

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export function ListPage() {
    return (<>
        <View style={styles.item}>
            <Text style={styles.text}>Hieronder kan u wat bijnamen vinden van de mooie witte beer!</Text>
        </View>
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    </>);
}