import os

def fileCheck():
    import os
if os.path.exists("resume.pdf"):
    print("resume.pdf exists")
else: print("resume.pdf MISSING!")
    
import os
if os.path.exists("project_notes.txt"):
    print("project_notes.txt exists")
with open("results.txt", "a") as file:
    file.write("\nroject_notes.txt!")

    
import os
if os.path.exists("budget.xlsx"):
    print("budget.xlsx exists")
    file.write("\nroject_notes.txt!")
else: print("budget.xlsx MISSING!")
    
import os
if os.path.exists("family_photos.jpg"):
    print("family_photo.jpg exists")
    file.write("\nroject_notes.txt!")
else: print("family_photo.jpg MISSING!")
    

fileCheck()






