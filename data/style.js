import {StatusBar, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f8f8ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#a9a9a9',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    title: {
        fontSize: 32,
        color: '#a9a9a9',
    },
    toolbar: {
        height: '25%',
        backgroundColor: 'powderblue',
    },
    textArea: {
        height: '95%'
    }
})