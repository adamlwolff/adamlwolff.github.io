document.addEventListener("DOMContentLoaded", function(){});
var form = document.getElementById('formElement');

form.addEventListener("submit", function (event)
{
    event.preventDefault();
    createMeme();
    form.reset()
    console.log(event.target)
});


var elementID = 0;

function createMeme()
{
    var item = document.getElementById('main');     //VERY IMPORTANT TO USE GETID OTHER GET'S WILL USE NODE LIST :BAD
    var divContainer = document.createElement('div');
    divContainer.className="container"
    divContainer.id="divCon" + elementID;

    var upDiv = document.createElement('div');
    upDiv.setAttribute("class", "upDiv");
    var downDiv = document.createElement('div');
    downDiv.setAttribute("class", "downDiv");


    var img = document.createElement('img');
    img.src=document.getElementById("downloadImage").value
    var topText = document.getElementById("topText").value
    var top = document.createTextNode(topText)
    console.log(topText)
    var botText = document.getElementById("bottomText").value;
    var bot  = document.createTextNode(botText)
    console.log(botText)

    item.appendChild(divContainer);
    divContainer.appendChild(img)
    divContainer.appendChild(upDiv)
    divContainer.appendChild(downDiv)
    upDiv.appendChild(top)
    downDiv.appendChild(bot)

    createDeleteButton(divContainer);
    elementID++;
}

    function createDeleteButton(parentID)
    {
        var butt = document.createElement('button');
        butt.className="deleteMeme";
        butt.innerText="X"
        butt.type="click"
        parentID.appendChild(butt);

        butt.addEventListener("click", function(event)
        {
            event.preventDefault();
            console.log(event.target);
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        })

}