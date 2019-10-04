$(document).ready(onReady);

let meetupCounter=1;

function onReady(){
    console.log('in onReady')
    $('#addMeetup').on('click', addMeetup);
    //display starting meetup counter
    $('#totalMeetup').append('<p id=\"currentCount\">'+meetupCounter+'</p>');
    //listenDelete();
    $('.delete').on('click', listenDelete);

}//end onReady

function addMeetup(){
    console.log('in addMeetup');
    //grab values from two input fields
    let group=$('#newGroup').val();
    let date=$('#newDate').val();
    //incremenet meetupCounter
    meetupCounter++;
    //add values to table including new delete button
    let str='<tr id=\"'+meetupCounter+'\"><td>' 
    + group + '</td><td>' + date +
    '</td><td><button class="delete">Delete</button></td></tr>';
    $('#meetupTable').append(str);
    //add listener for new delete button
    listenDelete();
    //increment counter and send back to p tag
    $('#currentCount').text(meetupCounter);

}//end addMeetup

function deleteRow(rowId){
    console.log('in delete row');
    //remove row based on id
}//end delete row

function listenDelete(){
    console.log('in listenDelete')
    //set listener for current delete button
    //('.delete').on('click', function (){
        //deleteRow();
    //});
}