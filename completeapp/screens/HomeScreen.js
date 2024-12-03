import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function HomeScreen({ navigation }) {
  // Hàm mở camera
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("권한 필요", "카메라 접근 권한이 필요합니다.");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      Alert.alert("사진 촬영 완료", `이미지 URI: ${result.assets[0].uri}`);
    }
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    Alert.alert("로그아웃", "정말로 로그아웃 하시겠습니까?", [
      { text: "취소", style: "cancel" },
      { text: "확인", onPress: () => navigation.replace("Login") },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>스마트 CCTV</Text>
      </View>

      {/* Camera Preview */}
      <View style={styles.cameraPreview}>
        <Image
          source={{
            uri: "https://via.placeholder.com/300x200.png?text=CCTV+Preview",
          }}
          style={styles.cameraImage}
        />
        <Text style={styles.cameraTitle}>기본 입구</Text>
        <Text style={styles.cameraSubtitle}>라이브 피드</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={openCamera}>
          <Text style={styles.actionIcon}>📷</Text>
          <Text style={styles.actionText}>모든 카메라 보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>🔔</Text>
          <Text style={styles.actionText}>경보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📄</Text>
          <Text style={styles.actionText}>화재 감지 기록</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activities */}
      <View style={styles.recentActivities}>
        <Text style={styles.sectionTitle}>최근 활동</Text>
        <View style={styles.activity}>
          <Text style={styles.activityTitle}>화재 감지</Text>
          <Text style={styles.activityDetail}>주차장 B1 - 5분 전</Text>
        </View>
        <View style={styles.activity}>
          <Text style={styles.activityTitle}>움직임 감지</Text>
          <Text style={styles.activityDetail}>뒤뜰 - 20분 전</Text>
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>모든 활동 보기</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3E5FC",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#B3E5FC",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
  cameraPreview: {
    alignItems: "center",
    marginTop: 20,
  },
  cameraImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
  },
  cameraTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  cameraSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "30%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  actionText: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  recentActivities: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  activity: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activityDetail: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  viewAllButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  viewAllText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
})