import { SetupNavigaationMenuButton } from "./scripts/main";
import "./scss/pages/index.scss";

function PageLoaded(){
  SetupNavigaationMenuButton( ".navigation-button" );
  return;
}

window.addEventListener( "load", PageLoaded );