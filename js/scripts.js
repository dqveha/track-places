//BUSINESS LOGIC


//B.L. for Records
function Records() {
  this.places = {};
  this.currentId = 0;
}

Records.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

Records.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};


//B.L. for TrackPlaces
function TrackPlaces(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}






//UI LOGIC





// $(document).ready(function() {
  
// });

