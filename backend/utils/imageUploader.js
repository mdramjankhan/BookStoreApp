const  cloudinary = require("cloudinary").v2

// exports.uploadImageToCloudinary = async(file,folder,height,quality) => {
    
//         const options = {folder};
//         if(height) {
//             options.height = height;
//         }
//         if(quality) {
//             options.quality = quality;
//         }
//         options.resource_type = "auto";
        
//         return await cloudinary.uploader.upload(file.tempFilePath,options);
// }




// async function uploadFileToCloudinary(file,folder,quality) {
//     const options = {folder};
//     console.log("Temp file path: ",file.tempFilePath);
//     if(quality){
//         options.quality = quality;
//     }
//     console.log(options);
//     options.resource_type = "auto";
//     return await cloudinary.uploader.upload(file.tempFilePath,options);
// }

exports.uploadImageToCloudinary = async(file,folder,height,quality) => {
    const options = {folder};
    console.log("Temp file path: ",file.tempFilePath);
    if(quality){
        options.quality = quality;
    }
    console.log(options);
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

