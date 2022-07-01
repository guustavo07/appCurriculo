import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Card from './components/Card/index'

const profileImage = 'https://avatars.githubusercontent.com/u/84508964?v=4'

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert(
          'Meu Linkedin',
          'https://www.linkedin.com/in/gustavo-fernandes-87145b210/'
        )
        break
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/guustavo07')
        break
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={{ uri: profileImage }} style={style.foto} />
          <Text style={style.nome}>GUSTAVO HENRIQUE</Text>
          <Text style={style.funcao}>Desenvolvedor Front-End</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Formação Academica">
          <Text style={style.card_content_text}>
            Análise e Desenvolvimento de Sistemas
          </Text>
          <Text style={style.card_content_text}>Técnico em Eletrônica</Text>
          <Text style={style.card_content_text}>
            Desenhista de Produtos Gráficos WEB
          </Text>
        </Card>
        <Card titulo="Experiencia Profissional">
          <Text style={style.card_content_text}>
            Cartório do 3º Ofício de Notas de Caeté
          </Text>
        </Card>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  foto: {
    height: 180,
    width: 180,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
})

export default App
