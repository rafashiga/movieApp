import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: any;
  }
}

// eslint-disable-next-line no-undef
if (__DEV__) {
  const tron: any = Reactotron.configure({ host: '192.168.0.8' })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
