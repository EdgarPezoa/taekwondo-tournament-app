import {NativeStackScreenProps} from "@react-navigation/native-stack";

type FightScreen = {
  contesterA: string;
  contesterB: string;
}

export type RootStackParamList = {
  Home: undefined;
  Fight: FightScreen,
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Home', 'Fight'>;

export default ScreenProps;
