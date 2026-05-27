import { Pressable, StyleSheet } from 'react-native';

export default function ButtonIconS({
  Icon,
  onPress,
  size = 40,
  iconSize = 16,
  style,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          width: size,
          height: size,
        },
        style,
      ]}
    >
      <Icon width={iconSize} height={iconSize} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});