import { Text } from "../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white px-4">
      <Text size="xl" weight="bold" color="#1E90FF" className="mb-2">
        Welcome to PetHub!
      </Text>
      <Text size="md" color="#333" align="center" className="mb-8">
        Find your perfect pet companion.
      </Text>

      <View className="w-full gap-4">
        <Link href="/auth/login" asChild>
          <TouchableOpacity className="w-full bg-blue-500 p-4 rounded-lg items-center">
            <Text color="white" weight="bold">Login</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/auth/signup" asChild>
          <TouchableOpacity className="w-full bg-gray-200 p-4 rounded-lg items-center">
            <Text color="#333" weight="bold">Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <Text size="sm" color="#888" className="mt-8">
        All rights reserved © 2025
      </Text>
    </SafeAreaView>
  );
}
