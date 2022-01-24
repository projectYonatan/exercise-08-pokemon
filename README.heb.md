<div dir="rtl">
  # פוקימון

תרגיל זה הוא חלק ממאגר התרגילים שנמצא בכתובת https://github.com/YaakovHatam/exercises

## טכנולוגיות
* Bootstrap 5

## מסכים
כל המסכים צריכים להיות עם אותו חלק עליון, הכותרת מכילה breadcrumb (https://getbootstrap.com/docs/5.0/components/breadcrumb/) והתקדמות התהליך (https://getbootstrap.com/docs/5.0/components/progress/)

1. בחר את הצורה שלך
	* לאחר בחירה של צורה מד ההתקדמות הוא 33%
2. בחר את הסוג שלך (ממאפיין ה pokemon_species שנמצא בתשובה שהוחזרה מבקשת הAPI של השלב הקודם)
	* לאחר הבחירה מד ההתקדמות הוא 66%
3. בחר את הפוקימון שלך (ממאפיין ה varieties שנמצא בתשובה שהוחזרה מבקשת הAPI של השלב הקודם)
	* לאחר הבחירה מד ההתקדמות הוא 100%
4. פוקימון - הצג כרטיס (https://getbootstrap.com/docs/5.0/components/card/) בתוך Modal (https://getbootstrap.com/docs/5.0/components/modal/#modal-components) ובתוך הכרטיס שבתוך Modal להציג את הפרטים והתמונה של הפוקימון שנבחר 
	- לModal יש כפתור חזרה שסוגר את הModal
	- לModal יש לחצן איפוס שמחזיר להתחלה את התהליך (מסך 1 פתוח)

## נקודת קצה API
- צורות: קריאת `get` לנתיב https://pokeapi.co/api/v2/pokemon-shape
- צורה ספציפית: קריאת `get` לנתיב https://pokeapi.co/api/v2/pokemon-shape/:id
- זן ספיציפי: קריאת `get` לנתיב  https://pokeapi.co/api/v2/pokemon-species/:id
- פוקימון ספיציפי: קריאת `get` לנתיב  https://pokeapi.co/api/v2/pokemon/:id

## תוספות
- שמור את התגובות ב-Objects לשמירה במטמון
  </div>
