import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails(props) {
  const handlePress = () => {
    props.navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails screen</Text>
      <Button title="Go to the Home page" onPress={handlePress} />
    </View>
  );
}
