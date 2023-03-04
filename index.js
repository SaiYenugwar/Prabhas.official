$(function(){
    $.ajax({
        method: "Get",
        url: "home.html",
        success:(res)=>{
            $(".container").html(res);
        }
    })
    
    $("#home").click(()=>{
        $.ajax({
            method: "Get",
            url: "home.html",
            success:(res)=>{
                $(".container").html(res);
            }
        })
    })
    $("#film").click(()=>{
        $.ajax({
            method: "Get",
            url: "film.html",
            success:(res)=>{
                $(".container").html(res);
            }
        })
    })
    $("#gallery").click(()=>{
        $.ajax({
            method: "Get",
            url: "gallery.html",
            success:(res)=>{
                $(".container").html(res);
            }
        })
    })
    $("#video").click(()=>{
        $.ajax({
            method: "Get",
            url: "video.html",
            success:(res)=>{
                $(".container").html(res);
            }
        })
    })
    $("#homeb").click(()=>{
        $.ajax({
            method: "Get",
            url: "home.html",
            success:(res)=>{
                $(".container").html(res);
            }
        })
    })
    $("#filmb").click(()=>{
        $.ajax({
            method: "Get",
            url: "film.html",
            success:(res)=>{
                $(".container").html(res);
            }
        })
    })
    $("#galleryb").click(()=>{
        $.ajax({
            method: "Get",
            url: "gallery.html",
            success:(res)=>{
                $(".container").html(res);
            }
        })
    })
    $("#videob").click(()=>{
        $.ajax({
            method: "Get",
            url: "video.html",
            success:(res)=>{
                $(".container").html(res);
            }
        })
    })
})

