// TypeScript OOP Assignment – Class Diagram

// Part A - System: Simple Notes Management System (7 Marks)
// 1. Base Class – User (1 Mark)

/*
The class should contain the following properties:
• Id (number)
• name (String)
• email (String)
• Password (String)
• Phone (String)
• age (Number ) (Must be between 18 and 60)
Requirements:
 Use appropriate access modifiers (public, private, protected).
 Create a method called displayInfo() that prints the user's information
*/


interface IUser{
    id : number ;
    name : string ;
    email :string ;
    phone : string ;
    password: string;
    age:number;
}
class User implements IUser {
    private _password: string;
    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }
    // // 5. Aggregation – User and Notebook (1 Mark)
    // Create a relationship between:
    //  User
    //  NoteBook
    notebooks: NoteBook[];

    constructor(   
        public id: number,
        public name: string,
        public email: string,
        password: string,
        public phone: string,
        public age: number){
            // Relation ..
        this.notebooks =[]
        
        this._password = password;

        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }


    }
    displayInfo(): void {
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this.age}`);
    }

    
    // Add Notes in User Class 
        addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
        }



    }
    const user = new User(1 , "Rahma" , "email"  , "23445" , "345556" , 23)
    user.displayInfo()

// 2. Inheritance – Admin User (1 Mark)
// Create a class called Admin that extends the User class.
// Requirements:
//  The Admin class should include a method that allows the admin to manage notes.
//  Apply the concept of inheritance.


class Admin extends User{
    public adminId:number
    constructor ( adminId :number ,id:number , name:string , email:string , password:string , phone:string , age:number ){
        super( id , name , email , password , phone , age )
        this.adminId = adminId 
    }
    // The Admin class should include a method that allows the admin to manage notes.
    noteManage(noteName: string): void {
        console.log(`Managing note: ${noteName}`);
    }

}
const admin = new Admin(1,1 , "Admin1" , "admin@gmail.com" , "23455666" , "!3455666677" , 44)
admin.noteManage("Flower");
admin.displayInfo();

// 3. Class - Note (1 Mark)
// Create a class called Note
// • Id (number)
// • tittle(String)
// • content(String)
// • userId(reference to User)
// Requirements:
//  Create a method called preview() that returns a short preview of the note content


class Note {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public userId: number,

// 6.Association – Note and User (1 Mark)
// Create a relationship between:
//  User
//  Note
// Requirements:
//  Each Note must have an author (the user who created it).
//  This relationship should represent Association.
     public author:User  // // Association
    ) {}


    preview(): string {
        return this.content.length > 20
            ? this.content.substring(0, 20) + "....."
            : this.content;
    }

}

const note = new Note(1 , "Note1" , "kvnddddddjfdddddddddddddddddddddddddddd" , 1 , user)
console.log(note.preview()); 
console.log(note.author.name); 
// 4. Composition– NoteBook and Notes (1 Mark)   // Dependent on parent 
// Create a class called NoteBook
// Requirements:
//  The NoteBook class should contain a collection of Notes objects .
//  Implement methods such as : addNote() , removeNote()
//  The relationship between Notebook and Note must represent Composition

class NoteBook {
    //   contain a collection of Notes objects
    // Composition... 
    notes:Note[];
    constructor(){
        this.notes = [] 
    }
    // Implement methods such as : addNote() , removeNote()
        // Add note
    addNote(note: Note): void {
        this.notes.push(note);
    }

    // Remove note by id
    removeNote(id: number): void {
        this.notes = this.notes.filter(note => note.id !== id);
    }

}

const notebook = new NoteBook();
const note1 = new Note(1, "Title 1", "This is my first note", 1 , user);
notebook.addNote(note1);
console.log(notebook.notes);

notebook.removeNote(1);
console.log(notebook.notes);

// 5. Aggregation – User and Notebook (1 Mark)
// Create a relationship between:
//  User
//  NoteBook
// Requirements:
//  A user can own multiple notebooks.
//  This relationship should represent Aggregation.

    const notebook1 = new NoteBook();
    const notebook2 = new NoteBook();
    const note2 = new Note(1, "Title", "Content here", 1 , user);
    notebook1.addNote(note2);
    notebook2.addNote(note1);

    user.addNotebook(notebook1);
    user.addNotebook(notebook2);

    console.log(user.notebooks);

// 7. Generics– Data Storage(1 Mark)
// Create a Generic Class called :
//  Storage
// Requirements:
//  The class should be able to store any type of data .
// Example operations may include :
// 1. addItem ()
// 2. removeItem() .
// 3. getAllItems() .

class Storage<T>{
    private items: T[] = [];


    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getAllItems(): T[] {
        return this.items;
    }

}

const numberStorage = new Storage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(20);
numberStorage.removeItem(20);

console.log(numberStorage.getAllItems());