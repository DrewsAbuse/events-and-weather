const server = 'http://localhost:3080'

export const verifyTokenApi = (token) => {
  console.log('send api token', JSON.stringify(token))
  return fetch(`${server}/verify`, {
    method: 'GET',
     
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    console.log('!!! res',  res)
    return res
  })
}
