import {BackHandler, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import Google from '@/assets/images/google-logo.svg';

type Props = {}

const WelcomeScreen = (props: Props) => {
    return (
      <>
      <Stack.Screen options={ { headerShown: false}} />
      <ImageBackground 
        source={require("@/assets/images/way-app.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
      <View style={styles.container}>
        <LinearGradient colors={["transparent", "rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 1)"]} style={styles.background}>
        <View style={styles.wrapper}>
        <Text style={styles.title}>WAY</Text>
        <Text style={styles.description}> Find the Best Place to Go</Text>

        <View style={styles.socialLoginWrapper}> 
        <Link href={"/signup"} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons 
              name="mail-outline"
              size={20}
              color={Colors.black}
            />
            <Text style={styles.btnText}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
        </View>

        <View style={styles.socialLoginWrapper}> 
        <Link href={"/signup"} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons 
              name="logo-facebook"
              size={20}
              color={Colors.blue}
            />
            <Text style={styles.btnText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </Link>
        </View>

        <View style={styles.socialLoginWrapper}> 
        <Link href={"/signup"} asChild>
          <TouchableOpacity style={styles.button}>
            <Google width={20} height={20} />
            <Text style={styles.btnText}>Continue with Google</Text>
          </TouchableOpacity>
        </Link>
        </View>

        <Text style={styles.loginText}>
          Already have an account? {" "}
        <Link href={"/signin"} asChild>
          <TouchableOpacity>
            <Text style={styles.loginTextSpan}>SignIn</Text>
          </TouchableOpacity>
        </Link>
        </Text>
        </View>
        </LinearGradient>
      </View>
      </ImageBackground>
      </>
    );
  };

  export default WelcomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    background: {
      flex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: "flex-end"
    },
    wrapper: {
      paddingBottom: 50,
      paddingTop: 20,
      alignItems: 'center'
    },
    title: {
      fontSize: 40,
      color: Colors.primary,
      letterSpacing: 2.4,
      marginBottom: 20
    },
    description: {
      fontSize: 14,
      color: Colors.gray,
      letterSpacing: 1.2,
      lineHeight: 30,
      marginBottom: 30
    },
    socialLoginWrapper: {
      alignSelf: 'stretch'
    },
    button: {
      flexDirection: 'row',
      padding: 10,
      borderColor: Colors.gray,
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      marginBottom: 15
    },
    btnText: {
      fontSize: 14,
      fontWeight: '600',
      color: Colors.black
    },
    loginText: {
      marginTop: 30,
      fontSize: 14,
      color: Colors.black,
      lineHeight: 24,
      marginBottom: 10
    },
    loginTextSpan: {
      color: Colors.primary,
      fontWeight: '500'
    }
});
