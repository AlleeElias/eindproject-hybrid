import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

export default class Welcome extends React.Component {
    styles = {
        wrapper: {
            flex: 1,
            padding: 24,
            justifyContent: 'center',
        },
        header: {
            fontSize: 18,
            marginBottom: 18,
        },
        content: {
            fontSize: 12,
            marginBottom: 10,
            lineHeight: 18,
        },
    };

    showApp = (event) => {
        const {showApp} = this.props;
        event.preventDefault();

        if (showApp) {
            showApp();
        }
    };

    render() {
        return (
            <View style={this.styles.wrapper}>
                <Text style={this.styles.header}>Welcome to the Polar Wiki</Text>
                <Text style={this.styles.content}>
                    The polar bear (Ursus maritimus) is a hypercarnivorous bear whose native range lies largely within
                    the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses,
                    this includes the most northern regions of North America and Eurasia. It is the largest extant bear
                    species, as well as the largest extant land carnivore.[6][7] A boar (adult male) weighs around
                    350–700 kg (770–1,540 lb),[8] while a sow (adult female) is about half that size. Although it is the
                    sister species of the brown bear,[9] it has evolved to occupy a narrower ecological niche, with many
                    body characteristics adapted for cold temperatures, for moving across snow, ice and open water, and
                    for hunting seals, which make up most of its diet.[10] Although most polar bears are born on land,
                    they spend most of their time on the sea ice. Their scientific name means "maritime bear" and
                    derives from this fact. Polar bears hunt their preferred food of seals from the edge of sea ice,
                    often living off fat reserves when no sea ice is present. Because of their dependence on the sea
                    ice, polar bears are classified as marine mammals.
                </Text>
                <Text style={this.styles.content}>
                    Because of expected habitat loss caused by climate change, the polar bear is classified as a
                    vulnerable species. For decades, large-scale hunting raised international concern for the future of
                    the species, but populations rebounded after controls and quotas began to take effect.[12] For
                    thousands of years, the polar bear has been a key figure in the material, spiritual, and cultural
                    life of circumpolar peoples, and polar bears remain important in their cultures. Historically, the
                    polar bear has also been known as the "white bear".[13] It is sometimes referred to as the "nanook",
                    based on the Inuit term nanuq.[14]
                </Text>
            </View>
        );
    }
}

Welcome.defaultProps = {
    showApp: null,
};

Welcome.propTypes = {
    showApp: PropTypes.func,
};
