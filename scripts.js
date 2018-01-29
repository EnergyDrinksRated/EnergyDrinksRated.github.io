//table search from w3schools//

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

//back to top//

function backToTop() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
};

//Ads by Google//

(adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-8049934604348688",
      enable_page_level_ads: true
    });