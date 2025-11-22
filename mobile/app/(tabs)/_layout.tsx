import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="home" options={{ title: "Home" }} />
            <Tabs.Screen name="clinics" options={{ title: "Clinics" }} />
            <Tabs.Screen name="reels" options={{ title: "Reels" }} />
            <Tabs.Screen name="bookmark" options={{ title: "Bookmark" }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    );
}
