let image = document.querySelector('.rss_image');
let canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

let arr4 = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];

function draw4SizeArray (array) {

    let scale = 128;

    for (let i = 0; i < arr4.length; i++) {
        for (let j = 0; j < arr4[i].length; j++) {
            ctx.fillStyle = '#' + arr4[i][j];
            ctx.fillRect(j * scale, i * scale, scale, scale);
        }
}

}

function draw32SizeArray(array) {

    let scale = 16;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < arr32.length; i++) {
        for (let j = 0; j < arr32[i].length; j++) {
            ctx.fillStyle = `rgba(${arr32[i][j][0]}, ${arr32[i][j][1]}, ${arr32[i][j][2]}, ${arr32[i][j][3] / 255.0})`;
            ctx.fillRect(j * scale, i * scale, scale, scale);
        }
    }
}

function drawImage () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, 512, 512);
}