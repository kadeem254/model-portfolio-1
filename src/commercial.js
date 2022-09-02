import { SetupNavigaationMenuButton } from "./scripts/main";
import "./scss/pages/commercial.scss";

function PageLoaded(){
  SetupNavigaationMenuButton( ".navigation-button" );
  return;
}

window.addEventListener( "load", PageLoaded );