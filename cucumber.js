const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const courtsManager_backend = [
  ...common,
  'tests/apps/CourtsManager/backend/features/**/*.feature',
  '--require tests/apps/CourtsManager/backend/features/step_definitions/*.steps.ts'
].join(' ');



module.exports = {
  courtsManager_backend,
};
