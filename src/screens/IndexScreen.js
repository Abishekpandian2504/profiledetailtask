// // 4TH (ADDING ADD BUTTON)
// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
// import BlogContext from '../context/BlogContext';

// const IndexScreen = () => {
//   const { data, addBlogPost } = useContext(BlogContext);

//   return (
//     <View>
//       <Text>Index Screen</Text>
//       <Button title="Add Post" onPress={addBlogPost} />
//       <FlatList
//         data={data}
//         keyExtractor={blogPost => blogPost.title}
//         renderItem={({ item }) => {
//           return <Text>{item.title}</Text>;
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default IndexScreen;

// //5th (Automatic context creation )
// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
// import { Context } from '../context/BlogContext';

// const IndexScreen = () => {
//   const { state, addBlogPost } = useContext(Context);

//   return (
//     <View>
//       <Text>Index Screen</Text>
//       <Button title="Add Post" onPress={addBlogPost} />
//       <FlatList
//         data={state}
//         keyExtractor={blogPost => blogPost.title}
//         renderItem={({ item }) => {
//           return <Text>{item.title}</Text>;
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default IndexScreen;

// 6th (adding delete button)
// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
// import { Context } from '../context/BlogContext';
// import { Feather } from '@expo/vector-icons';

// const IndexScreen = () => {
//   const { state, addBlogPost } = useContext(Context);

//   return (
//     <View>
//       <Button title="Add Post" onPress={addBlogPost} />
//       <FlatList
//         data={state}
//         keyExtractor={blogPost => blogPost.title}
//         renderItem={({ item }) => {
//           return (
//             <View style={styles.row}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Feather style={styles.icon} name="trash" />
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     borderTopWidth: 1,
//     borderColor: 'gray'
//   },
//   title: {
//     fontSize: 18
//   },
//   icon: {
//     fontSize: 24
//   }
// });

// export default IndexScreen;

// 7th ( deleting blogpost)
// import React, { useContext } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Button,
//   TouchableOpacity
// } from 'react-native';
// import { Context } from '../context/BlogContext';
// import { Feather } from '@expo/vector-icons';

// const IndexScreen = ({navigation}) => {
//   const { state, addBlogPost, deleteBlogPost } = useContext(Context);
//   return (
    
//     <View>
//       <Button title="Add Post" onPress={addBlogPost} />
//       <FlatList
//         data={state}
//         keyExtractor={blogPost => blogPost.title}
//         renderItem={({ item }) => {
//           return (
//             <TouchableOpacity
//               onPress={() => navigation.navigate('Show', { id: item.id })}
//             >
//             <View style={styles.row}>
//               <Text style={styles.title}>
//                 {item.title} - {item.id}
//               </Text>
//               <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
//                 <Feather style={styles.icon} name="trash" />
//               </TouchableOpacity>
//             </View>
//             </TouchableOpacity>
           
//           );
//         }}
//       />
//     </View>
    
//   );
// };
// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     borderTopWidth: 1,
//     borderColor: 'gray'
//   },
//   title: {
//     fontSize: 18
//   },
//   icon: {
//     fontSize: 24
//   }
// });

// export default IndexScreen;

//11th plus add
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    
    <View>
      {/* <Button title="Add Post" onPress={addBlogPost} /> */}
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
            </TouchableOpacity>
           
          );
        }}
      />
    </View>
    
  );
};
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
