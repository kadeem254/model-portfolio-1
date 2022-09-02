/**Sets up the button designated to toggle the menu state */
export function SetupNavigaationMenuButton( selector ){
  const button = document.querySelector( selector );
  if( button === undefined ){
    throw new Error("menu button element is undefined")
  }
  
  button.addEventListener( "click", ToggleNavigationMenu );
  return;
}

export function ToggleNavigationMenu( state = "AUTO" ){
  const NavigationMenu = document.querySelector( ".navigation-container" );
  if( NavigationMenu === undefined ){
    throw new Error("navigation menu element is undefined");
  }

  switch( state ){
    case "CLOSE":
      NavigationMenu.classList.remove( "--open" );
      break;
    case "OPEN":
      NavigationMenu.classList.add( "--open" );
      break;
    default:
      NavigationMenu.classList.toggle( "--open" );
  }

  return true;
}