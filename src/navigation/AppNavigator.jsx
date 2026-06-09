import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AuthStackNavigator from "./AuthStack";
import AppStackNavigator from "./AppStack";
import { useSelector } from "react-redux";

const AppNavigator = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <NavigationContainer>
            {user ? <AppStackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    );
};