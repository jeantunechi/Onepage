const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const message = document.getElementById('message').value;


  if(!name || !telephone || !message || !email){
    alert('ggggg');
    return;
  }
  else{
    alert('Merci pour votre message !');
    form.reset();
  }
 
});