import { ScrollView, View } from 'react-native';
import { Badge, Button, PaperProvider, Text } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home_page from './screen/Home_page';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import Register from './screen/Register';
import Login from './screen/Login';
import Details from './screen/Details';
import Check_Out from './screen/Check_Out';

export default function App() {
  const Stack = createNativeStackNavigator()
  const theme = {
    "colors": {
      "primary": "rgb(56, 107, 1)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(183, 244, 129)",
      "onPrimaryContainer": "rgb(13, 32, 0)",
      "secondary": "rgb(87, 98, 74)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(218, 231, 201)",
      "onSecondaryContainer": "rgb(21, 30, 12)",
      "tertiary": "rgb(56, 102, 100)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(187, 236, 233)",
      "onTertiaryContainer": "rgb(0, 32, 31)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(253, 253, 245)",
      "onBackground": "rgb(26, 28, 24)",
      "surface": "rgb(253, 253, 245)",
      "onSurface": "rgb(26, 28, 24)",
      "surfaceVariant": "rgb(224, 228, 214)",
      "onSurfaceVariant": "rgb(68, 72, 62)",
      "outline": "rgb(116, 121, 109)",
      "outlineVariant": "rgb(196, 200, 186)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(47, 49, 44)",
      "inverseOnSurface": "rgb(241, 241, 234)",
      "inversePrimary": "rgb(156, 215, 105)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(243, 246, 233)",
        "level2": "rgb(237, 241, 226)",
        "level3": "rgb(231, 237, 218)",
        "level4": "rgb(229, 236, 216)",
        "level5": "rgb(225, 233, 211)"
      },
      "surfaceDisabled": "rgba(26, 28, 24, 0.12)",
      "onSurfaceDisabled": "rgba(26, 28, 24, 0.38)",
      "backdrop": "rgba(45, 50, 40, 0.4)",
      "info": "rgb(120, 69, 172)",
      "onInfo": "rgb(255, 255, 255)",
      "infoContainer": "rgb(240, 219, 255)",
      "onInfoContainer": "rgb(44, 0, 81)"
    }
  }
  return <Provider store={reduxStore}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Details' component={Details} />
          <Stack.Screen name='Checkout' component={Check_Out} />
          <Stack.Screen options={{ headerShown: false }} name='Home' component={Home_page} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider >
  </Provider>

}


