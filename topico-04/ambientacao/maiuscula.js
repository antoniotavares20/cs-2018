
if (process.argv.length != 3){
    console.log("forneça um unico argumento");
    return;
}
console.log(process.argv[2].toUpperCase());