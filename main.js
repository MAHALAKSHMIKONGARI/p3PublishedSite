/*
const mul = (x, y, z) => { return x * y * z }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) 
  {
    event.target.nextElementSibling.innerHTML = ''
  } 
  else 
  {
    event.target.nextElementSibling.innerHTML = ''
    event.target.focus()
  }
}

const updateWithMultiply = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#length').checkValidity() && document.querySelector('#breadth').checkValidity() && document.querySelector('#height').checkValidity())
   {
    const i = parseInt(document.querySelector('#length').value)
    const j = parseInt(document.querySelector('#breadth').value)
    const k = parseInt(document.querySelector('#height').value)
    const ans = ` Volume of a Cube with length: ${i}, breadth: ${j}, height: ${k} is ${mul(i, j, k)} `
    document.querySelector('#result').innerHTML = ans
  }
}

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'length') ||
    (event.target && event.target.id === 'breadth') || 
    (event.target && event.target.id === 'height')) 
  {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'mulButton')
   { 
     updateWithMultiply(event)
   }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
})*/

//console.log('SCRIPT START')
    //console.log('Declare testtable functions......................')
    function mult(x, y, z) { return x * y * z }
    //console.log('Defined mul=' + mult)
    //console.log('Declare event listeners .......................')
    {
    window.addEventListener('load', (event) => {
      console.log('  Starting initialization ')
      if (localStorage.getItem('length')) 
      {
        document.querySelector('#length').value = parseInt(localStorage.getItem('length'))
        console.log(`  Stored length = ${localStorage.length}`)
      }
      if (localStorage.getItem('breadth')) 
      {
        document.querySelector('#breadth').value = parseInt(localStorage.getItem('breadth'))
        console.log(`  Stored breadth = ${localStorage.breadth}`)
      }
      if (localStorage.getItem('height')) 
      {
        document.querySelector('#height').value = parseInt(localStorage.getItem('height'))
        console.log(`  Stored height = ${localStorage.height}`)
      }
      console.log('  Finished initialization')
    })
  }
    document.querySelector('#mulButton').addEventListener('click', () => {
      console.log('  Starting clicker click handler')
      const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
      const i = document.querySelector('#length').value
      console.log('i=' + i)
      const j = parseInt(document.querySelector('#breadth').value)
      console.log('j=' + j)
      const k = parseInt(document.querySelector('#height').value)
      console.log('k=' + k)
      const ct = origCount + 1
      const ans = ` Volume of a Cube with length: ${i}, breadth: ${j}, height: ${k} is ${mult(i, j, k)}. This has been run  ${ct}  times.`
      document.querySelector('#result').innerHTML = ans
      localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
      localStorage.setItem('length', i)
      localStorage.setItem('breadth', j)
      localStorage.setItem('height', k)
      console.log('  Finished clicker click handler')
    })
    document.querySelector('#wiper').addEventListener('click', () => {
      console.log('  Starting wiper click handler')
      localStorage.removeItem('countOfClicks')
      localStorage.removeItem('length')
      localStorage.removeItem('breadth')
      localStorage.removeItem('height')
      console.log('  Finished wiper click handler - localStorage entries removed')
    })
     function loadDoc() {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("demo").innerHTML =
              this.responseText;
            }
          };
          xhttp.open("GET", "ajax.txt", true);
          xhttp.send();
        }
    //console.log('SCRIPT END')