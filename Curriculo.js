// Curriculo.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Curriculo = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Experiência</Text>
            <Text style={styles.item}> ° Cidade Alta Transportes e Turismo – Aux. Administrativo II: </Text>
            <Text style={styles.item}> 06/2021 - </Text>
            <Text style={styles.item}> Atuando no Controle de Manutenção, especificadamente realizando análises diárias
                de MKBF da frota. Desenvolvendo e otimizando planilhas e relatórios gerenciais para
                monitoramento de indicadores.
                Controle de programação e gestão de revisões preventivas da frota, bem como
                revisões periódicas para o órgão gestor. Além de diversas atividades inerentes ao
                Controle de Manutenção.
                Resolução de problemas, organização de demandas. </Text>
            <Text style={styles.titulo}>Formação</Text>
            <Text style={styles.item}> ° Análise e Desenvolvimento de Sistemas</Text>
            <Text style={styles.itemDesc}>Faculdade Senac Pe - 3º Período</Text>
            <Text style={styles.item}> ° Logística </Text>
            <Text style={styles.itemDesc}>Centro Universitário Dom Bosco</Text>
            <Text style={styles.titulo}>Soft Skills</Text>
            <Text style={styles.item}> - Organização</Text>
            <Text style={styles.item}> - Pensamento Crítico</Text>
            <Text style={styles.item}> - Proatividade</Text>
            <Text style={styles.item}> - Boa comunicação</Text>
            <Text style={styles.item}> - Gestão de tempo</Text>
            <Text style={styles.item}> - Trabalho em equipe</Text>
            <Text style={styles.item}> - Aprendizado contínuo</Text>
            <Text style={styles.item}> - Adaptabilidade</Text>
            <Text style={styles.titulo}>Techs</Text>
            <Text style={styles.item}>- C#</Text>
            <Text style={styles.item}>- C</Text>
            <Text style={styles.item}>- Java</Text>
            <Text style={styles.item}>- JavaScript, Html e CSS </Text>
            <Text style={styles.item}>- MySql </Text>
            <Text style={styles.item}>- Python </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: 26,
        fontWeight: 'bold',
        // marginBottom: 20,
        marginLeft: 10,
    },
    item: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10,
        textAlign: 'left',
    },
    itemDesc:{
        fontSize:18,
        marginLeft: 15,
        marginBottom: 25,
    },
});

export default Curriculo;
