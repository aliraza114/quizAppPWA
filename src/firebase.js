import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBizy5cZLjuQ9dTB6gER4IrVqGBxOMTnIA",
    authDomain: "quizapp-pwa-c19d3.firebaseapp.com",
    databaseURL: "https://quizapp-pwa-c19d3.firebaseio.com",
    projectId: "quizapp-pwa-c19d3",
    storageBucket: "quizapp-pwa-c19d3.appspot.com",
    messagingSenderId: "364927526658",
    appId: "1:364927526658:web:7a3b5549288f4ab6f1c41b"
}

firebase.initializeApp(config)

export default firebase