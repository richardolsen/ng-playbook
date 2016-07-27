# ng-playbook
Fork of https://github.com/usds/playbook/ using angularjs instead of ruby

#About this project
We were after a simple playbook for the CoLearn Meetup project.  

I liked the way the Digital Services playbook allows users to edit the playbook using markdown.  I didn't want to have to use ruby so I've changed the code to use angularjs.

The project also uses showdown.js to convert the markdown to html.

Edit the plays folder to create your own plays. Play files need to be numbered sequentially eg 01.md, 02.md with the header containing the play_number and title as per the Digial Services Playbook.

The introduction.md file found in the includes folder can also be edited using markdown.

#To install
Just copy all the files to the folder of your choice.

Currently you will need to edit the url (which is my local test server) in the ng-playook.js file - this will be fixed soon.
