var index = 0;
var index2 = 1;
var second = 0;
var pageHeight = window.innerHeight;
document.body.style.transform = "translate3d(0px,0px,0px)";


function navigatePage(x) {
    index2 = x
    activateContent()
}

// ---------------------------------------------------------------------

var pg_1 = document.getElementById("pg-1");
var pg_2 = document.getElementById("pg-2");
var pg_3 = document.getElementById("pg-3");
var pg_4 = document.getElementById("pg-4");

pg_1.style.backgroundColor = "rgb(125, 125, 125)"

function identifyPage() {
    if (index2 == 1) {
        pg_1.style.backgroundColor = "rgb(125, 125, 125)"
        pg_2.style.backgroundColor = "rgb(161, 161, 161)"
        pg_3.style.backgroundColor = "rgb(161, 161, 161)"
        pg_4.style.backgroundColor = "rgb(161, 161, 161)"
    } else if (index2 == 2) {
        pg_1.style.backgroundColor = "rgb(161, 161, 161)"
        pg_2.style.backgroundColor = "rgb(125, 125, 125)"
        pg_3.style.backgroundColor = "rgb(161, 161, 161)"
        pg_4.style.backgroundColor = "rgb(161, 161, 161)"
    } else if (index2 == 3) {
        pg_1.style.backgroundColor = "rgb(161, 161, 161)"
        pg_2.style.backgroundColor = "rgb(161, 161, 161)"
        pg_3.style.backgroundColor = "rgb(125, 125, 125)"
        pg_4.style.backgroundColor = "rgb(161, 161, 161)"
    } else if (index2 == 0) {
        pg_1.style.backgroundColor = "rgb(161, 161, 161)"
        pg_2.style.backgroundColor = "rgb(161, 161, 161)"
        pg_3.style.backgroundColor = "rgb(161, 161, 161)"
        pg_4.style.backgroundColor = "rgb(125, 125, 125)"
    }
}


// -------------------------------------------------------------------



