let fileEndings = [
    { ending:'jpg' },
    { ending: 'jpeg' },
    { ending: 'png' },
];

export function validateFileType(fileType){
    const fileEnding = fileType.split('.').pop();
     const isValid = fileEndings.find(item => item.ending === fileEnding);

   if(isValid){
    console.log(fileType + " is a valid file type");
   } else {
    console.log(fileType + " is not a valid file type");
   }
}