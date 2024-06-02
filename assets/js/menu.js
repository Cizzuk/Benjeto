document.addEventListener("DOMContentLoaded", function() {
  var closeButtons = document.querySelectorAll("button.close-btn");
  var menuButtons = document.querySelectorAll(".menues");
  var overlay = document.getElementById("overlay");


  menuButtons.forEach(function(menuButton) {
    menuButton.style.display = "block";
    menuButton.addEventListener("click", function(event) {
      event.stopPropagation();
      var menuId = menuButton.getAttribute("data-menu");
      var menu = document.getElementById(menuId);
      
      menu.style.display = "block";
      overlay.style.display = "block";
      
      setTimeout(function() {
        var closeItem = menu.querySelector(".close-btn");
          if (closeItem) {
            closeItem.focus();
          }
        }, 100);
      });
  });

  function hideMenus() {
    var menus = document.querySelectorAll(".menu");
    menus.forEach(function(menu) {
      menu.style.display = "none";
    });
    overlay.style.display = "none";
  }

  overlay.addEventListener("click", function() {
    hideMenus();
  });

  closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener("click", function() {
      hideMenus();
    });
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      hideMenus();
    }
  });

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
