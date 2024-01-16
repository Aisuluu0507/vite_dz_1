import React from 'react'
import './Form.css'

const CreatePost = () => {
  return (
    <div className='form'>
      <form action="" className="post">
      <div className="form-inner">
      <h2>Отправить форму ?<br/>
      Проверьте свои даные</h2>
      <div className="form-content">
      <h3>Ваше имя:</h3>
      <p><input type="text" name="your-name" /></p>
      <p><input type="submit" value="Отправить" /></p>
      </div>
      </div>
      </form>


    </div>
  )
}

export default CreatePost