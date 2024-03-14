import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      routes: {
				include: ['/*'],
				exclude: ['<all>']
			},
    }),
  },
};

export default config;