import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {homepage} from "./screens/homepage";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {wikipage} from "./screens/wikipage";
import React from "react";
import {Button} from "react-native";
import {videopage} from "./screens/videopage";
import {listpage} from "./screens/listpage";
import {reviewpage} from "./screens/reviewpage";

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
                <Stack.Screen name={'List'} component={listpage}/>
                <Stack.Screen name={'Review'} component={reviewpage}/>
            </Stack.Navigator>
        </>
    );
}
