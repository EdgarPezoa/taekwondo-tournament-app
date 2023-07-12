import {StatusBar} from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar
        hidden
        backgroundColor='#232323'
        barStyle='light-content'
      />
      
    </>
  );
}
