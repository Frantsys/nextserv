import { View, Text } from "react-native";
import { Image } from "expo-image";
import { assets, colors, fonts } from "@/theme";
import { Button } from "@/components/Button";
import { useRouter } from "expo-router";


const Logo = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.logo}
        style={{ width: 72, height: 72 }}
      />
      <Text style={{ fontFamily: fonts.heading.semiBold, color: "#fff", fontSize: 32 }}>
        NextServ
      </Text>
    </View>
  );
}

export default function WelcomeModal() {

  const router = useRouter();

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Image
        source={assets.map}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <View style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: colors.primary["60"],
        zIndex: 5
      }} />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", zIndex: 10, gap: 16 }}>
        <View style={{ alignItems: "center", justifyContent: "space-between", zIndex: 10, height: "80%", width: "90%" }}>
          
          <View style={{
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60%",
          }}>
            <Logo />
            <Text style={{ fontFamily: fonts.heading.semiBold, color: "#fff", fontSize: 20 }}>
              Encontre. Agende. Resolva.
            </Text>
          </View>

          <View 
            style={{ width: "100%", display: "flex", alignItems: "center", gap: 16 }}
          >
            <Button onPress={() => router.replace("/signup")} styles={{ width: "90%" }}>
              <Text style={{ fontFamily: fonts.heading.semiBold, color: "#fff", fontSize: 16 }}>
                Quero começar
              </Text>
            </Button>
            <Button variant="secondary" onPress={() => router.replace("/login")} styles={{ width: "90%" }}>
              <Text style={{ fontFamily: fonts.heading.semiBold, color: colors.foreground["DEFAULT"], fontSize: 16 }}>
                Já sou cliente
              </Text>
            </Button>
          </View>

        </View>
      </View>

          
    </View>
  );
}