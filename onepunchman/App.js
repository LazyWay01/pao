import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

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





export default class App extends Component<{}> {
 render() {
   var imagens = [
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
   ];

    var nomes = [
      '1. Blast',
      '2. Tatsumaki',
      '3. Silver Fang',
      '4. Atomic Samurai',
      '5. Child Emperor',
      '6. Metal Knight',
      '7. King',
      '8. Zombieman',
      '9. Drive Knight',
      '10. Pig God',
      '11. Darkshine',
      '12. Watchdog Man',
      '13. Flash Flashy',
      '14. Genos',
      '15. Tank-Top Master',
      '16. Metal Bat',
      '17. Puri-Puri Prisoner',
    ];
    
   return (
     <View style={styles.div}>
      <Text style={styles.menu}>
        <Text style={styles.tituloMenu}>One Punch Man</Text>
        {'\n'}
        {'\n'}
        <Button title="Heróis"/>
        <Button title="Monstros"/>
        <Button title="Classe S"/>
      </Text>

      <Text style={styles.titulo}>Classe S</Text>

      <Text style={styles.section}>
          { nomes.map((item, key)=>(
            <Text style={styles.card}>
            <Image style={styles.imagem} source={imagens[key]} />
            {'\n'}
            <Text style={styles.item} key={key}>{item}</Text>
            </Text>
            )
          )}
      </Text>
    </View>
   );
 }
}
