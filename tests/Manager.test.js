const Manager = require('../lib/Manager')

describe("Manager", () => {
    it('Create manager object', () => {
        const manager = new Manager('Shawn', '524', 'shawnsmm@gmail.com', '1');

        expect(manager.name).toBe('Shawn');
        expect(manager.id).toBe('524');
        expect(manager.email).toBe('shawnsmm@gmail.com');
        expect(manager.officeNumber).toBe('1')
        expect(manager.type).toBe('Manager');
    });
    it('Output manager name', () =>{
        const manager = new Manager('Shawn', '524', 'shawnsmm@gmail.com', '1');
        expect(manager.getName()).toBe('Shawn');
    });
    it('Output manager ID', () =>{
        const manager = new Manager('Shawn', '524', 'shawnsmm@gmail.com', '1');
        expect(manager.getId()).toBe('524');
    });
    it('Output manager email', () =>{
        const manager = new Manager('Shawn', '524', 'shawnsmm@gmail.com', '1');
        expect(manager.getEmail()).toBe('shawnsmm@gmail.com');
    });
    it('Output manager Role', () =>{
        const manager = new Manager('Shawn', '524', 'shawnsmm@gmail.com', '1');
        expect(manager.getRole()).toBe('Manager');
    });
    it('Output manager office number', () =>{
        const manager = new Manager('Shawn', '524', 'shawnsmm@gmail.com', '1');
        expect(manager.getOfficeNumber()).toBe('1');
    });
});