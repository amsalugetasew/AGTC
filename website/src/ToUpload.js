
import React from 'react'

function ToUpload() {
  return (
    <div>
      <h1>Upload Image</h1>
     <form action="/uploadphoto" enctype="multipart/form-data" method="POST">
         <input type="file" name="myImage" accept="image/*"/>
         <input type="submit" value="Upload Photo"/>
     </form>
    </div>
  )
}

export default ToUpload


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>node js upload image to mongodb</title>
// </head>
// <body>
//     <h1>Upload Image</h1>
//     <form action="/uploadphoto" enctype="multipart/form-data" method="POST">
//         <input type="file" name="myImage" accept="image/*">
//         <input type="submit" value="Upload Photo">
//     </form>
// </body>
// </html>