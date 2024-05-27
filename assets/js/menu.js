document.addEventListener("DOMContentLoaded", function() {
  var menuLinks = document.querySelectorAll("a.menu-btn");
  menuLinks.forEach(function(menuLink) {
    var button = document.createElement("button");
    button.innerHTML = menuLink.innerHTML;
    button.className = menuLink.className;
    button.setAttribute("data-menu", menuLink.getAttribute("data-menu"));
    
    menuLink.parentNode.replaceChild(button, menuLink);
  });

  var menuButtons = document.querySelectorAll(".menues");
  var overlay = document.getElementById("overlay");

  menuButtons.forEach(function(menuButton) {
    menuButton.addEventListener("click", function(event) {
      event.stopPropagation();
      var menuId = menuButton.getAttribute("data-menu");
      var menu = document.getElementById(menuId);
      
      menu.style.display = "block";
      overlay.style.display = "block";
    });
  });

  document.addEventListener("click", function(event) {
    if (!event.target.classList.contains("menues") && !isDescendant(menuButtons, event.target)) {
      hideMenus();
    }
  });

  function hideMenus() {
    var menus = document.querySelectorAll(".menu");
    menus.forEach(function(menu) {
      menu.style.display = "none";
    });
    overlay.style.display = "none";
  }

  function isDescendant(parent, child) {
  for (var i = 0; i < parent.length; i++) {
    var node = child.parentNode;
    while (node != null) {
      if (parent[i] === node) {
        return true;
      }
      node = node.parentNode;
    }
  }
  return false;
}});
