import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Google Play In App Review Android Plugin
 * @description
 * This plugin helps to integrate Google Play In App Review with Cordova Applications
 *
 */
@Plugin({
  pluginName: 'InAppReviewAndroid',
  plugin: 'cordova-plugin-in-app-review-android', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.InAppReviewAndroid', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class InAppReviewAndroid extends IonicNativePlugin {

  /**
   * This will initiate the Google Play In App Review 
   * 
   * @return {Promise<InAppReviewResponse>} Returns a promise that resolves task and flow gets completed, rejects on failure of task completion/
   */
  @Cordova()
  initGooglePlayReview(): Promise<InAppReviewResponse> {
    return;
  }

}

export interface InAppReviewResponse {
  taskComplete: boolean,
  flowComplete: boolean
}