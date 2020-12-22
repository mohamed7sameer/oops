$( function() {
    $( "#draggable" ).draggable();
    $( "#draggable" ).resizable();

  } );


  
  


  setInterval(function(){
      localStorage.setItem("positionX", $("#draggable").css("left"));
      localStorage.setItem("positionY",  $("#draggable").css("top"));
      localStorage.setItem("myValue",  $("#my-value").val());
      localStorage.setItem("fontSize",  $("#draggable p").css("font-size"));
      localStorage.setItem("color",  $("#draggable").css("color"));
      localStorage.setItem("fontWeight",  $("#draggable p").css("font-weight"));
      localStorage.setItem("lineHeight",  $("#draggable p").css("line-height"));
      localStorage.setItem("widthDrageable",  $("#draggable").css("width"));


  },1000)
  onload = function(){
      let positionX = localStorage.getItem("positionX")
      let positionY = localStorage.getItem("positionY")
      let fontSize = localStorage.getItem("fontSize")
      let myValue = localStorage.getItem("myValue")
      let color = localStorage.getItem("color")
      let fontWeight = localStorage.getItem("fontWeight")
      let lineHeight = localStorage.getItem("lineHeight")
      let widthDrageable = localStorage.getItem("widthDrageable")
      $( "#draggable" ).css("width" , widthDrageable)

      $( "#draggable p" ).css("line-height" , lineHeight)
      $( ".font-size #input-line-height" ).val(lineHeight.replace("px",""))

      

      $( "#draggable p" ).css("font-weight" , fontWeight)
      $("#select-font-weight").val(fontWeight)

      $( "#draggable").css("color" , color)
      $( "#draggable" ).css({"left":positionX,"top": positionY})
      $( "#draggable p" ).css("font-size" , fontSize)
      let a = Number(fontSize.replace("px","")) ? Number(fontSize.replace("px","")) : 0
      let b = Math.trunc(a)
      let c = (a*10 - Math.trunc(a)*10)
      $(".font-size #integer").val(b)
      $(".font-size #float").val(c)

      $( "#para" ).html(myValue)
      $("#my-value").val(myValue)


      if(document.querySelector("#bottom-tools").checked){
        $(".font-size").css({
          "top": "auto",
          "bottom" : "-40px"
        })
      }else{
        $(".font-size").css({
          "top": "-40px",
          "bottom" : "auto"
        })
      }


      
  }

  $("#my-value").on("input",function(){
      $( "#para" ).html($("#my-value").val())
  })


  function funContainer(){
        $("#id-container").removeClass("container-fluid")
        $("#id-container").toggleClass("container")
  }


  function funContainerFluid(){
    $("#id-container").removeClass("container")
    $("#id-container").toggleClass("container-fluid")
  }


  $(".font-size input").on("input",function(){
      let a = $(".font-size #integer").val() ? Number($(".font-size #integer").val()) : 0
      let b = $(".font-size #float").val() ? Number($(".font-size #float").val()) / (10**$(".font-size #float").val().length) : 0
      let c = a + b 
      $( "#draggable p" ).css("font-size" , c + "px")

      let inputLineHeight = $(".font-size #input-line-height").val()
      $( "#draggable p" ).css("line-height" , inputLineHeight + "px")
  })



  

  let allColorElements = document.querySelectorAll("#left-center .co-color div")
  for(let i = 0; i < allColorElements.length; i++){
    let x = allColorElements[i]
    x.style.backgroundColor = x.dataset.color
  }



  let allBgElements = document.querySelectorAll("#left-center .co-bg div")
  for(let i = 0; i < allBgElements.length; i++){
    let x = allBgElements[i]
    x.style.backgroundColor = x.dataset.bg
    console.log(x.dataset.bg)
  }

  $("#left-center .co-color div").on("click",function(){
    let x = $(this).data("color")
    $( "#draggable" ).css("color" , x)
    
  })


  $("#left-center .co-bg div").on("click",function(){
    let x = $(this).data("bg")
    $( "#draggable" ).css("background-color" , x)
    
  })




  $("#select-font-weight").on("change",function(){
    console.log(this.value)
    $( "#draggable p" ).css("font-weight" , this.value)
  })



  $( "#draggable p" ).on("mouseup",function(){
    $("#my-value").focus()
  })



  $("#bottom-tools").on("change",function(){
    if(this.checked){
      $(".font-size").css({
        "top": "auto",
        "bottom" : "-40px"
      })
    }else{
      $(".font-size").css({
        "top": "-40px",
        "bottom" : "auto"
      })
    }
  })


  $("#co-text-align input").on("change",function(){
    
    $("#draggable p").css("text-align",$(this).data("align"))


    
  })



  if(location.href.includes("w-100")){
    document.querySelector("#img-material").style.width="100%"
  }