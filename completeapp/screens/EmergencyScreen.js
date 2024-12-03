import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  Image,
} from "react-native";

export default function EmergencyScreen() {
  const makeCall = (number) => {
    Alert.alert(
      `call ${number}`,
      ` ${number}112 신고하실래요?`,
      [
        { text: "취소", style: "cancel" },
        { text: "확인", onPress: () => Linking.openURL(`tel:${number}`) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>긴급신고</Text>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => makeCall("112")}
        >
          <Image
            source={{ uri: "https://example.com/emergency-icon-112.png" }}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>긴급범죄 신고</Text>
          <Text style={styles.number}>112</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => makeCall("119")}
        >
          <Image
            source={{ uri: "https://example.com/fire-icon-119.png" }}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>화재 · 구조 · 구급 신고</Text>
          <Text style={styles.number}>119</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#B3E5FC" },
  header: { fontSize: 24, fontWeight: "bold", color: "#007AFF", marginBottom: 20, textAlign: "center" },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginBottom: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", shadowColor: "#000", shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 } },
  emergencyButton: { flexDirection: "row", alignItems: "center" },
  icon: { width: 40, height: 40, marginRight: 16 },
  buttonText: { fontSize: 18, flex: 1 },
  number: { fontSize: 24, fontWeight: "bold", color: "#FF5252" },
});