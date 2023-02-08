class MyLine {
    contructor() {
        this.px = pwinMouseX
        this.py = pwinMouseY
        this.x = winMouseX
        this.y = wonMouseY
    }
    show() {
        stroke(255)
        line(this.px,this.py,this.x,this.y)
    }
}