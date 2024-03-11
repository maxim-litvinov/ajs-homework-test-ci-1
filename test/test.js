const { HealthCheck } = require('../src/index.js');


test('Должно вернуть "healthy" если здоровья больше 50', () => {
  expect(HealthCheck('Mage', 75)).toEqual('healthy');
});

test('Должно вернуть "wounded" если хп между 15 и 50', () => {
  expect(HealthCheck('Warrior', 30)).toEqual('wounded');
});

test('Должно вернуть "critical" если хп 15 или ниже', () => {
  expect(HealthCheck('Rogue', 10)).toEqual('critical');
});

