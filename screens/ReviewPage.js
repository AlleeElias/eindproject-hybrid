import {Text, View, Button, Pressable} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import React, {useState} from "react";
import HTMLView from "react-native-htmlview/HTMLView";
import {styles} from "../data/style";

export function ReviewPage() {
    const [article, setArticle] = useState("");
    const richText = React.useRef();

    return (
        <View style={{height: '100%'}}>
            <SafeAreaView>
                {/*De Richtoolbar update de state van de richeditor*/}
                <RichToolbar style={styles.toolbar}
                             editor={richText}
                             actions={[actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1, actions.undo, actions.redo,]}
                             iconMap={{
                                 [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>),
                             }}
                             selectedIconTint={'#00ffff'}
                />
                <RichEditor
                    androidLayerType="software"
                    style={styles.textArea}
                    ref={richText}
                    placeholder={"Begin hier te typen."}
                    onChange={descriptionText => {
                        //console.log("descriptionText:", descriptionText);
                        setArticle(descriptionText);
                    }}
                />
                <View style={styles.item}>
                    <Text style={styles.text}>Gelieve uwen mening te controleren :)</Text>
                </View>
                <HTMLView value={article}>
                </HTMLView>
                <Pressable onPress={printStuff(article)} style={styles.item}>
                    <Text style={styles.text}>Verstuur!</Text>
                </Pressable>
            </SafeAreaView>
        </View>
    );
}

function printStuff(article) {
    console.log(article);
}