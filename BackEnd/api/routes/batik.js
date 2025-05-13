// /routes/batik.js
const supabase = require('../services/supabaseClient');

module.exports = [
  {
    method: 'GET',
    path: '/batik',
    handler: async () => {
      const { data, error } = await supabase.from('batik_types').select('*');
      if (error) return { error };
      return { data };
    },
  },
];
