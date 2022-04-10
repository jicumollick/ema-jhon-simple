// steps of implement firebase authentication system

// 1) create a project in console.firebase.google.com
// 2) npm install firebase
// 3) create firebase.init.js and import getAuth to export auth
// 4) Firebase setting > Authentication >  enable email password auth
// 5) create Login, SignUp component . setup Route .
// 6) attach form field handler and form submit handler
// 7)  npm install --save react-firebase-hooks
// 8)  useCreateUserWithEmailAndPassword from react-firebase-hooks
// 9) if user is created redirect to the expected page
// 10) useSignInWithEmailAndPassword for sign In
// 11) create RequireAuth component ==> check user exist also track user location
// 12 ) In Route , wrap Protected Component by using Require Auth Component
