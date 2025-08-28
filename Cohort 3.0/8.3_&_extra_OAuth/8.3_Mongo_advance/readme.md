


## Nothing special just got to know some code for Mongoo DB like,

##  1-> set new value and not operator

---

- [{ $set: { isDone: { $not: "$isDone" } } }];  // it basically finds the isDone value(true or false) in findOneandUpdate function and then make it's not and set in isDone  of the foundrow

---

###  2-> sort function
- .(sort({ date: -1 })) // it sort the found data in de creasing order of date

---

### 3-> $in-> to get all values matching in an array 
- _id: { "$in": user.purchasedCourses }    // here it gives all the _id of a table where the _id is in user.purchasedCourses array but only once like if theres two or more similar values it returns only one time 

---