//function like Jquery
function $(query) {
    if (document.querySelectorAll(query).length === 1 ) {
        return document.querySelector(query)
    } else if (document.querySelectorAll(query).length > 1 ) {
        return document.querySelectorAll(query)
    }else {
        return "this query not present"
    }
}

//change the color of nav when scroll
window.onscroll = function () {
    if (this.scrollY >= 100 ) {
        if (!$(".navbar").classList.contains("scrolled")) {
            $(".navbar").classList.add("scrolled")
        }
    }else {
        $(".navbar").classList.remove("scrolled")
    }
}

//add class active when click and remove it from all 
$(".tab-section li").forEach(li => li.addEventListener("click" , function (e) {
    $(".tab-section li").forEach(ele => {
        ele.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
    $(".tab-section .tabs-content > div").forEach(tab => {
        tab.style.display = "none"
    })
    $(e.currentTarget.dataset.content).style.display ="block"
}))

