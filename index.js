console.log("hello word")
function l(){
        if(document.getElementById("car").classList.contains("carright")){
            document.getElementById("car").classList.add("carcenter") 
            document.getElementById("car").classList.remove("carright")
            return}
        console.log(document.getElementById("car").classList)
        if(document.getElementById("car").classList.contains("carcenter")){
            document.getElementById("car").classList.add("carleft") 
            document.getElementById("car").classList.remove("carcenter")

        }
}
function r(){
   if(document.getElementById("car").classList.contains("carleft")){
       document.getElementById("car").classList.add("carcenter")
       document.getElementById("car").classList.remove("carleft")
       return}
       console.log(document.getElementById("car").classList)
       if(document.getElementById("car").classList.contains("carcenter")){
        document.getElementById("car").classList.add("carright") 
        document.getElementById("car").classList.remove("carcenter")
    }
{}

    }
  window.addEventListener("keydown",(event) => {
      console.log(event.key)

      
      if (event.key === "d"){
          r()
      }
      if (event.key === "a"){
          l()
      }
  })  

  


var x = Math.floor(Math.random() * 5)
console.log(x) 
carNames = ['carblack',"carred","carpink","carwhite","carblue"]
chosenCar = carNames[x]
document.getElementById("enemycar").innerHTML=`
<img id="enemycar" class="enemycar" src="./imges/${chosenCar}.png" alt="">

`





