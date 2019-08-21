import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import ChatScreen from './src/screens/Chat/Chat';
import ProfileScreen from './src/screens/Profile/Profile';

// Register Screens
Navigation.registerComponent('rnchatapp.AuthScreen', () => AuthScreen);
Navigation.registerComponent('rnchatapp.ChatScreen', () => ChatScreen);
Navigation.registerComponent('rnchatapp.ProfileScreen', () => ProfileScreen);

// Start an App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'rnchatapp.AuthScreen',
        options: {
          topBar: {
            title: {
              text: 'Please Login'
            }
          }
        }
      }
    }
  });
})
