
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Divider, PaperProvider, Text, TextInput } from "react-native-paper";
import { TabRouter, useNavigation } from "@react-navigation/native";

export default function Profile({ route }) {

    const { studentdata } = TabRouter.params;
    const navigate = useNavigation();
    return (
        <PaperProvider>
            <ScrollView>

                <View style={styles.header}>
                    <Text style={styles.headerText}>UoV Student Care</Text>
                </View>
                <View style={styles.imagecontain}>
                    <Image
                        source={require("../assets/Logo.png")}
                        style={styles.image}
                    />
                </View>

                <View style={styles.studentInfoContainer}>
                    <Image
                        style={styles.profilePicContainer}
                        source={studentdata.profile_pic}
                    ></Image>
                    <Text style={styles.studentName}>Name: {studentdata.username}</Text>
                    <Text style={styles.studentDetails}>Age: {studentdata.age}</Text>
                    <Text style={styles.studentDetails}>Gender: {studentdata.gender}</Text>
                </View>

                <View style={styles.contactInfoContainer}>
                    <Text style={styles.contactTitle}>Contact Information</Text>
                    <Text style={styles.contactDetails}>Email: {studentdata.email}</Text>
                    <Text style={styles.contactDetails}>Phone: {studentdata.phone}</Text>
                    <Text style={styles.contactDetails}>
                        Address: {studentdata.address}
                    </Text>
                </View>
                <Divider></Divider>
                <View style={styles.biologicalInfoContainer}>
                    <Text style={styles.biologicalTitle}>Biological Information</Text>
                    <Text style={styles.biologicalDetails}>
                        Gender: {studentdata.gender}
                    </Text>
                    <Text style={styles.biologicalDetails}>Age: {studentdata.age}</Text>
                    <Text style={styles.biologicalDetails}>
                        Blood Group: {studentdata.blood_group}
                    </Text>
                </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            onPress={() => {
                                navigate.navigate("profile", { studentdata });
                            }}
                            style={styles.button}
                        >
                            Profile
                        </Button>
                        <Button
                            mode="contained"
                            onPress={() => {
                                navigate.navigate("course");
                            }}
                            style={styles.button}
                        >
                            Course
                        </Button>
                        <Button
                            mode="contained"
                            onPress={() => {
                                navigate.navigate("subjects");
                            }}
                            style={styles.button}
                        >
                            Subjects
                        </Button>
                    </View>
            </ScrollView>
        </PaperProvider>
    );
}
