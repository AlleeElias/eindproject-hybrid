import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomePage} from "./screens/HomePage";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {WikiPage} from "./screens/WikiPage";
import React from "react";
import {VideoPage} from "./screens/VideoPage";
import {ListPage} from "./screens/ListPage";
import {ReviewPage} from "./screens/ReviewPage";

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <EliApp></EliApp>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

function EliApp() {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomePage}/>
                <Stack.Screen name={'Wiki'} component={WikiPage}/>
                <Stack.Screen name={'Video'} component={VideoPage}/>
                <Stack.Screen name={'List'} component={ListPage}/>
                <Stack.Screen name={'Review'} component={ReviewPage}/>
            </Stack.Navigator>
        </>
    );
}
