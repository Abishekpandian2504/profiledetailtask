// import createDataContext from './createDataContext';

// const blogReducer = (state, action) => {
//   switch (action.type) {
//     case 'delete_blogpost':
//       return state.filter(blogPost => blogPost.id !== action.payload);
//     case 'add_blogpost':
//       return [
//         ...state,
//         {
//           id: Math.floor(Math.random() * 99999),
//           title: action.payload.title,
//           content: action.payload.content
//         }
//       ];
//     default:
//       return state;
//   }
// };

// const addBlogPost = dispatch => {
//   return (title, content, callback) => {
//     dispatch({ type: 'add_blogpost', payload: { title, content } });
//     callback();
//   };
// };
// const deleteBlogPost = dispatch => {
//   return id => {
//     dispatch({ type: 'delete_blogpost', payload: id });
//   };
// };

// export const { Context, Provider } = createDataContext(
//   blogReducer,
//   { addBlogPost, deleteBlogPost },
//   []
// );


//2nd
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// const BlogPostForm = ({ onSubmit }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   return (
//     <View>
//       <Text style={styles.label}>Enter Title:</Text>
//       <TextInput
//         style={styles.input}
//         value={title}
//         onChangeText={text => setTitle(text)}
//       />
//       <Text style={styles.label}>Enter Content:</Text>
//       <TextInput
//         style={styles.input}
//         value={content}
//         onChangeText={text => setContent(text)}
//       />
//       {/* <Button
//         title="Save Blog Post"
//       /> */}
//       <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 15,
//     padding: 5,
//     margin: 5
//   },
//   label: {
//     fontSize: 20,
//     marginBottom: 5,
//     marginLeft: 5
//   }
// });

// export default BlogPostForm;


// 2nd (initial form values)
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// const BlogPostForm = ({ onSubmit, initialValues }) => {
//   const [title, setTitle] = useState(initialValues.title);
//   const [content, setContent] = useState(initialValues.content);

//   return (
//     <View>
//       <Text style={styles.label}>Enter Title:</Text>
//       <TextInput
//         style={styles.input}
//         value={title}
//         onChangeText={text => setTitle(text)}
//       />
//       <Text style={styles.label}>Enter Content:</Text>
//       <TextInput
//         style={styles.input}
//         value={content}
//         onChangeText={text => setContent(text)}
//       />
//       <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
//     </View>
//   );
// };
// BlogPostForm.defaultProps = {
//   initialValues: {
//     title: '',
//     content: ''
//   }
// };

// const styles = StyleSheet.create({
//   input: {
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 15,
//     padding: 5,
//     margin: 5
//   },
//   label: {
//     fontSize: 20,
//     marginBottom: 5,
//     marginLeft: 5
//   }
// });

// export default BlogPostForm;

//3rd
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>hospital name :</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Doctor name</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title="Save Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;

