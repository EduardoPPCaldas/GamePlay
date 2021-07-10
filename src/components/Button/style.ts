import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
  container:{
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title:{
    fontFamily: theme.fonts.text500,
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
  },
  icon:{
    width: 24,
    height: 18,
  }
})