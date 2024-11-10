import readLine from 'readLine/promises';
import { stdin as input, stdout as output } from 'process';

const rL = readLine.createInterface({ input, output });

const contactsList = [];

console.log('--- ContacstList ---');

const firstName = await rL.quastion('First Name:');
const lastName = await rL.quastion('Last Name:');

const newContact = {
     id: contactsList.length,
     firstName,
     lastName,
};

contactsList.push(newContact);

console.log('Contacts List');
console.log(contactsList);