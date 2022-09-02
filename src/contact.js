import { SetupNavigaationMenuButton } from "./scripts/main";
import "./scss/pages/contact.scss";

function PageLoaded(){
  SetupNavigaationMenuButton( ".navigation-button" );

  const contact_form = document.forms.namedItem( "contact-form" );
  contact_form.addEventListener(
    "submit",
    function(ev){
      ev.preventDefault();
      return;
    }
  )
  return;
}

window.addEventListener( "load", PageLoaded );