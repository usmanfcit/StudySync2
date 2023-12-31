import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileEdit from "./screens/ProfileEdit";
import NotificationsTab from "./screens/NotificationsTab";
import CreateATask from "./screens/CreateATask";
import TaskCalendar from "./screens/TaskCalendar";
import Home from "./screens/Home";
import ForgotPassword from "./screens/ForgotPassword";
import OnboardingFlow from "./screens/OnboardingFlow";

import { createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnboardingFlow">

            <Stack.Screen
            name="OnboardingFlow"
            component={OnboardingFlow}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="TaskCalendar"
            component={TaskCalendar}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="CreateATask"
            component={CreateATask}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="NotificationsTab"
            component={NotificationsTab}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="ProfileEdit"
            component={ProfileEdit}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />

              <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
  );
};
export default App;
