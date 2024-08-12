

/*function filterFunction() {
    var input, filter, div, a, i;
    input = document.getElementById("searchBox");
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
} */

    function showDropdown() {
        document.getElementById("dropdown").style.display = "block";
    }
    
    function filterList() {
        const searchInput = document.getElementById("searchBar").value.toLowerCase();
        const items = document.getElementById("dropdownItems").getElementsByTagName("li");
    
        for (let i = 0; i < items.length; i++) {
            let item = items[i].textContent || items[i].innerText;
            if (item.toLowerCase().indexOf(searchInput) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    }
    
    window.onclick = function(event) {
        if (!event.target.matches('#searchBar')) {
            document.getElementById("dropdown").style.display = "none";
        }
    };
    


document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    const text = inputField.value;
  
    inputField.addEventListener("focus", () => inputField.select());
  
    copyButton.addEventListener("click", () => {
      inputField.select();
      navigator.clipboard.writeText(text);
  
      inputField.value = "Copied!";
      setTimeout(() => (inputField.value = text), 2000);
    });
  });
  