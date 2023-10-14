export const move = function(e) {
    var chooseElement;
    const circle_btn = document.querySelector(".circle");
    circle_btn.addEventListener("mousedown", () => {
        circle_btn.style.position = "absolute"
        chooseElement = circle_btn

        document.onmousemove = (e) => {
            var x = e.pageX
            
            chooseElement.style.left = x + "px"
        }
    })
}