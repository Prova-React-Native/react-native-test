import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { View } from "react-native"
import { Button, HelperText, Paragraph, TextInput } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "../utils/styles";
import { auth } from "../config/firebase"

export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [error, setError] = useState("")

  function handleRegister() {
    signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
      console.log(userCredential, "Usuário registrado com sucesso")
      navigation.navigate("Home")
    }).catch((error) => {
      setError(error.message)
      const errorCode = error.code
      switch (
        errorCode
      ) {
        case "auth/email-already-in-use":
          setError("Email já cadastrado!")
          break
        case "auth/invalid-email":
          setError("Email inválido!")
          break
        case "auth/weak-password":
          setError("Senha fraca!")
          break
        default:
          setError("E-mail ou senha inválido!")
      }
    })
  }
  return (
    <View style={styles.container}>
      <Paragraph>Faça o seu login</Paragraph>
      <HelperText type="error">{error}</HelperText>
      <View>
        <Paragraph>E-mail</Paragraph>
        <TextInput
          mode="outlined"
          backgroundColor= 'black'
          activeOutlineColor= 'black'
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Paragraph>Senha</Paragraph>

        <TextInput
          mode="outlined"
          placeholder="Digite sua Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={passwordVisible}
          activeOutlineColor= 'black'
          right={() => (
            <TextInput.Icon
              icon={passwordVisible ? "eye" : "eye-off"}
              size={20}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          )}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button style={{backgroundColor: 'black'}} mode="contained" onPress={handleRegister}>
          Entrar
        </Button>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          style={{backgroundColor: 'black'}}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Registrar
        </Button>
      </View>
    </View>
  )
}