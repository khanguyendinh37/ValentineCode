// Thay đổi nội dung búc thư ở đây
var letterContent = "Gửi đến cô gái bé nhỏ của tôi. Tuy chúng ta ít nói chuyện và trao đổi với nhau và cũng vô tình làm cho em thiệt thòi hơn những cô gái khác vì không thể cùng em đi chơi xem phim hay làm những việc lãng mạn mà bao cặp đôi khác đều có. Vì yêu xa anh cũng không thể chạy tới ôm em lúc em buồn và vấp ngã trước cuộc sống. Tuy em luôn tỏ ra mạnh mẽ nhưng anh biết em không mạnh mẽ như vẻ bề ngoài em tỏ ra. Tuy chúng ta ít gặp nhau nhưng anh biết chúng ta đã rất hiểu về nhau thế nên em có thể khóc mỗi khi anh gọi đến để gạt bỏ đi các áp lực của cuộc sống vào anh. Anh sẽ thay em gánh lấy gánh nặng đó và yêu thương em cho đến già. Và cuối cùng mùa valentine này chúng ta vẫn chưa thể bên nhau nhưng anh chúc cho em hạnh phúc, xinh đẹp và sống vui vẻ hơn mỗi ngày. Anh yêu em và anh sẽ chờ ngày mà em quay về bên anh."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})