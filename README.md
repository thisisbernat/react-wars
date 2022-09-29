# 🌌 React Wars [![CodeFactor](https://www.codefactor.io/repository/github/thisisbernat/react-wars/badge)](https://www.codefactor.io/repository/github/thisisbernat/react-wars)

This is a frontend app build with React. It consumes data from the [Star Wars API](https://swapi.dev/) and it displays a paginated list of characters, and a detailed view by clicking on any of them. It also allows the user to search for an specific character's name in a search box.

This app is deployed at https://react-wars.vercel.app/

## 🧮 Tech I used

- __Vite__: Much faster and cleaner way to bootstrap a React project than create-react-app. 
- __TailwindCSS__: I'm familiar with it and I find it very easy to create responsive layouts with it. 
- __Wouter__: Lightweight alternative to react-router that I wanted to try out and it seemed a good fit for this example.

## 🛫 How to run the app locally
```bash
git clone https://github.com/thisisbernat/react-wars
cd react-wars
npm i
npm run build
npm run preview
```

## 💭 Considerations

- The swapi.dev API is very slow, so I have decided to take advantadge of their pagination system, instead of retrieving all the characters and then paginate them on the frontend.
- I have also decided to take advantage of their search parameter to build the search box. This means, a search triggers another API call, but also that you can search for any character in the API and not only within those that are currently being displayed.
- I have build the app with React, as stated in the guidelines, but I think this app is the perfect candidate to be built with Next.js, since all the data is available at build time, making use of its Static Site Generation capabilities (with getStaticProps and getStaticPaths functions). This would result in a much faster experience for the user.