function loopContents() {
    var blank3 = document.getElementById("blank3");
    while (blank3.firstChild) {
        blank3.removeChild(blank3.firstChild);
    }
    blank3.style.flexDirection = 'row'

    if (index2 == 1) {
        var div = document.createElement("div")
        div.style.display = "flex";
        var part1 = document.createElement("div");
        part1.style.marginRight = "3vw"
        part1.classList.add("col-5");

        var heading = document.createElement('h1')
        heading.innerHTML = 'Phân tích về bản sắc dân tộc'
        heading.style.fontWeight = 'bold'
        heading.style.fontSize = '3vw'
        heading.style.fontFamily = "'Courier New', Courier, monospace"
        heading.style.marginTop = '3.5vh'

        var heading1 = document.createElement("h6");
        var text11 = document.createElement("p");
        var text12 = document.createElement("p");
        heading1.innerHTML = "I. Sự tích về Dã tràng xây cát";
        heading1.style.marginTop = "15vh"
        text11.innerHTML = "Dã Tràng vốn là một chàng trai tốt bụng, nhờ ra tay giúp một con rắn đực mà được tặng một viên ngọc quý. Về sau cũng vì viên ngọc đó cùng sự tốt bụng của mình, Dã Tràng lại bị dân làng phản bội, đàn quạ hàm oan rắp tâm hãm hại. Nhưng rồi lại nhờ viên ngọc cậu ta đã thoát tội diệt thân. Về sau, Dã Tràng vì cứu mạng một đôi ngỗng mà được tặng thêm một viên ngọc quý."
        text12.innerHTML = "Nhờ có viên ngọc có thể khuấy đảo Long cung mà anh được Long Vương ban cho vàng bạc châu báu với điều kiện không bao giờ mang viên ngọc đó đi náo loạn các vùng nước. Tưởng chừng như có hết mọi thứ trong tay, cuối cùng, vì hai viên ngọc quý mà người vợ bỏ đi theo lời dụ dỗ của Long Vương. Bởi tiếc ngọc quý, tức giận vợ mình và Long Vương, Dã Tràng quyết tâm đem cát lấp biển để đắp thành đường đi đòi lại ngọc. Kết cuộc, cậu ta chết đi, hóa thành con dã tràng, ngày ngày lăn cát đi lấp biển, nhưng rồi sóng biển lại xô cho tan biến."
        part1.appendChild(heading1);
        part1.appendChild(text11);
        part1.appendChild(text12);

        var part2 = document.createElement("div");
        part2.classList.add("col-6");
        var heading21 = document.createElement("h6");
        heading21.style.marginTop = "15vh"
        var text21 = document.createElement("p");
        var text22 = document.createElement("p");
        heading21.innerHTML = "II. Ý nghĩa bài trường ca:"
        text21.innerHTML = "Nhiều tài liệu nói rằng cảm hứng cho nhạc sĩ Trịnh Công Sơn viết Dã tràng ca đã hình thành ngay từ lúc nhỏ khi ông còn Huế. Ngày đó, Trịnh Công Sơn thường xuyên theo mẹ đi chùa Phổ Quang tìm hiểu Phật học. Một thời gian sau, để lập thân, và cũng để tránh quân dịch, Trịnh Công Sơn vào học trường Sư phạm Quy Nhơn. Mảnh đất ven biển tuyệt đẹp này cũng là nơi đã tạo cảm hứng để những bản tình ca hay nhất của Trịnh Công Sơn ra đời như Diễm xưa, Biển nhớ…và đặc biệt là bản trường ca đầu tiên: Tiếng hát dã tràng…"
        text22.innerHTML = "Vào lúc đó, trường Sư phạm Quy Nhơn yêu cầu Trịnh Công Sơn soạn một bài hát để trình bày trong Đại nhạc hội. Và bản Dã tràng ca ra đời, tên ban đầu là Tiếng hát dã tràng. Đó là một bài hát thơ dài gồm 2 phần với 13 đoản khúc có tựa đề riêng, xoay quanh thân phận con người. Kiếp người là vô nghĩa, con người sinh ra đã đối mặt khổ đau, chỉ có tình yêu mới cứu rỗi con người. Dã tràng ca đã chất chứa những tinh thần cơ bản nhất của âm nhạc Trịnh Công Sơn, mở đường cho dòng ca khúc thân phận đã làm nên tên tuổi Trịnh Công Sơn."
        part2.appendChild(heading21);
        part2.appendChild(text21);
        part2.appendChild(text22);

        div.appendChild(part1);
        div.appendChild(part2);
        div.style.marginTop = "-120px";
        blank3.appendChild(heading);
        blank3.appendChild(div);
        blank3.style.display = "flex";
        blank3.style.flexDirection = 'column'


    } else if (index2 == 2) {
        var part_container = document.createElement("div");
        part_container.style.display = "flex";
        part_container.sty

        var heading = document.createElement("h1");
        heading.innerHTML = "Phân tích kết cấu chính"
        heading.style.fontWeight = 'bold'
        heading.style.fontSize = '3vw'
        heading.style.fontFamily = "'Courier New', Courier, monospace"
        heading.style.marginTop = '3vh'

        var part1 = document.createElement("div");
        part1.style.marginRight = "2vw"
        part1.classList.add("col-5");
        var heading1 = document.createElement("h6");
        var text11 = document.createElement("p");
        var text12 = document.createElement("p");
        var text13 = document.createElement("p");
        var text14 = document.createElement("p");
        var text15 = document.createElement("p");
        var text16 = document.createElement("p");
        heading1.innerHTML = "Chương 1:";
        text11.innerHTML = "+ Khổ đầu: mở đầu"
        text12.innerHTML = "+ Khổ 2: nói qua về sự tích dã tràng; nói về hành trình và công sức của dã tràng"
        text13.innerHTML = "+ Còn lại: tác giả cảm thông với nỗi lòng của dã tràng"
        text14.innerHTML = "+ “Mình tôi đi, làn sóng đến, nghe công vỡ cho thân ru mềm”"
        text15.innerHTML = "+ “Nàу dã tràng ơi nghe thân lưu đàу, ngàn năm còn mãi, ngàn sau còn mãi cho vai thêm gầу khi nắng khi mưa”,"
        text16.innerHTML = "+ “Trùng dương ơi đã mấу ngàn năm, gọi miên man cho sóng triều lên, quên dã tràng đêm ngàу xe cát .Trùng dương ơi sao nỡ bỏ quên, gọi cơn đau khi sóng triều lên, công dã tràng muôn đời vỡ tan”"
        // var img = document.createElement("img");
        // img.src = "img2.jpg"
        // img.style.width = "100%"
        // img.style.height = "auto"

        part1.appendChild(heading1);
        part1.appendChild(text11);
        part1.appendChild(text12);
        part1.appendChild(text13);
        part1.appendChild(text14);
        part1.appendChild(text15);
        part1.appendChild(text16);
        // part1.appendChild(img);

        var part2 = document.createElement("div");
        part2.classList.add("col-5");
        var heading2 = document.createElement("h6");
        var text21 = document.createElement("p");
        var text22 = document.createElement("p");
        var text23 = document.createElement("p");
        var text24 = document.createElement("p");
        var text25 = document.createElement("p");
        var text26 = document.createElement("p");

        heading2.innerHTML = "Chương 2:";
        text21.innerHTML = "+ Khổ 1 2 3: nói về các khó khăn, thử thách của tác giả cung như công lao mà ông đã dùng để vượt qua nó; cảm thông với số phận của dã tràng và liên hệ đến bản thân"
        text22.innerHTML = "+ Còn lại: khó khăn, thử thách về đường tình duyên của tác giả"
        text23.innerHTML = "+ “Ɲgai vàng đã mất lâu rồi thân đàу dấu trong môi cười”"
        text24.innerHTML = "+ “Tôi gọi cơn đau cho nước vỡ nguồn tôi dìu tôi đi giữa trời lên bão tố dã tràng hai taу với tháng năm chờ”: Tác giả như là bạn tri kỉ của dã tràng, dã tràng luôn chờ ông vượt qua khó khăn thử thách và khi ông tuyệt vọng"
        text25.innerHTML = "+ Khổ cuối: tình yêu như một liều thuốc cứu chữa tác giả trong những tháng ngày khó khăn"
        text26.innerHTML = "+ “Gọi vào niềm không buốt đau, gọi vào ngàу sau nhớ nhau”: Thể hiện sự tuyệt vọng của tác giả"
        
        // var img2 = document.createElement("img");
        // img2.src = "R.jpg"
        // img2.style.width = "100%"
        // img2.style.height = "auto"

        part2.appendChild(heading2);
        part2.appendChild(text21);
        part2.appendChild(text22);
        part2.appendChild(text23);
        part2.appendChild(text24);
        part2.appendChild(text25);
        part2.appendChild(text26);
        // part2.appendChild(img2);

        part_container.appendChild(part1)
        part_container.appendChild(part2)
        blank3.appendChild(heading);
        blank3.appendChild(part_container)
        blank3.style.flexDirection = 'column'


    } else if (index2 == 3) {
        var heading = document.createElement("h1");
        heading.innerHTML = "Cảm nhận của chuyên gia"
        heading.style.fontWeight = 'bold'
        heading.style.fontSize = '3vw'
        heading.style.fontFamily = "'Courier New', Courier, monospace"
        heading.style.marginTop = '3.5vh'

        var text1 = document.createElement("p")
        var text2 = document.createElement("p")
        var text3 = document.createElement("p")
        var text4 = document.createElement("p")
        var br1 = document.createElement("br")
        var br2 = document.createElement("br")
        var br3 = document.createElement("br")
        var br4 = document.createElement("br")

        text1.style.fontStyle = "italic"
        text2.style.fontStyle = "italic"
        text3.style.fontStyle = "italic"
        text4.style.fontStyle = "italic"

        text1.style.fontSize = "1.15vw"
        text2.style.fontSize = "1.15vw"
        text3.style.fontSize = "1.15vw"
        text4.style.fontSize = "1.15vw"

        text1.innerHTML = 'Nhạc sĩ Văn Bình cho rằng: "Trường ca là kho lưu trữ những ưu tư mà ta thường gặp lại trong nhiều ca khúc của Trịnh Công Sơn sau này ví như Lời buồn thánh, Đóa hoa vô thường".'
        text2.innerHTML = 'Ca sĩ Đức Tuấn chia sẻ: "Tôi tin rằng nhạc Trịnh luôn trẻ, tràn đầy sức sống cùng những lí tưởng và thông điệp không bao giờ xưa cũ mà người nghe sẽ thấy rõ điều đó qua ấn phẩm Dã Tràng Ca lần này”.'
        text3.innerHTML = 'Nhà nghiên cứu Nguyễn Đắc Xuân: “Đó là triết lý vô thường, thể hiện tình yêu, tình người, quê hương, ca ngợi hòa bình và lên tiếng chống chiến tranh. Có thể nói rằng, tất cả âm nhạc Trịnh Công Sơn xuất phát từ Dã tràng ca”'
        text4.innerHTML = 'Nhận định của Hoàng Nguyên Nhuận: “… nếu Huế là thánh địa của Phật giáo và nếu bản nhạc Phật giáo Việt Nam của Lê Cao Phan là nhịp đạo hành của thanh niên Phật tử, thì Trịnh Công Sơn chính là nhịp đập con tim của phong trào thanh niên trên đường vận động hòa bình, độc lập và an lạc cho đồng bào đồng loại tại các thành phố miền Nam …”'

        blank3.appendChild(heading)
        blank3.appendChild(br1)
        blank3.appendChild(text1)
        blank3.appendChild(br2)
        blank3.appendChild(text2)
        blank3.appendChild(br3)
        blank3.appendChild(text3)
        blank3.appendChild(br4)
        blank3.appendChild(text4)
        blank3.style.flexDirection = 'column'

    } else if (index2 == 0) {
        var heading = document.createElement('h1')
        heading.innerHTML = 'Tiểu Sử'
        heading.style.fontWeight = 'bold'
        heading.style.fontSize = '4vw'
        heading.style.fontFamily = "'Courier New', Courier, monospace"
        heading.style.marginTop = '2vh'

        var s1h = document.createElement('h6')
        var s2h = document.createElement('h6')
        var s3h = document.createElement('h6')
        var s4h = document.createElement('h6')

        var p1 = document.createElement('p')
        var p2 = document.createElement('p')
        var p3 = document.createElement('p')
        var p4 = document.createElement('p')

        s1h.innerHTML = 'I: Sơ lược về Trịnh Công Sơn'
        s2h.innerHTML = 'II: Sự Nghiệp và Tác Phẩm Nổi Tiếng'
        s3h.innerHTML = 'III: Thành Tựu và Tầm Ảnh Hưởng'
        s4h.innerHTML = 'IV: Kế Hậu và Tình Cảm Cộng Đồng'

        p1.innerHTML = 'Trịnh Công Sơn, nhạc sĩ tài hoa của Việt Nam, chào đời vào ngày 28 tháng 2 năm 1939 tại thôn Hà Tĩnh, tỉnh Hà Nội. Ông là một biểu tượng về âm nhạc dân ca và ballad tại Việt Nam. Với tài năng và tâm hồn nghệ sĩ, ông đã để lại dấu ấn sâu sắc trong lĩnh vực âm nhạc của đất nước.'
        p2.innerHTML = 'Trịnh Công Sơn đã sáng tác nhiều bản nhạc nổi tiếng như "Hát Cho Người Đi Rồi," "Nắng Thủy Tinh," và "Diễm Xưa." Những ca khúc này thường mang thông điệp nhân văn và tâm hồn, thể hiện những cảm xúc sâu lắng về tình yêu, cuộc sống và xã hội. Tác phẩm của ông đã lan tỏa tới nhiều thế hệ người yêu nhạc và trở thành biểu tượng của nền nhạc Việt Nam.'
        p3.innerHTML = 'Trịnh Công Sơn đã đoạt nhiều giải thưởng danh giá trong sự nghiệp âm nhạc của mình, bao gồm cả Giải thưởng Hoàng gia về Nhạc Việt Nam. Tác phẩm của ông không chỉ được yêu thích trong nước mà còn được biết đến và yêu mến trên toàn thế giới. Những bản nhạc của ông đã được dịch ra nhiều ngôn ngữ và thể hiện bởi nhiều nghệ sĩ quốc tế.'
        p4.innerHTML = 'Trịnh Công Sơn đã ra đi vào ngày 1 tháng 4 năm 2001, nhưng tác phẩm của ông vẫn sống mãi trong trái tim của người yêu nhạc. Cộng đồng người hâm mộ và các nghệ sĩ tiếp tục tôn vinh di sản âm nhạc của ông thông qua các sự kiện và biểu diễn. Ông là một huyền thoại âm nhạc Việt Nam và sự nghiệp của ông sẽ luôn được nhớ đến với tình yêu và tôn kính.'

        blank3.appendChild(heading);
        blank3.appendChild(s1h);
        blank3.appendChild(p1);
        blank3.appendChild(s2h);
        blank3.appendChild(p2);
        blank3.appendChild(s3h);
        blank3.appendChild(p3);
        blank3.appendChild(s4h);
        blank3.appendChild(p4);

        blank3.style.flexDirection = 'column'

    }
    index2++;
    if (index2 == 4) {
        index2 = 0;
    }
}

