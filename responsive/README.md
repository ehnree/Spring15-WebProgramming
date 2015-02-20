// README 
// Name: Henry Zhou
// Course: Comp 20
// Lab 4: Responsive Design

Approximately an hour was spent completing this assignment. 

All work was performed solo with assistance from the links provided on the
assignment page. 

index.html shows various parts of the image software.png depending
on the configured width of the screen. Starting from a minimum
screen width of 400 pixels, index.html shows the bottom right
sub-image of software.png and each subsequent sub-image in 
leftward, row-major order as the width of the screen increases.
Every sub-image is shown in its corresponding media screen
width from x01 to (x+1)00 px, where x is some integer 
between 4 and 11 (except for the top left and bottom right
sub-images). 

This is made possible through media queries made in
responsive.css and manipulation of software.png 
as a sprite. 

