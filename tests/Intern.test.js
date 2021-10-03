const Intern = require('../lib/Intern')

describe("Intern", () => {
    it('Create intern object', () => {
        const intern = new Intern('Shawn', '524', 'shawnsmm@gmail.com', 'OSU');

        expect(intern.name).toBe('Shawn');
        expect(intern.id).toBe('524');
        expect(intern.email).toBe('shawnsmm@gmail.com');
        expect(intern.school).toBe('OSU')
        expect(intern.type).toBe('Intern');
    });
    it('Output intern name', () =>{
        const intern = new Intern('Shawn', '524', 'shawnsmm@gmail.com', 'OSU');
        expect(intern.getName()).toBe('Shawn');
    });
    it('Output intern ID', () =>{
        const intern = new Intern('Shawn', '524', 'shawnsmm@gmail.com', 'OSU');
        expect(intern.getId()).toBe('524');
    });
    it('Output intern email', () =>{
        const intern = new Intern('Shawn', '524', 'shawnsmm@gmail.com', 'OSU');
        expect(intern.getEmail()).toBe('shawnsmm@gmail.com');
    });
    it('Output intern Role', () =>{
        const intern = new Intern('Shawn', '524', 'shawnsmm@gmail.com', 'OSU');
        expect(intern.getRole()).toBe('Intern');
    });
    it('Output intern office number', () =>{
        const intern = new Intern('Shawn', '524', 'shawnsmm@gmail.com', 'OSU');
        expect(intern.getsSchool()).toBe('OSU');
    });
});