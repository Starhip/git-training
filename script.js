// var AddItemId = 0;
// function addToCart(item) {
// 	document.getElementById("item1").innerHTML = document.write(cart);
// 	alert("Successfully Added!");
// }
// function addToCart(item) {
// 	document.getElementById("item2").innerHTML = window.print(addToCart);
// 	alert("Successfully Added!");
// }	


var addItemId = 0;
function addToCart(item) {
	addItemId +- 1;
	var selectedItem = document.createElement('div');
	selectedItem.classList.add('cartImg');
	selectedItem.setAttribute('id',addItemId);

	var img = document.createElement(img);
	img.setAttribute('src',item.children[0].currentSrc);

	var title = document.createElement('div');
	title.innerText = item.children[1].innerText;

	var label = document.createElement('div'); 
	label.innerText = item.children[2].children[0].innerText;

	var select = document.createElement('span');
	select.innerText = item.children[2].children[1].value;
	label.append(select);

	var cartItems = document.getElementById("title");
	selectedItem.append(img);
	selectedItem.append(title);
	cartItems.append(selectedItem);
}

