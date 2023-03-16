import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Register from "../src/components/Register";

const Stack = createNativeStackNavigator();

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
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const MTB = createMaterialBottomTabNavigator();

export function MBTNavigation() {
  return (
    <MTB.Navigator>
      <MTB.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: "android",

          title: "Inicio",
        }}
      />
    </MTB.Navigator>
  );
}