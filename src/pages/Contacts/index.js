import React from "react";
import { View, Text } from "react-native"

export default function Contacts({navigation}){
    return(
        <View>
            <View>
                <Text>Nome: João Silva</Text>
                <Text>Telefone: (77) 981061853</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'João Silva',
                        telefone:'(77) 981061853',
                        endereço: 'Rua das Flores',
                        numero: '769',
                        profissão: 'Carpinteiro',
                        email: 'moabeluis2018@gmail.com'

                    }
                    )}
                >Aperte</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text>Nome: Amanda Silva</Text>
                <Text>Telefone: (77) 70707070</Text>
                <Text
                    onPress={() => navigation.navigate('Information')}
                >Aperte</Text>
            </View>
        </View>
    )
}