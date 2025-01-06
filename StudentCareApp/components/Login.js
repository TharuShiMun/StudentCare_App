import {useState} from "react";
import {TextInput, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";


export default function Login(){
    const [name ,setName]=useState("");
    const [password ,setPassword]=useState("");
    const navigate = useNavigation();



    
    return(
        <PaperProvider>
            <View style={styles.container}>
               <Text variant="headlineLarge" style={styles.header}>Student Login</Text>
            </View>

            <View>
                <TextInput 
                lable="Username" 
                mode="outlined" 
                value={name}
                onChangeText={setName}
                style={styles.input}/>
            </View>

            <View>
                <TextInput
                lable="Password"
                mode="outlined"
                value={password}
                onchangeText={setPassword}
                secureTextentry
                style={styles.input}/>
            </View>

            <View>
                <Button 
                mode="contained"
                onPress={()=>navigate.navigate('')}></Button>
            </View>
        </PaperProvider>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      backgroundColor: "#fff",
    },
    header: {
      textAlign: "center",
      marginBottom: 20,
    },
    input: {
      marginBottom: 15,
    },
    button: {
      marginTop: 10,
    },
  });
  