function biggest([num1, num2, num3]){
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    console.log(Math.max(num1, num2, num3));
}

biggest(['25','99','201']);
biggest(['10','17','-66']);
