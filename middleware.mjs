let fileEndings = ['jpg', 'jpeg', 'ppx', 'gif', 'docx', 'xlxs', 'png', 'exe']
for (let i = 0; i < fileEndings.length; i++) {
    const file = fileEndings[i];
}

export function validateFileType(req, res, next){
    const fileType = req.body.filename

    const fileEnding = fileType.split('.').pop();
     const isValid = fileEndings.find(item => item === fileEnding);

   if(isValid){
    console.log(fileType + " is a valid file type");
    next();
   } else {
    console.log(fileType + " is not a valid file type");
    res.status(400).send("Invalid file type");
   }
}

