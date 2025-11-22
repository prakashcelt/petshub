import { View, TouchableOpacity, TextInput } from "react-native";
import { Text } from "../../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import "../../global.css";

export default function Signup() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white px-4 justify-center">
            <Text size="xl" weight="bold" color="#1E90FF" className="mb-8 text-center">
                Create Account
            </Text>

            <View className="gap-4 mb-8">
                <View>
                    <Text size="sm" color="#666" className="mb-2">Full Name</Text>
                    <TextInput
                        className="w-full border border-gray-300 rounded-lg p-4"
                        placeholder="Enter your name"
                        placeholderTextColor="#999"
                    />
                </View>

                <View>
                    <Text size="sm" color="#666" className="mb-2">Email</Text>
                    <TextInput
                        className="w-full border border-gray-300 rounded-lg p-4"
                        placeholder="Enter your email"
                        placeholderTextColor="#999"
                    />
                </View>

                <View>
                    <Text size="sm" color="#666" className="mb-2">Password</Text>
                    <TextInput
                        className="w-full border border-gray-300 rounded-lg p-4"
                        placeholder="Create a password"
                        placeholderTextColor="#999"
                        secureTextEntry
                    />
                </View>
            </View>

            <TouchableOpacity
                className="w-full bg-blue-500 p-4 rounded-lg items-center mb-4"
                onPress={() => router.replace("/(tabs)/home")}
            >
                <Text color="white" weight="bold">Sign Up</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center gap-2">
                <Text size="sm" color="#666">Already have an account?</Text>
                <Link href="/auth/login" asChild>
                    <TouchableOpacity>
                        <Text size="sm" color="#1E90FF" weight="bold">Login</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    );
}
