// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ShowScreen = () => {
//   return (
//     <View>
//       <Text>Show Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ShowScreen;

// 2nd (retreiving single posts)
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  console.log(navigation.getParam('id'));
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;