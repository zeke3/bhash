# bhash
Bruteforce bcrypt script

# Requirements
- Make sure you have node installed in your computer
- You must have a file wordlist and a encrypted hash to compare to

# Usage

 node brutecrypt.js names.txt \\$2a\\$12\\$ajEH8H8tzv8svq17GeVQ2eIvOoYBieYpp1I4d5e6nElTUfkyLPDy2
 
 - The first argument is the file where in our case above is names.txt
 - The second argument is the encrypted hash where in our case above is $2a$12$ajEH8H8tzv8svq17GeVQ2eIvOoYBieYpp1I4d5e6nElTUfkyLPDy2
 - All escape characters must be preceded by \ as in our example above
