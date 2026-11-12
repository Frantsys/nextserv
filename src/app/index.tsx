import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { assets, colors, fonts } from "@/theme";
import { Button } from "@/components/atoms/Button";
import { useRouter } from "expo-router";


const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image
        source={assets.logo}
        style={styles.logoImage}
      />
      <Text style={styles.logoText}>
        NextServ
      </Text>
    </View>
  );
}

export default function WelcomeModal() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={assets.map}
        style={styles.background}
      />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.inner}>

          <View style={styles.brand}>
            <Logo />
            <Text style={styles.slogan}>
              Encontre. Agende. Resolva.
            </Text>
          </View>

          <View style={styles.actions}>
            <Button onPress={() => router.replace("/signup")} styles={styles.button}>
              <Text style={styles.primaryLabel}>
                Quero começar
              </Text>
            </Button>
            <Button variant="secondary" onPress={() => router.replace("/login")} styles={styles.button}>
              <Text style={styles.secondaryLabel}>
                Já sou cliente
              </Text>
            </Button>
          </View>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary["60"],
    zIndex: 5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    gap: 16,
  },
  inner: {
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
    height: "80%",
    width: "90%",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 72,
    height: 72,
  },
  logoText: {
    fontFamily: fonts.heading.semiBold,
    color: "#fff",
    fontSize: 32,
  },
  slogan: {
    fontFamily: fonts.heading.semiBold,
    color: "#fff",
    fontSize: 20,
  },
  actions: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  button: {
    width: "90%",
  },
  primaryLabel: {
    fontFamily: fonts.heading.semiBold,
    color: "#fff",
    fontSize: 16,
  },
  secondaryLabel: {
    fontFamily: fonts.heading.semiBold,
    color: colors.foreground["DEFAULT"],
    fontSize: 16,
  },
});
