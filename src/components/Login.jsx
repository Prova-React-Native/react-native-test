import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { View } from "react-native"
import { Button, HelperText, Paragraph, TextInput } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [error, setError] = useState("")

  function handleRegister() {
    signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
      console.log(userCredential, "Usuário registrado com sucesso")
      navigation.navigate("MTBNavigation")
    }).catch((error) => {
      seterror(error.message)
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
    <View>
      <Paragraph>Faça o seu login</Paragraph>
      <HelperText type="error">{error}</HelperText>
      <View>
        <Paragraph>E-mail</Paragraph>
        <TextInput
          mode="outlined"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Paragraph>Senha</Paragraph>

        <TextInput
          mode="flat"
          placeholder="Digite sua Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={passwordVisible}
          right={() => (
            <Icon
              name={passwordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          )}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button mode="contained" onPress={handleRegister}>
          Acessar
        </Button>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Registrar
        </Button>
      </View>
    </View>
  )
}