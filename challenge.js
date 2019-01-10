


let isPaused = false;

// window.setInterval(function, milliseconds);

const count = document.getElementById('counter')

function counterStart() {
    setInterval(function() {
      if (!isPaused) {
        count.innerText++
       }
    }, 1000)
  }

  counterStart()

const pause = document.getElementById('PAUSE')
pause.addEventListener('click', pt)

function pt(event){
    isPaused = !isPaused
    if(isPaused === true){
        document.getElementById('PAUSE').innerText = 'RESUME'
    }
    else {
        document.getElementById('PAUSE').innerText = 'PAUSE'
    }
}

const minus = document.getElementById('-')
minus.addEventListener('click', subtract)

function subtract(event){
    // document.getElementById('counter').innerText
    // // counter.toString()?
    count.innerText--
}

const add = document.getElementById('+')
add.addEventListener('click', increase)

function increase(event){
    count.innerText++
}


let like = document.getElementById('<3')
let likes = 0
let obj = {}
like.addEventListener('click', love)


function love(event){

    let time = count.innerText;
    
    let likeList = document.querySelector('ul')
    // let lastLike = likeList.children[likeList.children.length - 1]
    let text = document.createElement('li')
    

    if(!obj[time]){
        obj[time]=1
        text.innerText = `${time} has been liked 1 time`
        text.setAttribute("id", time)
        likeList.append(text)
    }
    else{
        let text= document.getElementById(time)
        obj[time] += 1
        text.innerText = `${time} has been liked ${obj[time]} time`
        likeList.append(text)
    }


  
}