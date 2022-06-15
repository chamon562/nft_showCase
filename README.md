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
- will try to deploy to ipfs decentralized hosting, but for now will deploy on
- grab the link from running command npx expo publish in the react-native 
  - https://expo.dev/@chamon562/nft_market?serviceType=c
lassic&distribution=expo-go
- go to package.json in react app
- below "private" add the property called "homepage":".",
- then were able to deploy to ipfs, a decentralized hosting platform
- to be able to host on ipfs. we have to upload to github
- go to fleek.co
  - click get started
- log in with your git hub account
- click add new site
- can choose all or only select repositories
- choose select only select
and type in the repo name click install & authorize
- click the github link itll take it to ipfs menu select
- choose the hosting service IPFS and click continue
- choose basic build settings
- framework: Create React App
- it will automatically find all the commands that build project.
- click deploy site
- the process takes around a minute
- save Deployed to IPFS and got the hash: numberlkajsdfljk
- https://icy-hill-9059.on.fleek.co is the site by default they gave
- will not try and hook up metamask to put custom domain
- wait for domain to be minted on Unstoppable domains
- once minted complete go to my domains tab in unstoppable domains and click manage on the domain you want to use
- it allows to add a nft image profile. display name and description
- click website tab on left 
  - use this to link website locate the custom website linking under upload website files. 
  - can use an existing IPFS hash or redirect to a traditional domain
  - click link website
  - copy and paste hash that was given from the fleek.co
  - QmYirUkvhsUbXBoeMJ2epa5Gj35qw1bYtWU9i6T67sFw3r
  - place inside and click launch website
- meta mask will have a notification and click sign 
- the process will take around a minute
- download unstoppable extensions for chrome