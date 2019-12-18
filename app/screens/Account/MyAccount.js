import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { View, Text } from "react-native";
import Loading from "../../components/Loading";

export default function MyAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
      console.log(user);
    });
  }, []);

  if (login == null) {
    return <Loading isVisible={true} text="cargando" />;
  }
  if (login) {
    return (
      <View>
        <Text>Logged</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Not logger tho</Text>
    </View>
  );
}
