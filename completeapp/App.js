import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// Import các màn hình
import HomeScreen from "./screens/HomeScreen";
import EmergencyScreen from "./screens/EmergencyScreen";
import GuideScreen from "./screens/GuideScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "홈") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "긴급신고") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "국민행동요령") {
            iconName = focused ? "walk" : "walk-outline";
          } else if (route.name === "환경설정") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="긴급신고" component={EmergencyScreen} />
      <Tab.Screen name="국민행동요령" component={GuideScreen} />
      <Tab.Screen name="환경설정" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}