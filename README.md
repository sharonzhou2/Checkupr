# WIT-hackathon
Team 2's repo for WIT 2021 Hackathon

## How to set up the database
Packages needed:
flask_mysqldb | flask_sqlalchemy | flask_marshmallow

1. Make sure all packages above are installed
2. Download XAMPP from https://www.apachefriends.org/download.html
3. Run XAMPP and start the modules 'Apache' and 'MySQL' in the control panel
4. In your browser, go to https://localhost and click on phpMyAdmin in the top right
5. Create a new database and call it 'flask'
6. In the directory with 'app.py', run python and enter the following:
```python
from app import db
db.create_all()
```
7. There should be no output if it worked - if you get an error, check the required packages
8. Go back to the phpMyAdmin page and refresh - you should see two tables called 'doctors' and 'patients'
9. On the menu on the left, go to the doctors table and then go to the insert tab at the top
10. Fill in the name to add a doctor to the database
11. Now go to the patients table and similarly add patients. Note that the ID box can be left blank as this is automatically generated. For doctor_id select the doctor ID from the dropdown that corresponds to the doctor you want to link this patient to.


Let me know if anything doesn't work - I might have missed a step
