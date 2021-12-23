# VALERY KOFANOV
## Contacts
***
* Location: Brest, Belarus
* Phone: +375 (29) 801-79-31
* E-mail: vakofanov@g.bstu.by
* Telegram: @valkofant
* Discord: Valery (@valkof)
* GitHub: [valkof](https://github.com/valkof "valkof")
* YouTube: [Kofanov Valery Anatolievich](https://www.youtube.com/channel/UC__bwua8kM4qmIgU7dxJbog/featured "Working channel")
## About Me
***
I work as an assistant professor at the Brest State Technical University at the Department of Informatics and Applied Mathematics. I teach disciplines in information technology at the Faculty of Civil Engineering and Economics.

I came to the courses to gain knowledge and skills in web application development. There is a very strong desire to use such applications for the automation of production processes in enterprises.
## Skills
***
### Front-End Development
* HTML
* CSS
* JavaScript
* Visual Studio Code
* Git
### Cloud Technologies
* Google Workspace
    * Admin Console
    * Calendar
    * Docs, Sheets, Slides
    * Drive
    * Forms
    * Gmail
* Google Marketing Platform
    * Data Studio
* Google Apps Script
### Desktop Application
* Microsoft Office (incl. VBA)
    * Word, Excel, PowerPoint
    * Access
* MathCAD (incl. programming)
## Code Examples
***
### 7 kyu
> The input will be an array of dictionaries.

> Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

> The keys are not reoccurring and their range is `-999 < key < 999`. The dictionaries' keys & values will always be strings and will always not be empty.
```
function sentence(List) {
  List.sort(function(a, b){
    return Number(Object.keys(a)[0]) - Number(Object.keys(b)[0])
  });
  var paragraf = List.reduce(function(text, word){
    return text + ' ' + word[Object.keys(word)[0]]; 
  }, '');
  return paragraf.trim();
}
```
## Experience
***
### The add-on for Google Sheets
* [Create exam tickets in Google Docs](https://www.youtube.com/watch?v=kQQqCf1qC6I&t "Create exam tickets in Google Docs")
* [Online exam in Google Classroom managed by Google Sheets](https://www.youtube.com/watch?v=c87C3BwvrF4 "Online exam in Google Classroom managed by Google Sheets")
## Education
***
* University: `Brest State Technical University`
* Graduate School: `PhD in Engineering sciences`
* Epol Soft: `IT LAB - practice-oriented training`
* Code Basics: `HTML` `CSS`
## English
***
English level - `A1`   