import React, { useState } from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import Curriculo from './Curriculo';
import SobreMim from './Sobre';
import Perfil from './assets/perfil.jpg';

// Conteúdo da pagina principal e renderizações 
const App = () => {
  const [abaAtiva, setAbaAtiva] = useState('Curriculo');

  // Laço condicional que exibe as info da pag de acordo com a navegação do usuário
  const renderizarConteudo = () => {
    if (abaAtiva === 'Curriculo') {
      return <Curriculo />;
    } else if (abaAtiva === 'SobreMim') {
      return <SobreMim />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Linha dupla header */}
      <View style={styles.header}>
      </View>
      {/*Header (nome/foto) */}
      <View style={styles.header}>
        <View>
        <Text style={styles.meuNome}>Matheus</Text>
        <Text style={styles.meuNome}>Darlyson</Text>
        </View>
      <View style={styles.foto}> 
        <Image source={Perfil} style={{width: 100, height: 100}}/>
      </View> 
      </View>

      {/* Área para renderizar os componentes */}
      <View style={styles.content}>{renderizarConteudo()}</View>

      {/* Menu inferior */}
      <View style={styles.menu}>
        <Text
          style={[styles.menuItem, abaAtiva === 'Curriculo' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('Curriculo')}
        >
          Minhas informações
        </Text>
        <Text
          style={[styles.menuItem, abaAtiva === 'SobreMim' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('SobreMim')}
        >
          Sobre mim
        </Text>
      </View>
    </View>
  );
};

// Estilos pagina principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79ada2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#09292c',
  },
  meuNome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#09292c',
  },
  menuItem: {
    fontSize: 18,
    color: '#09292c',
  },
  menuItemAtiva: {
    fontWeight: 'bold',
    color: 'blue',
  },
  Perfil:{
    justifyContent:'flex-end'
  }
});

export default App;