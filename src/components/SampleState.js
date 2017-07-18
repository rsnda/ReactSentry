import React, { Component } from 'react';
import { View, Image, TouchableHighlight, Share } from 'react-native';

const NY1 = require('../../assets/NY1.jpg');
const NY2 = require('../../assets/NY2.jpg');
const NY3 = require('../../assets/NY3.jpg');

const imgs = [
  NY1,
  NY2,
  NY3,
];

const INTERVAL_DELAY = 2000;

export default class SampleState extends Component {

  static onPressButton() {
    Share.share({
      message: 'Share message',
      title: 'Share Title',
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };

    this.startInterval();
  }

  getImage() {
    return (
      <TouchableHighlight onPress={SampleState.onPressButton}>
        <Image source={imgs[this.state.currentImage]} />
      </TouchableHighlight>
    );
  }

  startInterval() {
    setInterval(() => {
      let idx = this.state.currentImage;
      idx = (idx + 1 > imgs.length - 1) ? 0 : idx + 1;

      this.setState({ currentImage: idx });
    }, INTERVAL_DELAY);
  }

  render() {
    const image = this.getImage();
    return (
      <View>
        {image}
      </View>
    );
  }
}
