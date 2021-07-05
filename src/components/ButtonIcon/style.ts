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
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
  },
  iconWrapper:{
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: theme.colors.line,
    borderRightWidth: 1,
  },
  icon:{
    width: 24,
    height: 18,
  }
})