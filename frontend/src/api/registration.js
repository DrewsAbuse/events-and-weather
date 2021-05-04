const server = 'http://localhost:5000'
console.log(server)
export const registration = (username, password) => {
  return fetch(`${server}/reg`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),

    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    console.log('!!!!', res)
    return res
  })
}
