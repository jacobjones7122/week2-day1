$(document).ready(function(){
    var friends = ['Dave', 'Emma', 'Aric', 'Joey', 'Abraham'];
    var rooms = ['Kitchen', 'Dinning Room', 'Bathroom', 'Study', 'Sitting Room', 'Entryway', 'Bedroom', 'Closet', 'Backyard', 'Slaughter House'];
    var weapon = ['knife', 'gun', 'fork', 'pillow', 'rumba', 'plastic bag', 'shoelaces', 'plastic light-saber toy', 'pen-gun', 'flail', 'clever', 'ice-sickle', 'umbrella', 'fir extingusher', 'letter-opener', 'swift kick to the throat', 'pitchfork', 'car', 'shark with laser beam attached to their heads', 'sack of flour'];
    
    function createAccusation(n) {
        var h3 = $("<h3 id = 'heading" + n + "'></h3>").text("Accusation " + (i+1));
        $("body").append(h3); 
        $('#heading' + n).click (function() {
            alert('I believe that ' + friends[n % 5] + ' is the murder and they used a ' + weapon[n % 20] + ' in the ' + rooms[n % 10]);   
        });
    };
    for (var i = 0; i < 100; i++) {
        createAccusation(i);
    };
});


    // let + closure + bind

// function createAccusation(i) {
//         alert('I believe that ' + friends[i % 5] + ' is the murder and they used a ' + weapon[i % 20] + ' in the ' + rooms[i % 10]);
//     };
// for (let i = 0; i < 100; i++) {
//     var h3 = $("<h3 id = 'heading" + i + "'></h3>").text("Accusation " + (i+1));
//     $("body").append(h3); 
//      $('#heading' + i).click (function() {
//         createAccusation(i);
//      }.bind(i));
// };


    // let + bind

// for (let i = 0; i < 100; i++) {
//     var h3 = $("<h3 id = 'heading" + i + "'></h3>").text("Accusation " + (i+1));
//     $("body").append(h3); 
//      $('#heading' + i).click (function() {
//         alert('I believe that ' + friends[i % 5] + ' is the murder and they used a ' + weapon[i % 20] + ' in the ' + rooms[i % 10]);
//      }.bind(i));
// };


    // move our code 
 
// function createAccusation(n) {
//     var h3 = $("<h3 id = 'heading" + n + "'></h3>").text("Accusation " + (i+1));
//     $("body").append(h3); 
//     $('#heading' + n).click (function() {
//         alert('I believe that ' + friends[n % 5] + ' is the murder and they used a ' + weapon[n % 20] + ' in the ' + rooms[n % 10]);   
//     });
// };

// for (var i = 0; i < 100; i++) {
//     createAccusation(i);
// };