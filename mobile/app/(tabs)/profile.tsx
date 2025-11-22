import { View } from "react-native";
import { Text } from "../../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function Profile() {
    return (
        <SafeAreaView className="flex-1 bg-white items-center justify-center">
            <Text size="xl" weight="bold" color="#333">Profile Tab</Text>
        </SafeAreaView>
    );
}
