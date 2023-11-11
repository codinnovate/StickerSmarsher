import React from 'react'
import { StyleSheet, Image} from 'react-native'
import assets from '../assets';


export default ImageViewer = ({ selectedImage }) => {
    const imageSource = selectedImage ? { uri: selectedImage } : assets.PlaceholderImage
    return (
        <Image
        source={imageSource}
        style={styles.image}
        />
    )
}


const styles = StyleSheet.create({
    image: {
    width: 320,
    height: 440,
    borderRadius:18,
  }
})
