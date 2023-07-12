import { DefaultTheme, Theme} from "@react-navigation/native";

const appTheme: Theme = {
  ...DefaultTheme,
  dark:true,
  colors: {
    ...DefaultTheme.colors,
    background: '#2F2F2F',
    card:'#232323',
    text:'#fff'
  },
};

export default appTheme;
