header ='<style>\
    .fc-orange {\
        color: #FFA621;\
    }\
\
    .logo-text {\
        color: #1651AA;\
        font-weight: bold;\
    }\
\
    .navbar-nav {\
        justify-content: flex-end;\
    }\
    .navbar-nav .nav-item{\
        padding: .5rem;\
    }\
    @media (max-width: 767.98px){\
        .navbar-nav .nav-item {\
            border-top: 1px dashed lightgray;\
        }\
\
        .navbar-nav .nav-item:first-child {\
            border-top: 0;\
        }\
    }\
    .navbar-nav{\
        margin-left: 0;\
    }\
    .navbar-nav li{\
        margin-bottom: 0;\
    }\
</style>\
\
<nav class="navbar navbar-expand-md navbar-light bg-light ">\
    <div class="container-fluid" style="width:90%;">\
        <a class="navbar-brand" href="home.html">\
            <div class="logo-text"><span class="fc-orange">D</span>ata&ensp;<span class="fc-orange">C</span>enter</div>\
        </a>\
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
\
        <div class="collapse navbar-collapse row" id="navbarNavDropdown">\
            <ul class="navbar-nav">\
                <li class="nav-item">\
                    <a class="nav-link" href="home.html">首頁</a>\
                </li>\
\
                <li class="nav-item">\
                    <a class="nav-link" href="meb_center.html">會員中心</a>\
                </li>\
\
                <li class="nav-item">\
                    <a class="nav-link" href="login.html">登出</a>\
                </li>\
            </ul>\
        </div>\
    </div>\
</nav>';
document.write(header);