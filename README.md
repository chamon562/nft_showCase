### installing dependancies

[tailwind css link](https://tailwindcss.com/docs/guides/create-react-app)

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- inside tailwind.config

  ```js
  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```
- inside index.css 
```css
/* this allows us  to use all of tailwinds classes*/
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# deploy
- will deploy to ipff decentralized hosting
- grab the link from running command npx expo publish in the react-native 
  - https://expo.dev/@chamon562/nft_market?serviceType=c
lassic&distribution=expo-go
- go to package.json in react app
- below "private" add the property called "homepage":".",
- then were able to deploy to ipfs, a decentralized hosting platform
- to be able to host on ipfs. we have to upload to github