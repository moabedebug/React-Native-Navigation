import React from "react";
import { View, Text } from "react-native"

export default function Information({ route }){
    return(
        <View>
            <Text>Information</Text>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereço: {route.params?.endereço}</Text>
            <Text>numero: {route.params?.numero}</Text>
            <Text>Profissão: {route.params?.profissao}</Text>
            <Text>Email: {route.params?.email}</Text>
        </View>
    )
}