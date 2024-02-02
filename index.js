function submitData(userName, userEmail){
  const requestBody = {
    name: userName,
    email: userEmail
  }

  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(requestBody)
  }

  return fetch('http://localhost:3000/users', configObj)
  .then(response => response.json())
  .then(data => {
    const h2 = document.createElement('h2')
    h2.textContent = data.id 
    document.body.appendChild(h2)
  })
  .catch(error => {
    const h2 = document.createElement('h2')
    h2.textContent = error.message
    document.body.appendChild(h2)
  })
}
