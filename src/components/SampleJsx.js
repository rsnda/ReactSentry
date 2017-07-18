import React from 'react';
import { Image, ScrollView } from 'react-native';

const NY1 = require('../../assets/NY1.jpg');
const NY2 = require('../../assets/NY2.jpg');
const NY3 = require('../../assets/NY3.jpg');

export default function SampleJsx() {
  const monComposant = (
    <Image source={NY1} />
  );

  const images = [
    <Image key="1" source={NY1} />,
    <Image key="2" source={NY2} />,
    <Image key="3" source={NY3} />,
    <Image key="4" source={NY1} />,
    <Image key="5" source={NY2} />,
    <Image key="6" source={NY3} />,
  ];

  return (
    <ScrollView horizontal>
      {monComposant}
      {images}
    </ScrollView>
  );
}

