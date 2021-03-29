
window.onload = function() {
    // Already sign in
    let cls = document.querySelectorAll(".Header-link");
    for(let i = 0, j = cls.length; i < j; ++i) {
        if(cls[i].innerText == "Explore") {
            let a    = document.createElement('a');
            let user = location.pathname.split('/')[1];

            a.innerHTML = "Pages";
            a.className = cls[i].className;
            a.href = "https://" + user + ".github.io/";
            cls[i].parentNode.insertBefore(a, cls[i].nextElementSibling);

            break;
        }
    }

    // Not yet sign in
    let mrlg3 = document.querySelectorAll(".mr-lg-3");
    for(let i = 0, j = mrlg3.length; i < j; ++i) {
        if(mrlg3[i].innerText == "Pricing ") {
            let a    = document.createElement('a');
            let li   = document.createElement("li");
            let user = location.pathname.split('/')[1];

            li.className = "mr-0 mr-3 mr-lg-3";
            a.innerHTML  = "Pages";
            a.href       = "https://" + user + ".github.io/";
            a.className  = "HeaderMenu-link no-underline py-3 d-block d-lg-inline-block";
            li.appendChild(a);
            mrlg3[i].parentNode.insertBefore(li, mrlg3[i].nextElementSibling);

            break;
        }
    }
};

