const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => {
  return `Hello ${name}!`;
}

test('should add 2 numbers', () => {
  const result = add(3, 5);

  expect(result).toBe(8);


});

test('should return userName', () => {
  const greetingResult = generateGreeting('Milinda');

  expect(greetingResult).toBe("Hello Milinda!")
})
test('should return Anonymous', () => {
  const greetingResult = generateGreeting();

  expect(greetingResult).toBe("Hello Anonymous!")
})