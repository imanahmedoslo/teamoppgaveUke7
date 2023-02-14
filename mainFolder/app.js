
function updateVeiw(){
    document.getElementById('app').innerHTML = /*HTML*/
    `<div id="infoDiv">instructions for the game Appear here</div>
    <div id="animationsDiv">
    <img src="car.png" id="car" class="car">
    </div>
    <div id="actionDiv" class="actionDiv"> 
    <p>this is where possible actions can be taken</p>
    <button id="grabItem" onclick="grabItem()">grab Item</button>
    <button id="wave" onclick="greet(this)"> wave to the friend</button>
    <button id="fist-pumb" onclick="greet(this)"> fist-pumb</button>
    <button id="handshake" onclick="greet(this)"> handshake</button>
   </div>`
}
updateVeiw()