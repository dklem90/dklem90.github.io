// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCtcNY7D1UWBG71fTBXJ5NPtPfXZpaj4g',
  authDomain: 'portfolio-website-database.firebaseapp.com',
  projectId: 'portfolio-website-database',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Reference messages collection
const messagesDB = db.collection('messages');

function submitContactForm(e) {
  e.preventDefault();

  // Get the needed values
  const name = $('#name').val();
  const email = $('#email').val();
  const message = $('#message').val();

  // Save the message
  saveMessage(name, email, message);

  // Clear & close the contact form
  $('input[value="Reset"]').click();
}

function saveMessage(name, email, message) {
  messagesDB
    .add({
      name,
      email,
      message,
    })
    .then(() => $('.message-success').show())
    .catch(err => console.error('Error saving message: ', err));
}

// Add the event listener to the contact form
$('#contactForm').on('submit', submitContactForm);
$('.close').on('click', () => $('.message-success').hide());
