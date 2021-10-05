const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    it('Create engineer object', () => {
        const engineer = new Engineer('Shawn', '524', 'shawnsmm@gmail.com', 'Shawn52409');

        expect(engineer.name).toBe('Shawn');
        expect(engineer.id).toBe('524');
        expect(engineer.email).toBe('shawnsmm@gmail.com');
        expect(engineer.gitHub).toBe('Shawn52409');
        expect(engineer.type).toBe('Engineer');
    });
    it('Output engineer name', () =>{
        const engineer = new Engineer('Shawn', '524', 'shawnsmm@gmail.com', 'Shawn52409');
        expect(engineer.getName()).toBe('Shawn');
    });
    it('Output engineer ID', () =>{
        const engineer = new Engineer('Shawn', '524', 'shawnsmm@gmail.com', 'Shawn52409');
        expect(engineer.getId()).toBe('524');
    });
    it('Output engineer email', () =>{
        const engineer = new Engineer('Shawn', '524', 'shawnsmm@gmail.com', 'Shawn52409');
        expect(engineer.getEmail()).toBe('shawnsmm@gmail.com');
    });
    it('Output engineer Role', () =>{
        const engineer = new Engineer('Shawn', '524', 'shawnsmm@gmail.com', 'Shawn52409');
        expect(engineer.getRole()).toBe('Engineer');
    });
    it('Output engineer office number', () =>{
        const engineer = new Engineer('Shawn', '524', 'shawnsmm@gmail.com', 'Shawn52409');
        expect(engineer.getGithub()).toBe('Shawn52409');
    });
});