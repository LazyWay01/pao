import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const array = [
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Blast.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Tatsumaki.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Silver%20Fang.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Samurai%20Atomico.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Child%20Emperor.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/BofoyAnime.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/King.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Zombieman.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Drive%20Knight.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Pig%20God.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Darkshine.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Watchdog%20Man.png?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Flash%20Flashy.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Genos.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Tank-Top%20Master.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Metal%20Bat.jpg?raw=true',
  'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Puri%20Puri%20Prisioner.jpg?raw=true',

]; //criando tabela

const logo = {
  uri: 'https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/Blast.jpg?raw=true',
  width: 64,
  height: 64,
};

const styles = StyleSheet.create({
  div: {
    backgroundColor: '#101010',
    minHeight: 1000,
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    padding: 20,
    backgroundColor: '#000',
  },
  tituloMenu: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 35,
  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    margin: 20,
  },
  card: {
    backgroundColor: '#444',
    margin: 10,
    padding: 20,
    borderRadius: 5,
    display: 'flexBlock',
    width: 300,
  },
  item: {
    padding: 10,
    paddingLeft: 0,
    fontSize: 25,
    height: 44,
    color: '#fff',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  btn: {
    color: '#fff',
    marginLeft: 10,
    padding: 7,
    fontSize: 18,
    backgroundColor: '#222222',
    borderRadius: 5,
    textAlign: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.div}>
      <Text style={styles.menu}>
        <Text style={styles.tituloMenu}>One Punch Man</Text>
        {'\n'}
        {'\n'}
        <Text style={styles.btn}>Herois</Text>
        <Text style={styles.btn}>Monstros</Text>
        <Text style={styles.btn}>Classe S</Text>
      </Text>

      <Text style={styles.titulo}>Classe S</Text>
      <Text style={styles.section}>
        <Text style={styles.card}>
          <Image style={styles.imagem} source={logo} />
          {'\n'}
          <Text style={styles.item}>1. Blast</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[1]} />
          {'\n'}
          <Text style={styles.item}>2. Tatsumaki</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[2]} />
          {'\n'}
          <Text style={styles.item}>3. Silver Fang</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[3]} />
          {'\n'}
          <Text style={styles.item}>4. Atomic Samurai</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[4]} />
          {'\n'}
          <Text style={styles.item}>5. Child Emperor</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[5]} />
          {'\n'}
          <Text style={styles.item}>6. Metal Knight</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[6]} />
          {'\n'}
          <Text style={styles.item}>7. King</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[7]} />
          {'\n'}
          <Text style={styles.item}>8. Zombieman</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[8]} />
          {'\n'}
          <Text style={styles.item}>9. Drive Knight</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[9]} />
          {'\n'}
          <Text style={styles.item}>10. Pig God</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[10]} />
          {'\n'}
          <Text style={styles.item}>11. Darkshine</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[11]} />
          {'\n'}
          <Text style={styles.item}>12. Watchdog Man</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[12]} />
          {'\n'}
          <Text style={styles.item}>13. Flash Flashy</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[13]} />
          {'\n'}
          <Text style={styles.item}>14. Genos</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[14]} />
          {'\n'}
          <Text style={styles.item}>15. Tank-Top Master</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[15]} />
          {'\n'}
          <Text style={styles.item}>16. Metal Bat</Text>
        </Text>

        <Text style={styles.card}>
          <Image style={styles.imagem} source={array[16]} />
          {'\n'}
          <Text style={styles.item}>17. Puri-Puri Prisoner</Text>
        </Text>
      </Text>
    </View>
  );
};

export default App;
