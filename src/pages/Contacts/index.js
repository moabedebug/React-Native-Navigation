import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function Contacts({navigation}){
    return(
        <View>
            <View style={styles.container}>
                <Text>Nome: João Silva</Text>
                <Text>Telefone: (77) 981061853</Text>
                <Text
                    style={styles.ButtonText}
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'João Silva',
                        telefone:'(77) 981061853',
                        endereço: 'Rua das Flores',
                        numero: '769',
                        profissao: 'Carpinteiro',
                        email: 'joãosilva2018@gmail.com'

                    }
                    )}
                >Aperte</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text>Nome: Amanda Silva</Text>
                <Text>Telefone: (77) 988642314</Text>
                <Text
                    style={styles.ButtonText}
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'Amanda Silva',
                        telefone:'(77) 988642314',
                        endereço: 'Rua D',
                        numero: '6',
                        profissao: 'Atriz',
                        email: 'amandasilva2018@gmail.com'

                    }
                    )}
                >Aperte</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonText: {
        width: '50%',
        textAlign: "center",
        height: 50,
        padding: 10,
        backgroundColor: "red"
    },
    container: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})

