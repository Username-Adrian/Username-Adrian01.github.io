
/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';


document.querySelector('html').style.backgroundColor = 'purple';
*/


/*
document.querySelector('html').onclick = function() {
    alert('别戳我，疼。');
}
*/

// 添加一个图像切换器
let myImage = document.querySelector('img');

myImage.onclick = function() {
     let mySrc = myImage.getAttribute('src');
     if (mySrc === "images/danbo-036.jpg") {
         myImage.setAttribute("src", "images/danbo-037.jpg");
     } else {
         myImage.setAttribute("src", "images/danbo-036.jpg");
     }
}


//添加个性化的欢迎信息。

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
    //获取用户的名字，存储名字，再更改h1里面有关名字的内容
    let myName = prompt('请输入你的名字');
    
    if (!myName || myName === null) {
        //如果myName没有值，或者值为null，那么重新调用setUsername()函数，否则把myName存储下来。
        setUsername();
    } else {
        localStorage.setItem('name', myName);//将数据存储在浏览器中供后续使用
        myHeading.textContent = 'Hello，' + myName + '!';
    }
    
}


//如果浏览器没有存储的名字，获取用户的名字.如果存储了名字，更改h1里面有关名字的内容
if (!localStorage.getItem('name')) {
    setUsername();
} else {
    //获得所存储的名字
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello，' + storedName + '!!!';
}


//设置一个myButton按钮,按击的时候，获取用户名字。

myButton.onclick = function() {
    setUsername();
}

