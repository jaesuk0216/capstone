import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      // Chuyển đến MainTabs
      navigation.navigate("MainTabs");
    } else {
      Alert.alert("로그인 실패", "이메일과 비밀번호를 입력하세요.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>스마트 CCTV에 오신 것을 환영합니다</Text>
      <Text style={styles.subText}>로그인하여 여정을 계속하세요</Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="이메일"
        placeholderTextColor="#aaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {/* Button Login */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3E5FC",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: "#ffffff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});