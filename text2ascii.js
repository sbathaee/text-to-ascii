var image;
var source;

var loadFile = function(event) {
    async function process(event) {
        source = URL.createObjectURL(event.target.files[0]);       // get the source of the image
        image = await IJS.Image.load(source);                      // load the image
        image = image.grey();                                      // greyscale it
        document.getElementById('output').src = image.toDataURL(); // DISPLAY IT
    }
    process(event);
};