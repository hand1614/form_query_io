
"use strict";

import { submit_to_query, query_to_form } from "https://hand1614.github.io/form_query_io/form_query_io.js" ;

const form = document.querySelector( "form" ) ;

query_to_form( form ) ;

form.addEventListener( "submit", submit_to_query ) ;
