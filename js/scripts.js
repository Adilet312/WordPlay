
$(document).ready(function()
{
  $("form#grocery").submit(function(event)
  {
    event.preventDefault();
    var sentence = $(".food").val();
     console.log(sentence);
     var newArray =[];
    var element=" ";
    var index=0;
    for(var i=0; i<sentence.length; i++)
    {
      if(sentence.charAt(i)!=" ")
      {
        element+=sentence.charAt(i);
      }
      else
      {
        newArray[index]=element;
        console.log(element);
        index++;
        element=" ";
      }

    }
    console.log(newArray);
    var sentenceBack=" ";

    for( var j=newArray.length-1; j>=0; j--)
    {
      sentenceBack+=newArray[j]+" ";

    }
    $(".items1").append("<p>"+sentenceBack+"</p><br>")
console.log(sentenceBack);

    });
  });
