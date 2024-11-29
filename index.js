// Import the 'prompt-sync' module to enable user input from the console.
const prompt = require('prompt-sync')();

// Define a class named 'Menu' with a constructor.
class Menu {
    constructor(nama, kategori, nama_gerai, harga) {
        this.nama = nama;
        this.kategori = kategori;
        this.nama_gerai = nama_gerai;
        this.harga = harga;
    }
}

// Initialize an empty array named 'menus' to store menu objects.
const menus = [];

// Define a function 'addMenu' to add a new menu to the 'menus' array.
function addMenu(nama, kategori, nama_gerai, harga) {
    const menu = new Menu(nama, kategori, nama_gerai, harga);
    menus.push(menu);
    console.log(`Menu "${nama}" added successfully.`);
}

// Define a function 'displayMenus' to show all menus.
function displayMenus() {
    if (menus.length === 0) {
        console.log('No menus available.');
    } else {
        console.log('Available menus:');
        menus.forEach((menu, index) => {
            console.log(`${index + 1}. ${menu.nama} - ${menu.kategori} - ${menu.nama_gerai} - Rp.${menu.harga}`);
        });
    }
}

// Main function to display the menu options and handle user inputs.
function displayMenu() {
    while (true) {
        console.log('\nMenu Management System');
        console.log('1. Add menu');
        console.log('2. Show all menus');
        console.log('3. Exit');

        const choice = prompt('Enter your choice: ');

        switch (choice) {
            case '1':
                const nama = prompt('Enter menu name: ');
                const kategori = prompt('Enter menu category: ');
                const nama_gerai = prompt('Enter store name: ');
                const harga = prompt('Enter menu price: ');
                addMenu(nama, kategori, nama_gerai, harga);
                break;
            case '2':
                displayMenus();
                break;
            case '3':
                console.log('Exiting the application. Goodbye!');
                return;
            default:
                console.log('Invalid choice. Please try again.');
        }
    }
}

// Call 'displayMenu' to start the application.
displayMenu();
