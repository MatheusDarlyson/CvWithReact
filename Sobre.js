// SobreMim.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre mim</Text>
                <Text style={styles.info}>Atualmente estou em transição de carreira da área de Logística
                    e transportes para área de TI. Na área de logística, pude adquirir experiência em análise e
                    tratamento de dados e ferramentas Microsoft (principalmente Excel).
                    Além da minha experiência dentro da área de Logística, estou cursando o 3º período de
                    Análise e Desenvolvimento de Sistemas na Faculdade SENAC. No momento estou tendo a
                    oportunidade de desenvolver projetos utilizando os aprendizados adquiridos durante
                    o curso, tais como programação front e back-End (C, Python, JavaScript, Html e CSS),
                    desenvolvimento e consumo de API's com Node.Js e teste de rotas via Postman,
                    levantamento de requisitos e documentação, noções de MySql e bancos de dados
                    (modelagem, estruturação e consultas).
                    Além disso, estou aprimorando minhas habilidades em C# para construir
                    soluções robustas e eficientes. </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10,
    },
    info: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10,
        textAlign: 'left',
    },
});

export default Sobre;
