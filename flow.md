# Dumb Data ( Dealing with Query String )

1. get the search part ( data starts with "?" mark ) ?q=asd%26oq=asd&ie=UTF-8
2. decode URL ( make sure of "&" existence instead of "%26" ) ?q=asd&oq=asd&ie=UTF-8
3. remove "?" mark from the search prametar q=asd&oq=asd&ie=UTF-8
4. split the URL by removing "&" to become ['q=asd', 'oq=asd', 'ie=UTF-8']
5. turn part before "=" to ( key ) and what after it to ( value )
6. return object to deal with

--- Done for now ---

sortting object by key order = 




# BEFORE GO PRODUCTION

- remove "!" line 15 sing located in `@pages/Transactions/Transactions`