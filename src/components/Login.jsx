export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [senha, setsenha] = useState("")
  const [passwordVisible, setpasswordVisible] = useState(true)
  const [error, seterror] = useState("")

  function handleRegister() {
    signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
      console.log(userCredential, "Usuário registrado com sucesso")
      navigation.navigate("MTBNavigation")
    }).catch((error) => {
      seterror(error.message)
      const errorCode = error.code
      switch (
        
      )
    })
  }
  return (
    
  )
}