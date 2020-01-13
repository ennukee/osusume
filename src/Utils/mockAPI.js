export const testTokenQuery = () => new Promise(resolve => setTimeout(() => resolve(true), 1000));
export const testOsusumeCheck = () => new Promise(resolve => setTimeout(() => resolve({ ok: false }), 250));
export const testProfileGen = () => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 5000));
export const testGenerateRecs = () => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 2200));
