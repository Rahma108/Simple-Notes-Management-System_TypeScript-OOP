
📘 Simple Notes Management System
📌 Overview

This system is a Simple Notes Management System implemented using Object-Oriented Programming (OOP) concepts such as:

Encapsulation
Inheritance
Association
Aggregation
Composition
Generics

The system allows users to create and manage notebooks and notes, while admins have additional privileges to manage notes.


🧑‍💻 Classes Description
👤 User Class

Represents a system user.

Properties:

id: number
name: string
email: string
password: string
phone: string
age: number (must be between 18 and 60)

Methods:

displayInfo() → Displays user information


🛠 Admin Class (Inheritance)

Extends the User class.

Features:

Inherits all properties and methods from User
Has additional administrative capabilities

Methods:

manageNotes() → Allows admin to manage notes


📝 Note Class

Represents a single note.

Properties:

id: number
title: string
content: string
userId: reference to User

Methods:

preview() → Returns a short preview of the note content


📒 NoteBook Class (Composition)

Represents a collection of notes.

Properties:

notes: array of Note objects

Methods:

addNote(note)
removeNote(noteId)

Note:

A Notebook is composed of Notes (Composition)
If the Notebook is deleted, its Notes are also deleted


📦 Storage Class (Generics)

A generic class that can store any type of data.

Generic Type: <T>

Methods:

addItem(item: T)
removeItem(item: T)
getAllItems() → Returns all stored items


🔗 Relationships Between Classes
1. Inheritance
Admin extends User


2. Aggregation
User owns multiple NoteBooks
Relationship type: Aggregation
A User can exist without NoteBooks


3. Association
User ↔ Note
Each Note must have an author (User)
Relationship type: Association


4. Composition
NoteBook contains multiple Notes
Strong relationship
Notes cannot exist without a NoteBook

🧠 OOP Concepts Used
Encapsulation → Using private/protected attributes
Inheritance → Admin extends User
Association → Notes linked to Users
Aggregation → Users owning notebooks
Composition → Notebook containing Notes
Generics → Storage class handling any data type



✅ System Features
Create users and admins
Create notebooks and notes
Add and remove notes inside notebooks
Preview note content
Store and manage any type of data using generics
Maintain relationships between entities using OOP principles



