import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text, PaperProvider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigation();

  const handlebutton = () => {
    const student = students.find(
      (student) => student.username === name && student.password === password
    );

    if (student) {
      navigate.navigate("profile", { studentdata: student });
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.header}>Student Login</Text>
        <TextInput
          label="Username"
          mode="outlined"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={() => navigate.navigate("TargetScreen")}
          style={styles.button}
        >
          Login
        </Button>
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
