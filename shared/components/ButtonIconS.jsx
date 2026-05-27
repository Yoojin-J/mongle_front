import { Pressable, StyleSheet } from 'react-native';

export default function ButtonIconS({
  Icon,
  onPress,
  size = 28,
  iconSize = 12,
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
    backgroundColor: 'rgba(26, 27, 28, 0.75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});