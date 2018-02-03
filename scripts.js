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

//Back To Top//

function backToTop() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
};

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
