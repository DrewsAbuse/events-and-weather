import React, { useState, useContext } from 'react'
import { Login } from './From/Login'
import { Registration } from './From/Registration'
import { ToggleButton } from '../ToggleButton'
import Modal from '../Modal'
import { UserContext } from '../../context/user/userContext'
import { NoteListContext } from '../../context/noteList/noteListContext'
const Authentication = function () {
  const [valueToggle, setValueToggel] = useState(true)
  const [valueModal, setValueModal] = useState(false)
  const { User, signOutUser } = useContext(UserContext)
  const { clearNotes } = useContext(NoteListContext)
  const authShow = () => {
    User.LoginStatus ? signOutUser(clearNotes) : setValueModal(true)
  }

  const LabelValue = ['Login', 'Registration']
  const ColorValue = ['#b3b3b3', 'rgb(102,205,170)']
  return (
    <div>
      <button type='button' className='btn btn-dark' onClick={authShow}>
        {User.LoginStatus ? 'Sig Out' : 'authorization'}
      </button>

      <Modal
        brRadius={'100px 30px'}
        bgColor={valueToggle ? ColorValue[0] : ColorValue[1]}
        open={valueModal}
        onClose={() => {
          setValueModal(false)
        }}
      >
        <div className='text-right mb-5'>
          <ToggleButton btnColor={ColorValue} buttonLabels={LabelValue} isOn={valueToggle} handleToggle={() => setValueToggel(!valueToggle)} />
        </div>
        <div className='text-center'>
          <div>{valueToggle ? <Registration /> : <Login setValueModal={setValueModal} />}</div>
        </div>
      </Modal>
    </div>
  )
}
export { Authentication }