function activateContent() {
    second = 0;
    document.getElementById("blank3").style.animation = "changeContent 2s"
    setTimeout(function () {
        loopContents();
        identifyPage();
    }, 800)
    setTimeout(function () {
        document.getElementById("blank3").style.animation = "none"
    }, 2000)
}


// -------------------------------------------------------------------


setInterval(function () {
    second++
    if (second == 45) {
        activateContent();
    }
}, 1000)



// -------------------------------------------------------------------

document.addEventListener("scroll", function (e) {
    document.body.scrollTop = 0;
});
document.addEventListener("wheel", wheelListener);


function disableWheel() {
    document.removeEventListener("wheel", wheelListener);
}

function enableWheel() {
    document.addEventListener("wheel", wheelListener);
}

function wheelListener(e) {
    document.removeEventListener("wheel", wheelListener);
    if (e.deltaY > 0) {
        scrollPage();
    } else {
        scrollPage();
    }
}
function scrollPage() {
    if (index == 0) {
        document.getElementById("blank1").style.animation = "slide-out 2s"
        document.getElementById("sec1").style.animation = "stop-content 2s"
        document.getElementById("blank2").style.animation = "slide-in 2s"
        document.getElementById("sec3").style.animation = "start-content-2 2s"
        document.getElementById("parent-info").style.animation = "back-to-front 2s"
        index = 1

        document.getElementById("blank1").style.width = "0vw"
        document.getElementById("blank2").style.width = "37vw"
        document.getElementById("sec1").style.width = "0vw"
        document.getElementById("sec3").style.width = "37vw"
        document.getElementById("blank1").style.padding = "0"
        document.getElementById("blank2").style.padding = "4vw 3vw 3vw 3vw"
        document.getElementById("parent-info").style.flexDirection = "row-reverse"


    } else if (index == 1) {
        document.getElementById("blank2").style.animation = "slide-out 2s"
        document.getElementById("blank1").style.animation = "slide-in 2s"
        document.getElementById("sec1").style.animation = "start-content-2 2s"
        document.getElementById("sec3").style.animation = "stop-content 2s"
        document.getElementById("parent-info").style.animation = "front-to-back 2s"
        index = 0

        document.getElementById("blank2").style.width = "0vw"
        document.getElementById("blank1").style.width = "37vw"
        document.getElementById("sec1").style.width = "37vw"
        document.getElementById("sec3").style.width = "0vw"
        document.getElementById("blank2").style.padding = "0"
        document.getElementById("blank1").style.padding = "4vw 3vw 3vw 3vw"
        document.getElementById("parent-info").style.flexDirection = "row"
    }

    setTimeout(function () {
        document.addEventListener("wheel", wheelListener);
    }, 2000);
}