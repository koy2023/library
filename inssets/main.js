

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

    document.addEventListener("DOMContentLoaded", function() {
        const searchBar = document.getElementById("searchBar");
        const dropdownList = document.getElementById("dropdownList");
        const listItems = dropdownList.getElementsByTagName("li");
    
        // Show dropdown list when search bar is clicked
        searchBar.addEventListener("click", function() {
            dropdownList.style.display = "block";
        });
    
        // Filter the dropdown list as the user types in the search bar
        searchBar.addEventListener("input", function() {
            const filter = searchBar.value.toLowerCase();
    
            for (let i = 0; i < listItems.length; i++) {
                const item = listItems[i].innerText.toLowerCase();
    
                if (item.indexOf(filter) > -1) {
                    listItems[i].style.display = "";
                } else {
                    listItems[i].style.display = "none";
                }
            }
        });
    
        // Hide the dropdown if the user clicks outside the search container
        document.addEventListener("click", function(event) {
            if (!searchBar.contains(event.target) /*&& !dropdownList.contains(event.target)*/) {
                dropdownList.style.display = "none";
            }
        });
    });
    
    


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
  