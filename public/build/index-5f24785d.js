
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, g as goto, c as component_subscribe, a as validate_slots, e as element, b as space, f as attr_dev, h as add_location, j as insert_dev, k as append_dev, l as set_input_value, m as listen_dev, p as prevent_default, n as noop, o as detach_dev, r as run_all, q as onMount, t as globals, u as create_component, w as mount_component, x as transition_out, y as check_outros, z as transition_in, A as destroy_component, B as group_outros, C as add_render_callback, D as create_in_transition, E as create_out_transition } from './main-ff8789af.js';
import { g as getPopularMovies, P as Preloader, f as fly } from './index-47247d37.js';
import { M as MovieList } from './MovieList-8397a20f.js';

/* src\components\SearchMovies.svelte generated by Svelte v3.46.4 */
const file$1 = "src\\components\\SearchMovies.svelte";

function create_fragment$1(ctx) {
	let form;
	let input;
	let t0;
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			form = element("form");
			input = element("input");
			t0 = space();
			button = element("button");
			button.textContent = "Search";
			attr_dev(input, "placeholder", "Search for a movie...");
			attr_dev(input, "type", "text");
			attr_dev(input, "size", "40");
			attr_dev(input, "class", "svelte-139ej50");
			add_location(input, file$1, 11, 4, 204);
			attr_dev(button, "class", "svelte-139ej50");
			add_location(button, file$1, 12, 4, 298);
			attr_dev(form, "class", "svelte-139ej50");
			add_location(form, file$1, 10, 0, 158);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			append_dev(form, input);
			set_input_value(input, /*keyword*/ ctx[0]);
			append_dev(form, t0);
			append_dev(form, button);

			if (!mounted) {
				dispose = [
					listen_dev(input, "input", /*input_input_handler*/ ctx[2]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[1]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*keyword*/ 1 && input.value !== /*keyword*/ ctx[0]) {
				set_input_value(input, /*keyword*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let $goto;
	validate_store(goto, 'goto');
	component_subscribe($$self, goto, $$value => $$invalidate(3, $goto = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('SearchMovies', slots, []);
	let keyword;

	function submit() {
		$goto(`/search/${keyword}`);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<SearchMovies> was created with unknown prop '${key}'`);
	});

	function input_input_handler() {
		keyword = this.value;
		$$invalidate(0, keyword);
	}

	$$self.$capture_state = () => ({ goto, keyword, submit, $goto });

	$$self.$inject_state = $$props => {
		if ('keyword' in $$props) $$invalidate(0, keyword = $$props.keyword);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [keyword, submit, input_input_handler];
}

class SearchMovies extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SearchMovies",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src\pages\index.svelte generated by Svelte v3.46.4 */

const { console: console_1 } = globals;
const file = "src\\pages\\index.svelte";

// (35:1) {:else}
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
		source: "(35:1) {:else}",
		ctx
	});

	return block;
}

// (31:1) {#if resReady}
function create_if_block(ctx) {
	let section;
	let movielist;
	let section_intro;
	let section_outro;
	let current;

	movielist = new MovieList({
			props: { movies: /*popularMovies*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			create_component(movielist.$$.fragment);
			add_location(section, file, 31, 2, 811);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			mount_component(movielist, section, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const movielist_changes = {};
			if (dirty & /*popularMovies*/ 1) movielist_changes.movies = /*popularMovies*/ ctx[0];
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
		source: "(31:1) {#if resReady}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let main;
	let searchmovies;
	let t;
	let current_block_type_index;
	let if_block;
	let current;
	searchmovies = new SearchMovies({ $$inline: true });
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
			main = element("main");
			create_component(searchmovies.$$.fragment);
			t = space();
			if_block.c();
			attr_dev(main, "class", "svelte-161625f");
			add_location(main, file, 28, 0, 765);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			mount_component(searchmovies, main, null);
			append_dev(main, t);
			if_blocks[current_block_type_index].m(main, null);
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
				if_block.m(main, null);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(searchmovies.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(searchmovies.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			destroy_component(searchmovies);
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
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Pages', slots, []);
	let popularMovies;
	let resReady = false;

	onMount(async () => {
		$$invalidate(0, popularMovies = await getPopularMovies());
		let promises = [];

		popularMovies.forEach(movie => {
			const img = new Image();
			img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
			promises.push(img.decode());
		});

		try {
			await Promise.all(promises);
		} catch(e) {
			console.log(e);
		}

		$$invalidate(1, resReady = true);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Pages> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		getPopularMovies,
		MovieList,
		SearchMovies,
		Preloader,
		onMount,
		fly,
		popularMovies,
		resReady
	});

	$$self.$inject_state = $$props => {
		if ('popularMovies' in $$props) $$invalidate(0, popularMovies = $$props.popularMovies);
		if ('resReady' in $$props) $$invalidate(1, resReady = $$props.resReady);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [popularMovies, resReady];
}

class Pages extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Pages",
			options,
			id: create_fragment.name
		});
	}
}

export { Pages as default };
//# sourceMappingURL=index-5f24785d.js.map
