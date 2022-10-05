import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";

const styles = StyleSheet.create({
  div: {
    backgroundColor: "#101010",
    minHeight: 1000,
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    padding: 20,
    backgroundColor: "#000",
  },

  menuCenter: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tituloMenu: {
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
    fontSize: 35,
  },
  titulo: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    margin: 20,
  },
  card: {
    backgroundColor: "#444",
    margin: 10,
    padding: 20,
    borderRadius: 5,
    display: "flexBlock",
    width: 500,
  },
  item: {
    padding: 10,
    paddingLeft: 0,
    fontSize: 25,
    height: 44,
    fontWeight: 700,
    color: "#fff",
  },
  imagem: {
    width: 250,
    height: 350,
    borderRadius: 5,
  },
  imagemCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#444",
    margin: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
});

export default class App extends Component<{}> {
  render() {
    var link =
      "https://github.com/HenriqueMendes7/PAM---Henrique-Mendes-3DA/blob/main/onepunchman/assets/img/";
    var imagens = [
      [
        "Blast.jpg?raw=true",
        "Tatsumaki.jpg?raw=true",
        "Silver%20Fang.jpg?raw=true",
        "Samurai%20Atomico.jpg?raw=true",
        "Child%20Emperor.jpg?raw=true",
        "BofoyAnime.jpg?raw=true",
        "King.jpg?raw=true",
        "Zombieman.jpg?raw=true",
        "Drive%20Knight.jpg?raw=true",
        "Pig%20God.jpg?raw=true",
        "Darkshine.jpg?raw=true",
        "Watchdog%20Man.png?raw=true",
        "Flash%20Flashy.jpg?raw=true",
        "Genos.jpg?raw=true",
        "Tank-Top%20Master.jpg?raw=true",
        "Metal%20Bat.jpg?raw=true",
        "Puri%20Puri%20Prisioner.jpg?raw=true",
      ],
      [
        "1. Blast",
        "2. Tatsumaki",
        "3. Silver Fang",
        "4. Atomic Samurai",
        "5. Child Emperor",
        "6. Metal Knight",
        "7. King",
        "8. Zombieman",
        "9. Drive Knight",
        "10. Pig God",
        "11. Darkshine",
        "12. Watchdog Man",
        "13. Flash Flashy",
        "14. Genos",
        "15. Tank-Top Master",
        "16. Metal Bat",
        "17. Puri-Puri Prisoner",
      ],
    ];

    return (
      <View style={styles.div}>
        <Text style={styles.menu}>
          <Text style={styles.menuCenter}>
            <Text style={styles.tituloMenu}>One Punch Man</Text>
          </Text>
          <Text style={styles.menuCenter}>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Heróis</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Monstros</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Classe S</Text>
            </Pressable>
          </Text>
        </Text>

        <Text style={styles.titulo}>Classe S</Text>

        <Text style={styles.section}>
          {imagens[(1, 0)].map((item, key) => {
            return (
              <Text style={styles.card}>
                <Text style={styles.imagemCard}>
                  <Image style={styles.imagem} source={link + item} />
                  {"\n"}
                  <Text style={styles.item} key={key}>
                    {imagens[1][key]}
                  </Text>
                </Text>
              </Text>
            );
          })}
        </Text>
      </View>
    );
  }
}
