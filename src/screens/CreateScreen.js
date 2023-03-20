// import React, { useContext } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Context } from '../context/BlogContext';

// const CreateScreen = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Create</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default CreateScreen;

// // 2nd (Displaying a form)
// import React, { useContext, useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
// import { Context } from '../context/BlogContext';

// const CreateScreen = ({ navigation }) => {
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
//       <Button title="Add Blog Post" />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//     input: {
//       fontSize: 18,
//       borderWidth: 1,
//       borderColor: 'black',
//       marginBottom: 15,
//       padding: 5,
//       margin: 5
//     },
//     label: {
//       fontSize: 20,
//       marginBottom: 5,
//       marginLeft: 5
//     }
//   });
  
//   export default CreateScreen;

// 3rd (saving a new post)
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Name</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter your age</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
       <Text style={styles.label}>Enter your Skills</Text>
      <TextInput
        style={styles.input}
      />
      <Button
        title="Done"
        onPress={() => { 
        //     addBlogPost(title, content);
        // navigation.navigate('Index');
        addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
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
  
  export default CreateScreen;