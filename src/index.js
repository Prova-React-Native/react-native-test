import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";

const Stack = createNativeStackNavigator()

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const MTB = createMaterialBottomTabNavigator()

export function MTBNavigation() {
  return (
    <MTB.Navigator>
      <MTB.Screen name="Login" component={Login} />
    </MTB.Navigator>
  )
}