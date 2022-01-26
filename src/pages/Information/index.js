import React from "react";
import { View, Text } from "react-native"

export default function Information({navigation}){
    return(
        <View>
            <Text>Information</Text>
            <Text
                onPress={() => navigation.navigate('Contacts')}
            >Aperte</Text>
        </View>
    )
}