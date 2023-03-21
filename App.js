import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {homepage} from "./screens/homepage";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {wikipage} from "./screens/wikipage";
import React from "react";
import {Button} from "react-native";
import {videopage} from "./screens/videopage";

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
                <Stack.Screen name={'Home'} component={homepage}/>
                <Stack.Screen name={'Wiki'} component={wikipage}/>
                <Stack.Screen name={'Video'} component={videopage}/>
            </Stack.Navigator>
        </>
    );
}
