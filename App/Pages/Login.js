import { View, StyleSheet, Text, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { SvgXml } from 'react-native-svg';
import { TextInput, DefaultTheme, Button} from 'react-native-paper';



const svgIcon = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 26.6667C12 28.1334 10.8 29.3334 9.33334 29.3334C7.86668 29.3334 6.66668 28.1334 6.66668 26.6667C6.66668 25.2 7.86668 24 9.33334 24C10.8 24 12 25.2 12 26.6667ZM22.6667 24C21.2 24 20 25.2 20 26.6667C20 28.1334 21.2 29.3334 22.6667 29.3334C24.1333 29.3334 25.3333 28.1334 25.3333 26.6667C25.3333 25.2 24.1333 24 22.6667 24ZM9.60001 19.7334V19.6L10.8 17.3334H20.6667C21.6 17.3334 22.5333 16.8 22.9333 16L28.1333 6.66669L25.8667 5.33335L20.6667 14.6667H11.3333L5.73334 2.66669H1.33334V5.33335H4.00001L8.80001 15.4667L6.93334 18.6667C6.80001 19.0667 6.66668 19.4667 6.66668 20C6.66668 21.4667 7.86668 22.6667 9.33334 22.6667H25.3333V20H9.86668C9.73334 20 9.60001 19.8667 9.60001 19.7334ZM16 12.4L15.2 11.7334C12.5333 9.20002 10.6667 7.60002 10.6667 5.60002C10.6667 4.00002 12 2.66669 13.6 2.66669C14.5333 2.66669 15.4667 3.06669 16 3.73335C16.5333 3.06669 17.4667 2.66669 18.4 2.66669C20 2.66669 21.3333 3.86669 21.3333 5.60002C21.3333 7.60002 19.4667 9.20002 16.8 11.7334L16 12.4Z" fill="#D91400"/>
</svg>`

const theme = {
    ...DefaultTheme,
    roundness: 20,
    colors: {
      ...DefaultTheme.colors,
      primary: "#B70F00",
    },
  };

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
            alert('Registration failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <SvgXml xml={svgIcon} width="70" height="70" style={styles.icon} />
            <Text style={styles.text} >Let's Begin!</Text>

        <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
            <TextInput theme={theme}  mode="outlined" value={email} style={styles.input} placeholder = 'Email' autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput theme={theme}  mode="outlined" secureTextEntry={true} value={password} style={styles.input} placeholder = 'Password' autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
            <Text style={styles.textTwo} >Forgot Password?</Text>
        { loading ? ( <ActivityIndicator size="large" color="#0000ff" />
        ) : (
        <>
            <Button contentStyle={styles.buttonContent} labelStyle={styles.buttonLabel} style={styles.button} mode="contained" theme={theme} onPress={signIn}>Log In</Button>
            <Button contentStyle={styles.buttonContent} labelStyle={styles.buttonLabel} style={styles.button} mode="contained" theme={theme} onPress={signUp}>Sign Up</Button>
        </>
        )}
        </KeyboardAvoidingView>

        </View>
    );
};

export default Login

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32, 
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor: '#fff',
    },
    input: {
        marginTop: 16,
        width: '100%',
        borderRadius: 2,
        backgroundColor: '#fff',
    },
    icon: {
        marginTop: 248,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 32,
        marginBottom: 16,
        fontSize: 32,
        fontWeight: 'bold',
    },
    textTwo: {
        marginTop: 16,
        marginBottom: 32,
        fontSize: 16,
        color: 'gray',
    },
    keyboard: {
        width: '100%',
    },
    button: {
        width: '100%',
        height: 50,
        marginBottom: 32,
    },
    buttonContent: {
        height: '100%', 
    },
    buttonLabel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})