import Reactotron, { networking } from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative({
      networking: true,
    })
    .use(
      networking({
        ignoreContentTypes: /^(image)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate)$/,
      }),
    )
    .connect();

  tron.clear();
}
