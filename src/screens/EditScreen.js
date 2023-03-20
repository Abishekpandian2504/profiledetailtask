//1st
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const EditScreen = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Edit Screen - {navigation.getParam('id')}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default EditScreen;


// 2nd (initializing state from context)
// import React, { useState, useContext } from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';
// import { Context } from '../context/BlogContext';

// const EditScreen = ({ navigation }) => {
//   const { state } = useContext(Context);

//   const blogPost = state.find(
//     blogPost => blogPost.id === navigation.getParam('id')
//   );

//   const [title, setTitle] = useState(blogPost.title);
//   const [content, setContent] = useState(blogPost.content);

//   return (
//     <View>
//       <Text>Edit Title:</Text>
//       <TextInput value={title} onChangeText={newTitle => setTitle(newTitle)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default EditScreen;

//3rd (extracting from logic)
// import React, { useContext } from 'react';
// import { StyleSheet } from 'react-native';
// import { Context } from '../context/BlogContext';
// import BlogPostForm from '../components/BlogPostForm';

// const EditScreen = ({ navigation }) => {
//   const { state } = useContext(Context);

//   const blogPost = state.find(
//     blogPost => blogPost.id === navigation.getParam('id')
//   );

//   return <BlogPostForm />;
// };

// const styles = StyleSheet.create({});

// export default EditScreen;


// 4TH (INITIAL FORM VALUES)
// import React, { useContext } from 'react';
// import { StyleSheet } from 'react-native';
// import { Context } from '../context/BlogContext';
// import BlogPostForm from '../components/BlogPostForm';

// const EditScreen = ({ navigation }) => {
//   const { state } = useContext(Context);

//   const blogPost = state.find(
//     blogPost => blogPost.id === navigation.getParam('id')
//   );

//   return (
//     <BlogPostForm
//       initialValues={{ title: blogPost.title, content: blogPost.content }}
//       onSubmit={(title, content) => {
//         console.log(title, content);
//       }}
     
      
//     />
//   );
// };

// const styles = StyleSheet.create({});

// export default EditScreen;

// 5TH (EDITING ACTION FUNCTION)
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;


