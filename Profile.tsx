import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  name: string;
  isActive?: boolean;
  image?: string;
  children?: React.ReactNode;
}

function Profile({
  name,
  isActive,
  image = 'https://picsum.photos/200',
  children,
}: Props) {
  return (
    <View style={isActive && styles.activeStyle}>
      <Image source={{uri: image}} />
      <Text>{name}</Text>
      <View>{children}</View>
    </View>
  );
}

// defaultProps가 더이상 사용되지 않을 수도 있기 때문에 사용 권장하지 않음
// Profile.defaultProps = {
//   image: 'https://picsum.photos/200',
// };

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: 'yellow',
  },
});

export default Profile;
