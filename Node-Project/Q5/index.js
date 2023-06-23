const fs = require('fs');
const file_name = "nodejs_architecture.txt";
fs.writeFileSync(file_name,"hii!!");
;fs.rm(file_name,(err) => {
    if (err) {
        console.log(err);
    }
    console.log("file deleted sucessfully!!");
})