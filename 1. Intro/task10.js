function coneTask(r, h) {
    let s = Math.sqrt(r * r + h * h);
    let volume = Math.PI * r * r * h / 3;
    console.log("V= " + volume.toFixed(2));

    let area = Math.PI * r * (r + s);
    console.log("S= " + area.toFixed(2));
}
coneTask(5, 3);

