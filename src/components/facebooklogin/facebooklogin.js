
import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import WhatsApp from  "../whatsapp/WhatsApp";
import ReacDOM from 'react-dom';
import MessengerMessageUs from 'react-messenger-message-us';
import ShareDialog from 'react-native-fbsdk';
import ShareFacebook from '../share-facebook/ShareFacebook';

export default class MyComponent extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  shareLinkWithShareDialog() {
  var tmp = this;
  ShareDialog.canShow(this.state.shareLinkContent).then(
    function(canShow) {
      if (canShow) {
        return ShareDialog.show(tmp.state.shareLinkContent);
      }
    }
  ).then(
    function(result) {
      if (result.isCancelled) {
        alert('La operación de compartir fue cancelada');
      } else {
        alert('El post se realizó exitosamente: '
          + result.postId);
      }
    },
    function(error) {
      alert('El post falló código: ' + error.message);
    }
  );
}

  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      //email: response.email,
      picture: response.picture.data.url
    });
  };


  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
            <html>
            <WhatsApp/>
            <ShareFacebook/>
           
            </html>
          
        </div>
      )
    } else {
      fbContent = (
        <FacebookLogin
          appId="271955264167612"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );

    }

    return <html><div>{fbContent}</div></html>;

  }
}



