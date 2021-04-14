function countLetter([string, letter]){
    let count = 0;
    for(let char of string){
        console.log(char)
        if(char === letter){
            count++;
        }
    }
    console.log('Count:' + count);
}
countLetter(['hello', 'l']);