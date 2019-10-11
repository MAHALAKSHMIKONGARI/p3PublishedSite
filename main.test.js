QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST add', assert => {
  assert.equal(mult(1, 1, -1), -1, 'Positive integers')
  assert.equal(mult(-1, -1, 2), 2, 'Negative integers')
  assert.equal(mult(-9, -3, -1), -27, 'Mixed')
  assert.equal(mult(0, 0, 0), 0, 'Null')
  assert.equal(mult(1.5, 1.5, 1.5), 3.375, 'Decimal Integers')
})

function mult(x, y, z){ return x * y * z }
QUnit.config.autostart = false  // sync = false; start after loading html

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})

QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#length')
  const warning = document.querySelector('#firstWarning')
  input.value = -3;
  assert.equal(input.value, -3, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})

