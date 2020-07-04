import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, Button } from 'react-native';

let facebookParameters = ""

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FacebookShareURL: 'https://www.facebook.com/Prueba-clase-102697048169201/',
      FacebookShareMessage: 'Este es un ejemplo de como compartir en facebook',
    };
  }
  postOnFacebook=() => {
    let FacebookShareURL = this.state.FacebookShareURL;
    let FacebookShareMessage = this.state.FacebookShareMessage;
    if(this.state.FacebookShareURL != undefined)
    {
        if(facebookParameters.includes("?") == false)
        {
            facebookParameters = facebookParameters+"?u="+encodeURI(this.state.FacebookShareURL);
        }else{
            facebookParameters = facebookParameters+"&u="+encodeURI(this.state.FacebookShareURL);
        }
    }
    if(this.state.FacebookShareMessage != undefined)
    {
        if(facebookParameters.includes("?") == false)
        {
            facebookParameters = facebookParameters+"?quote="+encodeURI(this.state.FacebookShareMessage);
        }else{
            facebookParameters = facebookParameters+"&quote="+encodeURI(this.state.FacebookShareMessage);
        }
    }
    let url = 'https://www.facebook.com/sharer/sharer.php'+facebookParameters;
    Linking.openURL(url).then((data) => {
      alert('Accediendo a Facebook');
    }).catch(() => {
      alert('Ocurrió un error');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 30}}>
          Compartir en Facebook
        </Text>
        
        <View style={{marginTop:20}}>
          <Button
            onPress={this.postOnFacebook}
            title= 'Compartir en Facebook'
            />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    padding: 30,
    backgroundColor: '#ffffff',
  },
 input: {
   width:'100%',
   height: 44,
   padding: 10,
   backgroundColor: '#D3D3D3',
 },
});