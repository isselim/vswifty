// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAocBEcUn12X6yYnu8d78vYaXGPRLW-6i4",
  authDomain: "vswifty-23d6a.firebaseapp.com",
  databaseURL: "https://vswifty-23d6a-default-rtdb.firebaseio.com",
  projectId: "vswifty-23d6a",
  storageBucket: "vswifty-23d6a.appspot.com",
  messagingSenderId: "459388965207",
  appId: "1:459388965207:web:c85068f7d0c5971bccae12"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function () {
    // Add your Firebase authentication code here if needed

    // Add an event listener to all <a> elements
    var links = document.querySelectorAll('a');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove 'active' class from all elements with the class 'content'
            document.querySelectorAll('.content').forEach(function (content) {
                content.classList.remove('active');
            });

            // Get the target content ID from the link's href attribute
            var targetId = link.getAttribute('href').substring(1);
            var targetContent = document.getElementById(targetId);

            // If the target content exists, add the 'active' class
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
