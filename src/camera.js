import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, ImageBackground, ScrollView, View, CameraRoll, PermissionsAndroid,Dimensions } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";

export default Camera = () => {



  const [imageUri, setImageUri] = useState(null);
  takePicture = async () => {
    try {
      if (this.camera) {
        const options = {
          quality: 0.5,
          base64: true,
          forceUpOrientation: true,
          fixOrientation: true
        };
        const { uri } = await this.camera.takePictureAsync(options);
        setImageUri(uri);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  submitPicture = async () => {
  
      await CameraRoll.saveToCameraRoll(imageUri);
      

    setImageUri(null);
  }

  return (
    imageUri ?
      <ImageBackground style={styles.preview} source={{ uri: imageUri }}>
        <ScrollView></ScrollView>
        <View style={styles.buttonsPreview}>
          <Icon name="times" size={25} color="#fff" onPress={() => setImageUri(null)} />
          <Icon name="check" size={25} color="#fff" onPress={() => submitPicture()} />
        </View>
      </ImageBackground>
      :
      <RNCamera
      ref={camera => {
        this.camera = camera;
      }}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      autoFocus={RNCamera.Constants.AutoFocus.on}
      flashMode={RNCamera.Constants.FlashMode.off}
      
    >   

        <View style={styles.viewButton}>
        <TouchableOpacity onPress={takePicture} style={styles.button}/>
        </View>
      </RNCamera>
  )
}
const styles = StyleSheet.create({
  camera: {
    flex: 1
  },
  viewButton:{
    alignItems:'center',
    justifyContent:'flex-start',
    paddingBottom:10
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
    
  },
  preview: {
    // width: "100%",
    // height: "100%",
    // flex: 1
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  buttonsPreview: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5
  }
});