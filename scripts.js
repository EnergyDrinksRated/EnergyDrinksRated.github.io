//Navbar Changes When it eaches Top of Page//
//Function Triggered by Scroll//
$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
        elementOffset = $('div.nav').offset().top;
	    distance = (elementOffset - scrollTop);
	if ( distance <= 0 ){
		$("div.nav").css("border-radius", "0px");
		$("div.navSides").css("display", "block");
    } else {
		$("div.nav").css("border-radius", "10px 10px 0px 0px");
		$("div.navSides").css("display", "none");
}
});
//Function Triggered by Resize//
$(window).on('resize', function () {
    var scrollTop = $(window).scrollTop();
        elementOffset = $('div.nav').offset().top;
	    distance = (elementOffset - scrollTop);
		console.log(distance);
	if ( distance <= 0 ){
		$("div.nav").css("border-radius", "0px");
		$("div.navSides").css("display", "block");
    } else {
		$("div.nav").css("border-radius", "10px 10px 0px 0px");
		$("div.navSides").css("display", "none");
}
});
//Back To Top//
function backToTop() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
};
//OLD CODE//
//Table Search From W3Schools//
function searchFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("ingredientInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("ingredientsTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
//Show Hide Toggle For Red Bull//
function hideRedBullProfiles() {
    var x = document.getElementById("redBullProfiles");
	var y = document.getElementById("redBullPlus");
	var z = document.getElementById("redBullMinus");
    if (x.style.display === "none") {
        x.style.display = "block";
		y.style.display = "none";
		z.style.display = "block";
    } else {
        x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
    }
}