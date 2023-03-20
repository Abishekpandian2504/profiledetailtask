

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Koushik</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f00f',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import IndexScreen from './src/screens/IndexScreen';

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//   },
//   {
//     initialRouteName: 'Index',
//     defaultNavigationOptions: {
//       title: 'Blogs',
//     },
//   }
// );

// export default createAppContainer(navigator);

// 2nd
// Creating custom component and export (import react)
// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import IndexScreen from './src/screens/IndexScreen';

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//   },
//   {
//     initialRouteName: 'Index',
//     defaultNavigationOptions: {
//       title: 'Blogs',
//     },
//   }
// );

// const App = createAppContainer(navigator);

// export default () => {
//   return <App />;
// };

// 3rd 
// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import IndexScreen from './src/screens/IndexScreen';
// import { BlogProvider } from './src/context/BlogContext';

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//   },
//   {
//     initialRouteName: 'Index',
//     defaultNavigationOptions: {
//       title: 'Blogs',
//     },
//   }
// );

// const App = createAppContainer(navigator);

// export default () => {
//   return (
//     <BlogProvider>
//       <App />
//     </BlogProvider>
//   );
// };

//4th (Automatic context creation)
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Add your details',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};





