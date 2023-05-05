const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get data
  const name = form.elements['name'].value;
  const college = form.elements['college'].value;
  const email = form.elements['email'].value;
  const team = form.elements['team'].value;
  const skills = form.elements['skills'].value;
  const year = form.elements['year'].value;

  // Validate data
  if (!name || !college || !email || !team || !skills || !year) {
    alert('Please fill in all the fields.');
    return;
  }

  // Send the form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/submit');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      alert('Thank you for your submission!');
      form.reset();
    } else {
      alert('Something went wrong. Please try again later.');
    }
  };
  xhr.send(JSON.stringify({
    name,
    college,
    email,
    team,
    skills,
    year
  }));
});
