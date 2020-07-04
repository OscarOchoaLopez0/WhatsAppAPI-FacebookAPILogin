import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, Button } from 'react-native';
class WhatsApp extends Component {
constructor(props){
    super(props);
    this.state={
      mobile_no: '',
      msg: '', 
    };
  }
  sendOnWhatsApp=() =>{
    let msg = this.state.msg;
    let mobile = this.state.mobile_no;
    if(mobile){
      if(msg){
        let url = 'whatsapp://send?text=' + this.state.msg + '&phone=52' + this.state.mobile_no;
        Linking.openURL(url).then((data) => {
          console.log('WhatsApp Opened');
        }).catch(() => {
          alert('Asegurese de tener instalado whatsapp en su dispositivo');
        });
      }else{
        alert('Ingrese el mensaje a enviar');
      }
    }else{
      alert('Ingrese el número de teléfono');
    }
  }
  render() {
    return (
     <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 30}}>
          Enviar mensaje de whatsapp
        </Text>
        <TextInput
          value={this.state.mobile_no}
          onChangeText={mobile_no => this.setState({ mobile_no })}
          placeholder={'Enter Mobile'}
          style={styles.input}
          keyboardType={'numeric'}
        />
        <TextInput
          value={this.state.msg}
          onChangeText={msg => this.setState({ msg })}
          placeholder={'Ingrese su mensaje'}
          style={styles.input}
        />
        <View style={{marginTop:20}}>
          <Button
            onPress={this.sendOnWhatsApp}
            title= 'Enviar mensaje de whatsapp'
            />
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:50,
    padding: 30,
    backgroundColor: '#ffffff',
  },
 input: {
   width:250,
   height: 44,
   padding: 10,
   margin: 20,
   backgroundColor: '#D3D3D3',
 },
});
export default WhatsApp;
