import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Đây là Header</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Tab One</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Đây là Footer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    height: 30,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    padding: 10,
    backgroundColor: "#fffae3",
    width: "100%",
    alignItems: "center",
    height: 60,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  footer: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#666",
  },
});
