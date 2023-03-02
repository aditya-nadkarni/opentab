# OpenTab

This app makes splitting receipts easy

* You to take a photo of a receipt
* Add people to the tab
* Everyone claims their items and everyone pays right away

Easily done.

## Running the app
1. To start cd into the app directory:
`cd app`

2. Then to make sure all dependencies are installed run: `yarn install`

```bash
# To get QR code
yarn start

#For web app
yarn web

#To open iPhone emulator
yarn ios

#To open android emulator
yarn android
```
* Warning: Camera is usually not available in the phone emulators
* If you install Expo Go on a physical device, you can scan the generated QR code to view app as well

## Installing new dependencies
* Due to React Native not being backwards compatible, use `yarn expo install <package-name>` to install new packages to the exact right version.
* Use `yarn expo install --fix` to update package versions to the right version.

