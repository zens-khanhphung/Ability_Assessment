import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "@/components/Themed";
import { Image } from "react-native";
import "../i18n";
import { useTranslation } from "react-i18next";
import jokes from "@/constants/JokesList.json";
import { useState } from "react";

const { height: windowHeight } = Dimensions.get("window");
const HEADER_HEIGHT = 70;
const FOOTER_HEIGHT = 245;

export default function Index() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [votes, setVotes] = useState<{ [key: number]: "like" | "dislike" }>({});

  const currentJoke = jokes[currentIndex];

  const handleVote = (vote: "like" | "dislike") => {
    setVotes((prev) => ({ ...prev, [currentIndex]: vote }));

    if (currentIndex + 1 < jokes.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(-1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("@/assets/images/logo.jpg")}
            style={styles.headerImage}
            resizeMode="contain"
          />
          <View style={styles.info}>
            <View style={styles.user}>
              <Text style={styles.hanby}>{t("hanby")}</Text>
              <Text style={styles.name}>{t("name")}</Text>
            </View>
            <Image
              source={require("@/assets/images/avatar.jpg")}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
        </View>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.body_content}>
            <View style={styles.title}>
              <Text style={styles.slogan}>{t("slogan")}</Text>
              <Text style={styles.note}>{t("note")}</Text>
            </View>

            <View style={styles.content_joke}>
              {currentIndex === -1 ? (
                <Text style={styles.joke}>{t("end_jokes")}</Text>
              ) : (
                <>
                  <Text style={styles.joke}>{currentJoke}</Text>
                  <View style={styles.buttonGroup}>
                    <TouchableOpacity
                      style={styles.buttonBlue}
                      onPress={() => handleVote("like")}
                    >
                      <Text style={styles.buttonText}>{t("funny")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.buttonGreen}
                      onPress={() => handleVote("dislike")}
                    >
                      <Text style={styles.buttonText}>{t("not_funny")}</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </View>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <View style={styles.footer}>
            <Text style={styles.footerText}>{t("footer_text")}</Text>
            <Text style={styles.company}>{t("company")}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    width: "100%",
    height: 65,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  headerImage: {
    width: 60,
    height: 60,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  user: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,
  },
  hanby: {
    fontWeight: "400",
    fontSize: 14,
    color: "#b4b4b4",
  },
  name: {
    fontWeight: "600",
    fontSize: 14,
    color: "#575757",
  },
  content: {
    width: "100%",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  body_content: {
    minHeight: windowHeight - HEADER_HEIGHT - FOOTER_HEIGHT,
  },
  title: {
    width: "100%",
    backgroundColor: "#28b363",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  slogan: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "600",
    textAlign: "center",
  },
  note: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 30,
  },
  content_joke: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  joke: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    color: "#717171",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 120,
  },
  buttonBlue: {
    backgroundColor: "#2d7edc",
    padding: 12,
    width: 150,
    alignItems: "center",
  },
  buttonGreen: {
    backgroundColor: "#28b363",
    padding: 12,
    width: 150,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "100%",
  },
  footer: {
    backgroundColor: "#ffffff",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#9e9e9e",
    textAlign: "center",
  },
  company: {
    fontSize: 18,
    color: "#686868",
    marginTop: 20,
  },
});
