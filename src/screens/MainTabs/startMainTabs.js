import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Entypo';

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource('chat', 30),
    Icon.getImageSource('user', 30)
  ]).then(icons => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              component: {
                name: 'rnchatapp.ChatScreen',
                options: {
                  bottomTab: {
                    text: 'Chat',
                    icon: icons[0]
                  }
                }
              }
            },
            {
              component: {
                name: 'rnchatapp.ProfileScreen',
                options: {
                  bottomTab: {
                    text: 'Profile',
                    icon: icons[1]
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
}

export default startMainTabs;
