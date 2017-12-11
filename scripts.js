function searchIngredients() {
    var input, filter, allIngredients, li, a, i;
    input = document.getElementByClass("searchIngredients");
    filter = input.value.toUpperCase();
    ul = document.getElementByClass("allIngredients");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function backToTop() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
};