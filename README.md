# EnterBrain :globe_with_meridians: :iphone: :computer:

![logo.png](logo.png)
Designed by [DinoSoftLabs](http://www.flaticon.com/authors/dinosoftlabs) from Flaticon

Use `npm run seticon icon.png` to change the icon.

    TODO remove most stuff below this...

##### This project  is an attempt to: 
* Target multiple platforms(Android, iOS, web, windows and macOS) with react native' APIs.
* Follow best practices while doing the above.
* Cut out the time and effort it takes to setup the project(based on create-react-app).
* Achieve 'Write once use everywhere' with react-native(though react strictly says 'Learn once use anywhere').

---

## How it works:
This starter kit has different branches based on what general requirements are(more branches coming soon). Just clone the project, switch to the desired branch, remove the .git folder and you are all set to code your app without thinking of any requirements or pre/post-tasks that need to be taken care of.  
### Selecting the right branch:
 - <b>master</b> : As the name says, it is and it'll always be the combination of all other branches, targeting all the possible platforms.
 - <b>web</b> : If you want a simple app(authenticating your users, displaying some data from remote sources and some process which is not very complex) and want it on android, iOS and web. This branch is what you need.
 - <b>web-redux</b> :If you want to utilize the power of redux(i.e. you want to have complete control over your app's state and  don't want your app to be complex), this is what you are looking for.<br/>
<b> P.S.</b> : As of now master and web-redux are at exact same stage.
 

---

## Wiring Up:
```
git clone https://github.com/amoghbanta/reactNativeEverywhere.git yourProjectName
cd yourProjectName
git checkout theBranchYouNeed
rm -rf .git
npm i
```
---

## Run the project:
#### Pre-requisites:
Node.js & npm on your system([follow this](https://docs.npmjs.com/getting-started/installing-node))<br/>
react-native CLI (`npm install -g react-native-cli`)

#### Android
`react-native run-android`

#### iOS
`react-native run-ios`

#### Web
`npm run web`

### Build for production:
#### Android/iOS
[This will help](https://facebook.github.io/react-native/docs/running-on-device.html)

#### Web
`npm run build` (this will build your production ready bundle)

-------
### Some very useful cross platform compatible libraries:
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [axios](https://github.com/mzabriskie/axios)
- [react-navigation](https://github.com/react-community/react-navigation) (might be included in ReactNativeEverywhere soon)


-------
### TODO:
- [x] support for web ([react-native-web](https://github.com/necolas/react-native-web))<br/>
- [ ] support for macOS([react-native-macOS](https://github.com/ptmt/react-native-macos))<br/>
- [ ] support for Windows ([react-native-windows](https://github.com/ReactWindows/react-native-windows))<br/>
- [ ] improve webpack config and add media queries for web <br/>
- [ ] Add example projects for each branch<br/>

---
### Running on Web, Android and iOS:
<p align="center">
<img src="https://s28.postimg.org/gmgva9rrh/58961a12afcd1276062762.gif" height="450">
<img src="https://s28.postimg.org/nbneqad3h/58961a2a030da447844552.gif" height="450">
<img src="https://s28.postimg.org/aa1q0fop9/589619ef1b623465256988.gif" height="450">
</p>
---
## Contributing:
This starter kit is still in very early stage. All your suggestions and PRs and welcome.
