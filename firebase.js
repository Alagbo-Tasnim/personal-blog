    // Import the functions you need from the SDKs you need
    import {
        initializeApp
    } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
    import {
        getAnalytics
    } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAOlupatscDm9a5jclt-Dx53qU22Krbcfs",
        authDomain: "personal-blog-495b9.firebaseapp.com",
        projectId: "personal-blog-495b9",
        storageBucket: "personal-blog-495b9.firebasestorage.app",
        messagingSenderId: "443417601471",
        appId: "1:443417601471:web:2482f40760d2e0ee1d6d0a",
        measurementId: "G-0CEK5XQRCZ"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Export app so you can import it in login.js, dashboard.js, etc.
    export { app };