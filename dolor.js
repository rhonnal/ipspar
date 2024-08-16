const url = 'https://example.com/api/resource';
const data = {
  key1: 'value1',
  key2: 'value2'
};

fetch(url, {
  method: 'POST', // Specify the method as POST
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data) // Convert data object to a JSON string
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
