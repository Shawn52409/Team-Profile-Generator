const Employee = require('../lib/Employee')

describe("Employee", () => {
    it('Create Employee object', () => {
        const employee = new Employee('Shawn', '524', 'shawnsmm@gmail.com');

        expect(employee.name).toBe('Shawn');
        expect(employee.id).toBe('524');
        expect(employee.email).toBe('shawnsmm@gmail.com');
        expect(employee.type).toBe('Employee');
    });
    it('Output employee name', () =>{
        const employee = new Employee('Shawn', '524', 'shawnsmm@gmail.com');
        expect(employee.getName()).toBe('Shawn');
    });
    it('Output employee ID', () =>{
        const employee = new Employee('Shawn', '524', 'shawnsmm@gmail.com');
        expect(employee.getId()).toBe('524');
    });
    it('Output employee email', () =>{
        const employee = new Employee('Shawn', '524', 'shawnsmm@gmail.com');
        expect(employee.getEmail()).toBe('shawnsmm@gmail.com');
    });
    it('Output employee Role', () =>{
        const employee = new Employee('Shawn', '524', 'shawnsmm@gmail.com');
        expect(employee.getRole()).toBe('Employee');
    });
});