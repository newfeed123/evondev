const button = document.querySelector(".button");
function handleClick() {
  console.log("click me");
}
button.addEventListener("click", handleClick);

//1. bubbling: nổi bọt sự kiện chạy từ trong ra ngoài
    //muốn ngăn thì dùng e.stopPropagaition() trong hàm của thằng con
    //hoặc e.stopImmediatePropagation()
//2. target và current target

const btn = document.querySelector(".change")
btn.addEventListener("click", handleChangeColor)
const colors = ["#ffa400", "#bfa400", "#gfa500", "#ffb86b"]
function handleChangeColor(){
    // document.body.setAttribute("style", "background-color: red")

    const color = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = color
}

//3. custom attribute
const link = document.querySelector(".link");
link.addEventListener("click", function(event){
    event.preventDefault()
    //data-name="evondev"
    //data-name-huy="123evondev"
    console.log(event.target.dataset.name);
    console.log(event.target.dataset.nameHuy);
})
