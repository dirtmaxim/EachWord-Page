window.onload = function () {
    let write_us = document.getElementById("write_us");

    write_us.onclick = function () {
        write_us.outerHTML = '<span id="mail">support@eachword.ru</span>';

        return false;
    }
};
