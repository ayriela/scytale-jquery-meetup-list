$(document).ready(onReady);

let meetupCounter=1;

function onReady(){
    console.log('in onReady')
    $('#addMeetup').on('click', addMeetup);
    //display starting meetup counter
    $('#totalMeetup').append('<p id=\"currentCount\">'+meetupCounter+'</p>');
    $('#meetupTable').on('click', '.delete', deleteRow);
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
    //increment counter and send back to p tag
    $('#currentCount').text(meetupCounter);

}//end addMeetup

function deleteRow(){
    console.log('in delete row');
    //get the delete row
    //for  id base remove which is unnecessary let myRow=$(this).closest("tr").attr("id");
    //remove row based on id $('#'+myRow).remove();
    //remove the row from the click
    $(this).closest("tr").remove();
    //decrement the counter
    meetupCounter --;
    $('#currentCount').text(meetupCounter);

}//end delete row

/*unused would have to remove and readd all listeners so it doesn't duplicate listeners
function listenDelete(){
    console.log('in listenDelete')
    //set listener for current delete button
    $('.delete').on('click', function (){
        deleteRow();
    });
} 
*/