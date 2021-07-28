var colors = {pink: "#f09", purple: "#309", yellow: "#ff3", cinnabar: "#f46", white: "#fff", blue: "#49f", cyan: "#0ff", green: "#0c3",
              vk: "#38f", mail: "#d27", yadisk: "#c0f", gdisk: "#0c3", yt: "#f46"}
var yadiskDiv = document.querySelector(".yadisk")
var gdiskDiv = document.querySelector(".gdisk")
var a = document.querySelector('.email-m')

yadiskDiv.onmouseenter = function () {
    yadiskDiv.children[0].children[0].setAttribute("href", "yadiskhover.svg")
}
yadiskDiv.onmouseleave = function () {
    yadiskDiv.children[0].children[0].setAttribute("href", "yadisk.svg")
}

gdiskDiv.onmouseenter = function () {
    gdiskDiv.children[0].children[0].setAttribute("href", "gdiskhover.svg")
}
gdiskDiv.onmouseleave = function () {
    gdiskDiv.children[0].children[0].setAttribute("href", "gdisk.svg")
}
window.onresize = function() {
    if (show) {
        if (document.body.offsetWidth <= 600) {
            modal.style.left = "calc(10vw - 6px)"
        } else {
            modal.style.left = "25vw"
        }
    } else {
        modal.style.left = "-200vw"
    }
}
var fixedLink = document.querySelector(".modal")
var vkIcon    = document.querySelector(".vk")
var mailIcon  = document.querySelector(".mail")
var gdIcon    = document.querySelector(".gdisk")
var ydIcon    = document.querySelector(".yadisk")
var modal     = document.querySelector(".modal")
var modalBg   = document.querySelector(".modal-bg")
var linkText  = document.querySelector(".link-text")
var show      = false
var active    = ""
var lastColor = colors.vk
var mobile    = false
var showTime  = setTimeout(function() {}, 1)
var hideTime  = setTimeout(function() {}, 1)
modalBg.style.animation = "none"
modalBg.onclick = hideModal
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector(".footer").style.display = "none"
    modal.style.display = "none"
    modalBg.style.display = "none"
    document.querySelector(".comments").style.borderBottom = "none"
} else {
    document.querySelector(".contacts-m").style.display = "none"
}
vkIcon.onclick = function () {
    if (active != "vk" && active != "") {
        hideModal(false)
        setTimeout(function() {
            createQR("Извините, группы пока нет", "Группа в ВК")
            showModal(colors.vk, false)
        }, 950)
        show = true
    } else if (show) {
        hideModal()
        return
    } else {
        show = true
        createQR("Извините, группы пока нет", "Группа в ВК")
        showModal(colors.vk)
    }
    active = "vk"
}
mailIcon.onclick = mailIcon.ontouchstart = function () {
    if (active != "mail" && active != "") {
        hideModal(false)
        setTimeout(function() {
            createQR("Извините, группы пока нет", "Почта")
            showModal(colors.mail, false)
        }, 950)
        show = true
    } else if (show) {
        hideModal()
        return
    } else {
        show = true
        createQR("Извините, группы пока нет", "Почта")
        showModal(colors.mail)
    }
    active = "mail"
}
gdIcon.onclick = gdIcon.ontouchstart = function () {
    if (active != "gdisk" && active != "") {
        hideModal(false)
        setTimeout(function() {
            createQR("https://drive.google.com/drive/folders/1h6zywX_9QpAjze7a59cEieSenaLMdG6a?usp=sharing", "Google drive")
            showModal(colors.gdisk, false)
        }, 950)
        show = true
    } else if (show) {
        hideModal()
        return
    } else {
        show = true
        createQR("https://drive.google.com/drive/folders/1h6zywX_9QpAjze7a59cEieSenaLMdG6a?usp=sharing", "Google drive")
        showModal(colors.gdisk)
    }
    active = "gdisk"
}
ydIcon.onclick = ydIcon.ontouchstart = function () {
    if (active != "yadisk" && active != "") {
        hideModal(false)
        setTimeout(function() {
            createQR("https://disk.yandex.ru/d/tXVXttohc5Jc_A", "Yandex disk")
            showModal(colors.yadisk, false)
        }, 950)
        show = true
    } else if (show) {
        hideModal()
        return
    } else {
        show = true
        createQR("https://disk.yandex.ru/d/tXVXttohc5Jc_A", "Yandex disk")
        showModal(colors.yadisk)
    }
    active = "yadisk"
}
function showModal(color, blurStart=true) {
    clearTimeout(hideTime)
    linkText = document.querySelector(".link-text")
    linkText.href = "javascript:linkOnclick()"
    modal.style.animation = "ease-in-out 1s 1 goin"
    modal.style.opacity = "100%"
    modal.style.display = "flex"
    if (blurStart) {
        modalBg.style.animation = "ease-in-out 1s 1 goin"
    }
    modalBg.style.opacity = "100%"
    modalBg.style.display = "block"
    modal.style.borderColor = color
    modal.style.boxShadow = color + " 0 0 60px"
    modal.style.backgroundColor = color + '3'
    linkText.style.webkitTextStroke = color + " 2px"
    linkText.style.textDecoration = "double underline 2px " + color
    linkText.style.textShadow = color + "6 0 15px 30px, " + color + "6 0 -15px 30px, #37f6 15px 0 30px, " + color + "6 -15px 0 30px"
    document.querySelector(".qrcode").children[0].style.borderColor = color
    document.querySelector(".qrcode").children[0].style.boxShadow = color + " 0 0 60px"
}
function hideModal(blurEnd=true) {
    show = false
    active = ""
    modal.style.animation = "ease-in-out 1s 1 gout"
    modal.style.opacity = "0%"
    hideTime = setTimeout(function() {
        modal.style.display = "none"
        modalBg.style.display = "none"
    }, 1000)
    if (blurEnd) {
        modalBg.style.animation = "ease-in-out 1s 1 gout"
        modalBg.style.opacity = "0%"
    } else {
        clearTimeout(hideTime)
        modalBg.style.opacity = "100%"
        modalBg.style.display = "block"
    }
}
function createQR (text, textForLink) {
    fixedLink.innerHTML = ""
    fixedLink.append(QRCode.generateHTML(text, {}))
    fixedLink.children[0].children[0].style = null
    fixedLink.innerHTML = "<span></span>" + fixedLink.innerHTML + "<a class=\"link-text\">" + textForLink + "</a><span></span>"
}
function linkOnclick() {
    let data = linkText.innerHTML
    linkText.innerHTML = "Скопировано"
    if (active == "vk") {
        linkText.innerHTML = "Пока не создана"
    }
    if (active == "mail") {
        navigator.clipboard.writeText("grechanichenkos@yandex.ru")
    }
    if (active == "yadisk") {
        navigator.clipboard.writeText("https://disk.yandex.ru/d/tXVXttohc5Jc_A")
    }
    if (active == "gdisk") {
        navigator.clipboard.writeText("https://drive.google.com/drive/folders/1h6zywX_9QpAjze7a59cEieSenaLMdG6a?usp=sharing")
    }
    setTimeout(function() {
        linkText.innerHTML = data
    }, 1000)
}