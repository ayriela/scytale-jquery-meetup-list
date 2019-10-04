# scytale-jquery-meetup-list

- create `index.html` and `client.js` and add `jquery.js`

- add onReady function for page load
- add  inputs for "New Group" and "Next Date" to html
	- make sure the inputs and add meetup are displayed inline (css or html)
	- looks like they want label above the input field  (css or html)

- add button for "addMeetup" (html)
	- add event listening for meetup action to append values to table (js `addMeetup()`)

- build out table 3 column table with headings in html:  "Group", "Next Meetup", "Delete"
	- hard code some test rows in html
    - based on current meet up list  add each element in array to table (js add Id (use counter) to target in deleteRow)
	- add delete button to each row in a column (js add action within `addMeetup()`)
		-add event listening to delete the current row when clicked (js `deleteRow()`)
        -use rmv to target row id 
        -after each addMeetup() add event listning for new delete

 - add counter to the bottom  (html)
	-  set base count on page load (js `counter`)
    - use this `counter` for table row ids
	- make sure it increments based in add meetup button click  (js `addMeetup()`)