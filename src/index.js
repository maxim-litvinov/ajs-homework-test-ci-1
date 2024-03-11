function HealthCheck(character, health) {
  if (health > 50) {
    return 'healthy';
  } else if (health <= 50 && health >= 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}

module.exports = { HealthCheck };

