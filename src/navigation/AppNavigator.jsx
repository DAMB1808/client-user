import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "../shared/constans/theme";
import AuthStackNavigator from "./AuthStack";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AuthStackNavigator />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
    },
});

export default AppNavigator;
