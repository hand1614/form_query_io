
// HTMLFormElement.addEventListener( "submit", form_to_history )
export function submit_to_query( event ) {
  const url   = window.location.href.replace( window.location.search, "" ) ;
  const query = new URLSearchParams( new FormData( this ).entries() ).toString() ;
  event.preventDefault() ;
  history.replaceState( null, "", `${ url }?${ query }` ) ;
}

// query_to_init( HTMLFormElement ) ;
export const query_to_form = form => { for( const v of new URL( window.location.href ).searchParams ) form.elements[ v[ 0 ] ].value = v[ 1 ] } ;

