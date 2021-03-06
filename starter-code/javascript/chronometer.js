class Chronometer {
    constructor(){
        this.intervalId = 0;
        this.currentTime = 0;
    }

    startClick() {
        this.intervalId = setInterval(function() {
            this.currentTime += 1;
            this.setTime();
        }.bind(this), 1000);
    }   

    setMinutes() {

        return Math.floor(this.currentTime/60);
    }

    setSeconds() {
        return this.currentTime%60;
    }

    twoDigitsNumber(numbers) {
        if (numbers<10){
            return "0"+ numbers;
        }
        else {
            return numbers+ "";
        }
    }

    setTime (){

        var min = this.twoDigitsNumber(this.setMinutes);
        var sec = this.twoDigitsNumber(this.setSeconds);
        return [min,sec]
    }

    stopClick() {
        return clearInterval("intervalId");
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {

    }
} 
// Constructor
// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
