// import React from 'react'
// import { WrapperBox } from 'admin-bro'

// const Dashboard = (props) => {
//     class ImageUpload extends React.Component{
//         constructor(props){
//             super(props);
//             this.state = {
//                 multerImage: DefaultImg
//             }
//         }
//         setDefaultImage(uploadType){
//             if(uploadType === "multer"){
//                 this.setState({
//                     multerImage: DefaultImg
//                 });
//             }
//         }
//         uploadImage(e, method){
//             let imageObj = {};
//             if(method === "multer"){
//                 let imageFormObj = new FormData();
//                 imageFormObj.append("imageName", "multer-image-" + Date.now());
//                 imageFormObj.append("imageData", e.target.files[0]);

//                 this.setState({
//                     multerImage:URL.createObjectURL(e.target.files[0])
//                 });
//                 axios.post(`$http://localhost:500/api/images/image/uploadmulter`, imageFormObj)
//                 .then((data) => {
//                     if(data.data.success){
//                         alert("Image Saved Successfully");
//                         this.setDefaultImage("multer");
//                     }
//                 })
//                  .catch(err) => {
//                     alert("Error while uploading");
//                     this.setDefaultImage("multer");
//                 }
//             }
//         }
       
//     }
//     return(
//         <div className="image-container"></div>
//     ) 
// }

// export default Dashboard