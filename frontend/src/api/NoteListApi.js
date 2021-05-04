import Cookie from 'js-cookie'
const server = 'http://localhost:5000'

const fetchNotesAPI = (User) => {
  try {
    return fetch(`${server}/notes/${User._id}`, {
      method: 'GET',
      headers: {
        Authorization: `${Cookie.get('Authorization')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => res)
  } catch (error) {
    console.log(error)
  }
}
const addNoteAPI = (note) => {
  try {
    return fetch(`${server}/notes/`, {
      method: 'POST',
      body: JSON.stringify({ userId: note.user_id, note: note }),

      headers: {
        Authorization: `${Cookie.get('Authorization')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log('!!! res', res)
      return res
    })
  } catch (error) {
    console.log(error)
  }
}
const removeNoteAPI = (id, User) => {
  try {
    return fetch(`${server}/notes/${User._id}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `${Cookie.get('Authorization')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return res
    })
  } catch (error) {
    console.log(error)
  }
}
export { removeNoteAPI, addNoteAPI, fetchNotesAPI }
