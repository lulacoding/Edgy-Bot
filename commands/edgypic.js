exports.run = (client, message, args) =>{
        //Amount of images
        number = 4235;
        //Randomly selects and image
        imageNumber = Math.floor (Math.random() * (number -1 + 1)) + 1;
        //Sets the folder location of the images and name must be nammed "1.jpg" / "2.jpg" and so on through to max amount of images you like 
        message.channel.send(message.author, {files: ["./jpgs/" + imageNumber + ".jpg"]})

    
};