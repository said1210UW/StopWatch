/* Name: Said Sheck
  * Date: 07/16 2020
  Section: CSE 154 AL
  The following javascript file creates the ability for our
  web app to start, stop, and reset of our online stop watch
  */

"use strict";
(function() {
  let initialSecond = 0;
  let initialMinute = 0;
  let initialHours = 0;
  let timeInterval = 0;
  window.addEventListener('load', innit);

  function innit() {
    let timeStamp = id("clock");

    //start time
    let start = id("start"); //get the startbutton
    start.addEventListener('click',function() {
      timeInterval = setInterval(function(){
        startMethod(timeStamp);
      },1000);
    });

    //stop time
    let stop = id("stop");
    stop.addEventListener('click',function() {
      clearInterval(timeInterval);
    });

    //clear time
    let reset = id("reset");
    reset.addEventListener('click', function(){
      clear(timeStamp)
    });
  }

  /* The Following returns an Element in the HTML file which matches with its ID
   * @Param idName - The Following paramater is a string which represents the tag's ID
   * @Returns An element from the HTML File which Matches the given ID
  */
  function id(idName) {
    return document.getElementById(idName);
  }

  /* The Following returns an Array of Elements from the HTML file which matches the given selector
   * @Param selector - The Following paramater is a string which represents the tags secletor
   * @Returns An array of elements
  */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /* The Following returns an Element from the HTML file which matches the given selector
   * @Param selector - The Following paramater is a string which represents the tags secletor
   * @Returns an Element
  */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /* The Following Starts the Timer for the StopWatch and changes the time on screen
   * @Param timeTag - The Following represents
  */
  function startMethod(timeTag){
    //chanhing the time
    initialSecond++;
    if (initialSecond == 60) {
      initialSecond = 0;
      initialMinute++;
    } else if (initialMinute == 60) {
      initialMinute = 0;
      initialHours++;
    }
    timeTag.innerHTML =  initialHours + " : " + initialMinute + " : " +
                             initialSecond;
  }

  function stopMethod() {
   clearInterval(timeInterval);
  }


  function clear(timeTag) {
    clearInterval(timeInterval);
    initialSecond = 0;
    initialMinute = 0;
    initialHours = 0;
    timeTag.innerHTML = "00: 00 : 00";
  }

})();