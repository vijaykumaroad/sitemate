# Sitemate

## The task - React Native App

Build a very basic mobile app that communicates with an API & displays the results.
___

<br>

### **Installation**
```
git clone git@github.com:vijaykumaroad/sitemate.git
```

```
cd sitemate
```
```
Yarn
```
```
react-native eject
```

<br>

### **Configure vector icons**
Navigate to the files and add these lines

#### **iOS**
```ios > sitemate > Info.plist```

```
<key>UIAppFonts</key>
<array>
	<string>AntDesign.ttf</string>
	<string>Entypo.ttf</string>
	<string>EvilIcons.ttf</string>
	<string>Feather.ttf</string>
	<string>FontAwesome.ttf</string>
	<string>FontAwesome5_Brands.ttf</string>
	<string>FontAwesome5_Regular.ttf</string>
	<string>FontAwesome5_Solid.ttf</string>
	<string>Foundation.ttf</string>
	<string>Ionicons.ttf</string>
	<string>MaterialCommunityIcons.ttf</string>
	<string>MaterialIcons.ttf</string>
	<string>Octicons.ttf</string>
	<string>SimpleLineIcons.ttf</string>
	<string>Zocial.ttf</string>
	<string>Fontisto.ttf</string>
</array>
```

#### **android**
```android > app > build.gradle```

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

<br>

### **Pod install**

```
cd ios && pod install && cd ../
```

<br>

### **Running App**

```
yarn ios
```
```
yarn android
```
