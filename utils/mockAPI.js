export const testTokenQuery = () => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 250));
export const testOsusumeCheck = () => new Promise(resolve => setTimeout(() => resolve({ ok: false }), 250));
export const testProfileGen = () => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 3000));
export const testGenerateRecs = () => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 2000));
export const testRecEndpointReturn = () => new Promise(resolve => setTimeout(() => resolve({
  ok: true,
  json: async () => ({
    recs: [{
      title: 'Horimiya',
      score: 80,
      predictedScore: 86,
      genres: ['Romance', 'Comedy', 'School', 'Slice of Life'],
    }, {
      title: 'CLANNAD',
      score: 87,
      predictedScore: 94,
      genres: ['Romance', 'Supernatural', 'Drama', 'Slice of Life']
    }]
  })
}), 500));
