
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, q as onMount, L as params, e as element, f as attr_dev, h as add_location, j as insert_dev, x as transition_out, y as check_outros, z as transition_in, o as detach_dev, B as group_outros, u as create_component, w as mount_component, n as noop, A as destroy_component, C as add_render_callback, D as create_in_transition, E as create_out_transition } from './main-ff8789af.js';
import { s as searchMovies, P as Preloader, f as fly } from './index-47247d37.js';
import { M as MovieList } from './MovieList-8397a20f.js';

/* src\pages\search\[keyword].svelte generated by Svelte v3.46.4 */
const file = "src\\pages\\search\\[keyword].svelte";

// (34:4) {:else}
function create_else_block(ctx) {
	let preloader;
	let current;
	preloader = new Preloader({ $$inline: true });

	const block = {
		c: function create() {
			create_component(preloader.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(preloader, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(preloader.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(preloader.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(preloader, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(34:4) {:else}",
		ctx
	});

	return block;
}

// (30:4) {#if resReady}
function create_if_block(ctx) {
	let section;
	let movielist;
	let section_intro;
	let section_outro;
	let current;

	movielist = new MovieList({
			props: { movies: /*movies*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			create_component(movielist.$$.fragment);
			add_location(section, file, 30, 8, 894);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			mount_component(movielist, section, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const movielist_changes = {};
			if (dirty & /*movies*/ 1) movielist_changes.movies = /*movies*/ ctx[0];
			movielist.$set(movielist_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(movielist.$$.fragment, local);

			add_render_callback(() => {
				if (section_outro) section_outro.end(1);
				section_intro = create_in_transition(section, fly, { y: 50, duration: 500 });
				section_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(movielist.$$.fragment, local);
			if (section_intro) section_intro.invalidate();
			section_outro = create_out_transition(section, fly, { duration: 500 });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(movielist);
			if (detaching && section_outro) section_outro.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(30:4) {#if resReady}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let current_block_type_index;
	let if_block;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*resReady*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			div = element("div");
			if_block.c();
			attr_dev(div, "class", "movie-detail svelte-m9uafj");
			add_location(div, file, 28, 0, 838);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(div, null);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_blocks[current_block_type_index].d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $params;
	validate_store(params, 'params');
	component_subscribe($$self, params, $$value => $$invalidate(2, $params = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('U5Bkeywordu5D', slots, []);
	let movies;
	let resReady = false;

	onMount(async () => {
		$$invalidate(0, movies = await searchMovies($params.keyword));
		let promises = [];

		movies.forEach(movie => {
			const img = new Image();
			img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
			promises.push(img.decode());
		});

		try {
			await Promise.all(promises);
		} catch(error) {
			
		}

		$$invalidate(1, resReady = true);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<U5Bkeywordu5D> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		params,
		searchMovies,
		MovieList,
		onMount,
		Preloader,
		fly,
		movies,
		resReady,
		$params
	});

	$$self.$inject_state = $$props => {
		if ('movies' in $$props) $$invalidate(0, movies = $$props.movies);
		if ('resReady' in $$props) $$invalidate(1, resReady = $$props.resReady);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [movies, resReady];
}

class U5Bkeywordu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bkeywordu5D",
			options,
			id: create_fragment.name
		});
	}
}

export { U5Bkeywordu5D as default };
//# sourceMappingURL=_keyword_-29e424b9.js.map
