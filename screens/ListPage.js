import {FlatList, Text, StyleSheet, StatusBar, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const DATA = [
    {
        id: '1',
        title: 'Polar Bear',
    },
    {
        id: '2',
        title: 'Snow Bear',
    },
    {
        id: '3',
        title: 'White Bear',
    },
    {
        id: '4',
        title: 'The Great White Bear',
    },
    {
        id: '5',
        title: 'Nanook',
    },
    {
        id: '6',
        title: 'Yeti Bear',
    },
    {
        id: '7',
        title: 'Beary Allen',
    },
    {
        id: '8',
        title: 'The Bear',
    },
    {
        id: '9',
        title: 'Big Bear',
    },
];

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export function ListPage() {
    return (<>
        <Text>Hieronder kan u wat bijnamen vinden van de mooie witte beer!</Text>
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    </>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f8f8ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});