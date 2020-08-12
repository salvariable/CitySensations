/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Platform} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setPreventShowingBottomBlankSpace(true);
  KeyboardManager.setEnableAutoToolbar(true);
  KeyboardManager.setToolbarDoneBarButtonItemText('Done');
}

AppRegistry.registerComponent(appName, () => App);
