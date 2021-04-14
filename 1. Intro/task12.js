function isSimple(value) {
    let count = 0;
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            count++;
            break;
        }
    }
    if (count === 0)
        console.log("Числото е просто");
    else
        console.log("Числото не е просто");
}
isSimple(19);
isSimple(44);