function searchFunction() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("searchCard");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myItems");
  cards = document.getElementsByClassName("item");
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector(".product-body h5.productname");
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

function sortCards() {
  var option = document.getElementById("select").selectedIndex;
  if (option === 1) {
    $(".product-features .item")
      .sort(function(a, b) {
        return $(a)
          .find(".productname")
          .text() >
          $(b)
            .find(".productname")
            .text()
          ? 1
          : -1;
      })
      .appendTo(".product-features");
  }
  if (option === 2) {
    $(".product-features .item")
      .sort(function(a, b) {
        return $(a)
          .find(".productname")
          .text() <
          $(b)
            .find(".productname")
            .text()
          ? 1
          : -1;
      })
      .appendTo(".product-features");
  }
  if (option === 3) {
    $(".product-features .item")
      .sort(function(a, b) {
        var A = $(a)
          .find(".price")
          .text();
        var B = $(b)
          .find(".price")
          .text();
        var Fa = parseFloat(A);
        var Fb = parseFloat(B);
        if (Fa < Fb) return -1;
        if (Fa > Fb) return 1;
        return 0;
      })
      .appendTo(".product-features");
  }
  if (option === 4) {
    $(".product-features .item")
      .sort(function(a, b) {
        var A = $(a)
          .find(".price")
          .text();
        var B = $(b)
          .find(".price")
          .text();
        var Fa = parseFloat(A);
        var Fb = parseFloat(B);
        if (Fa > Fb) return -1;
        if (Fa < Fb) return 1;
        return 0;
      })
      .appendTo(".product-features");
  }
}

function AddToCart() {
  var a = $(".product-details .product-name").text();
  var b = $(".product-details .product-price ").text();
  var c =
    "<button type='button' class='text-white bg-danger border-0' onclick='deleteRow(this)'>X</button>";

  $("#myTable > tbody:last-child").append(
    "<tr><td>" +
      a +
      "</td>" +
      "<td>" +
      b +
      "</td>" +
      "<td>" +
      c +
      "</td>" +
      "</tr>"
  );
  var count = $("#myTable tbody tr").length;
  $("#cartitemsnumber").html(count.toString());
  $("#cartitemsnumber2").html(count.toString());
}
function AddToCart2() {
  var a = $(".product-details .product-name2").text();
  var b = $(".product-details .product-price2 ").text();
  var c =
    "<button type='button' class='text-white bg-danger border-0' onclick='deleteRow(this)'>X</button>";

  $("#myTable > tbody:last-child").append(
    "<tr><td>" +
      a +
      "</td>" +
      "<td>" +
      b +
      "</td>" +
      "<td>" +
      c +
      "</td>" +
      "</tr>"
  );
  var count = $("#myTable tbody tr").length;
  $("#cartitemsnumber").html(count.toString());
  $("#cartitemsnumber2").html(count.toString());
}
function AddToCart2() {
  var a = $(".product-details .product-name2").text();
  var b = $(".product-details .product-price2 ").text();
  var c =
    "<button type='button' class='text-white bg-danger border-0' onclick='deleteRow(this)'>X</button>";

  $("#myTable > tbody:last-child").append(
    "<tr><td>" +
      a +
      "</td>" +
      "<td>" +
      b +
      "</td>" +
      "<td>" +
      c +
      "</td>" +
      "</tr>"
  );
  var count = $("#myTable tbody tr").length;
  $("#cartitemsnumber").html(count.toString());
  $("#cartitemsnumber2").html(count.toString());
}
function AddToCart3() {
  var a = $(".product-details .product-name3").text();
  var b = $(".product-details .product-price3 ").text();
  var c =
    "<button type='button' class='text-white bg-danger border-0' onclick='deleteRow(this)'>X</button>";

  $("#myTable > tbody:last-child").append(
    "<tr><td>" +
      a +
      "</td>" +
      "<td>" +
      b +
      "</td>" +
      "<td>" +
      c +
      "</td>" +
      "</tr>"
  );
  var count = $("#myTable tbody tr").length;
  $("#cartitemsnumber").html(count.toString());
  $("#cartitemsnumber2").html(count.toString());
}
function AddToCart4() {
  var a = $(".product-details .product-name4").text();
  var b = $(".product-details .product-price4 ").text();
  var c =
    "<button type='button' class='text-white bg-danger border-0' onclick='deleteRow(this)'>X</button>";

  $("#myTable > tbody:last-child").append(
    "<tr><td>" +
      a +
      "</td>" +
      "<td>" +
      b +
      "</td>" +
      "<td>" +
      c +
      "</td>" +
      "</tr>"
  );
  var count = $("#myTable tbody tr").length;
  $("#cartitemsnumber").html(count.toString());
  $("#cartitemsnumber2").html(count.toString());
}
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  var count = $("#myTable tbody tr").length;
  $("#cartitemsnumber").html(count.toString());
  $("#cartitemsnumber2").html(count.toString());
}
