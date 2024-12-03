import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [isSmsEnabled, setIsSmsEnabled] = useState(true);
  const [isCallEnabled, setIsCallEnabled] = useState(true);

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    Alert.alert("로그아웃", "정말로 로그아웃 하시겠습니까?", [
      { text: "취소", style: "cancel" },
      { text: "확인", onPress: () => navigation.replace("Login") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>설정</Text>

      {/* 알림 환경설정 */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>알림 환경설정</Text>
        <View style={styles.switchContainer}>
          <Text>SMS 알림 보내기</Text>
          <Switch
            value={isSmsEnabled}
            onValueChange={() => setIsSmsEnabled(!isSmsEnabled)}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text>전화 걸기</Text>
          <Switch
            value={isCallEnabled}
            onValueChange={() => setIsCallEnabled(!isCallEnabled)}
          />
        </View>
      </View>

      {/* 설정 저장 버튼 */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>설정 저장</Text>
      </TouchableOpacity>

      {/* 로그아웃 버튼 */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3E5FC",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007AFF",
    textAlign: "center",
    padding: 15,
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 16,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#FF5252",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});