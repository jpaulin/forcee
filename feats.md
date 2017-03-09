#FORCEE features document

Forcee ('foresee') is - so far - a no-BS time tracking tool.
The basic use is Single user, one project.

###Terminology in Forcee

Term | Explanation
-----|------------
accept | confirm a worklog entry (usually with Enter key)
session | the time between starting and exiting Forcee
tag | select an entry with Space or 'x' (also called Marking)
Exit | quit the Forcee program and save any work done
entry | a worklog entry, showing one stage of work. Example: '1 c' = 1 hour of code

##Design philosophy

- always 1 key away from Exit
- safe use: if user Exits, nothing is lost
- multi-dialog user interface for faster log entry

##Time and The universe

Time is sometimes giving a hard time to developers and other
stakeholders. Project time tracking is however quite crucial
for some kind of companies, especially those that want to
bill by hour. However, time for the developers is not always
a sentient choice. There are two problems: amnesia during Flow,
and time not correlating with What Got Done.


##The Multi-Dialog View
- screen divided to 3 apartments
  - What You Have Done in this session
  - Your History
  - Legend of entries
  - when user enters keys, similar items are highlighted. Cloning
    made with one key.


##Example of MDV usage

You have a fairly complicated entry in your past:
"4 c c A lot of technical jargon right here with difficult acronyms like iTQP"

Typing the most unique letters in that entry:
> itq

..will get you that past entry highlighted. Now you can do stuff on it:

c    = clone entry
v    = clone Verbatim (take the entry AS-IS and accept immediately)

- requires an edit buffer, where user can further amend the entry before accepting

Sauna 's' added for Forcee project manager. Essentials of the dev cycle. Testing it!
Forcee currently has four keys: Code, Refactor, Tests, coFfee 
s 1 [enter] #BeBackLater

#Links

Javascript tutorials on keypress and Strings
http://javascript.info/tutorial/string

Tootallnate's package 'keypress'
https://github.com/TooTallNate/keypress

JavaScript escape sequences (keycodes)
https://mathiasbynens.be/notes/javascript-escapes
