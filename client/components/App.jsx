import React, { useState } from 'react'

const App = () => {
  const [image, setImage] = useState({})
  const fileOnChange = (event) => {
    console.log(event.target.files[0])
  }

  const sendImage = (event) => {
    const formData = new formData()

    formData.append('avatar', image)

    // fetch('http://localhost:3000/uploadFile', {
    //   method: 'post',
    //   body: formData,
    // })
    //   .then((res) => res.text())
    //   .then((resBody) => {
    //     console.log(resBody)
    //   })
    //   .catch((err) => {
    //     console.error(err.message)
    //   })
  }
  return (
    <>
      <h1> Add an Image!</h1>

      <div>
        <form method="POST" action="/uploadFile" encType="multipart/form-data">
          <input type="file" name="avatar" onChange={fileOnChange} />
        </form>
        <button onClick={sendImage}> Upload me!</button>
      </div>

      <h2>Looking good!</h2>
    </>
  )
}

export default App
