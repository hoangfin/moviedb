
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, q as onMount, L as params, t as globals, M as empty, j as insert_dev, x as transition_out, y as check_outros, z as transition_in, o as detach_dev, J as validate_each_argument, e as element, G as text, f as attr_dev, h as add_location, k as append_dev, I as set_data_dev, B as group_outros, u as create_component, w as mount_component, n as noop, A as destroy_component, b as space, H as src_url_equal, C as add_render_callback, D as create_in_transition, E as create_out_transition, K as destroy_each } from './main-ff8789af.js';
import { a as getMovieDetail, P as Preloader, f as fly } from './index-47247d37.js';

/* src\pages\movie\[id].svelte generated by Svelte v3.46.4 */

const { console: console_1 } = globals;
const file = "src\\pages\\movie\\[id].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (39:4) {:else}
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
		source: "(39:4) {:else}",
		ctx
	});

	return block;
}

// (25:4) {#if resReady}
function create_if_block(ctx) {
	let div;
	let h2;
	let t0_value = /*movieDetail*/ ctx[0].title + "";
	let t0;
	let t1;
	let span0;
	let t2_value = /*movieDetail*/ ctx[0].release_date + "";
	let t2;
	let t3;
	let span1;
	let t4;
	let t5_value = /*movieDetail*/ ctx[0].runtime + "";
	let t5;
	let t6;
	let img;
	let img_src_value;
	let img_alt_value;
	let t7;
	let ul;
	let t8;
	let p;
	let t9_value = /*movieDetail*/ ctx[0].overview + "";
	let t9;
	let div_intro;
	let div_outro;
	let current;
	let each_value = /*movieDetail*/ ctx[0].genres;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			span0 = element("span");
			t2 = text(t2_value);
			t3 = space();
			span1 = element("span");
			t4 = space();
			t5 = text(t5_value);
			t6 = text(" min\r\n            ");
			img = element("img");
			t7 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t8 = space();
			p = element("p");
			t9 = text(t9_value);
			attr_dev(h2, "class", "svelte-16rfqr5");
			add_location(h2, file, 26, 12, 904);
			add_location(span0, file, 27, 12, 946);
			attr_dev(span1, "class", "separator svelte-16rfqr5");
			add_location(span1, file, 28, 12, 999);
			if (!src_url_equal(img.src, img_src_value = `https://image.tmdb.org/t/p/original${/*movieDetail*/ ctx[0].backdrop_path}`)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*movieDetail*/ ctx[0].title);
			attr_dev(img, "class", "svelte-16rfqr5");
			add_location(img, file, 30, 12, 1083);
			attr_dev(ul, "class", "svelte-16rfqr5");
			add_location(ul, file, 31, 12, 1200);
			add_location(p, file, 36, 12, 1358);
			attr_dev(div, "class", "movie-detail svelte-16rfqr5");
			add_location(div, file, 25, 8, 802);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			append_dev(div, span0);
			append_dev(span0, t2);
			append_dev(div, t3);
			append_dev(div, span1);
			append_dev(div, t4);
			append_dev(div, t5);
			append_dev(div, t6);
			append_dev(div, img);
			append_dev(div, t7);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append_dev(div, t8);
			append_dev(div, p);
			append_dev(p, t9);
			current = true;
		},
		p: function update(ctx, dirty) {
			if ((!current || dirty & /*movieDetail*/ 1) && t0_value !== (t0_value = /*movieDetail*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if ((!current || dirty & /*movieDetail*/ 1) && t2_value !== (t2_value = /*movieDetail*/ ctx[0].release_date + "")) set_data_dev(t2, t2_value);
			if ((!current || dirty & /*movieDetail*/ 1) && t5_value !== (t5_value = /*movieDetail*/ ctx[0].runtime + "")) set_data_dev(t5, t5_value);

			if (!current || dirty & /*movieDetail*/ 1 && !src_url_equal(img.src, img_src_value = `https://image.tmdb.org/t/p/original${/*movieDetail*/ ctx[0].backdrop_path}`)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*movieDetail*/ 1 && img_alt_value !== (img_alt_value = /*movieDetail*/ ctx[0].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*movieDetail*/ 1) {
				each_value = /*movieDetail*/ ctx[0].genres;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if ((!current || dirty & /*movieDetail*/ 1) && t9_value !== (t9_value = /*movieDetail*/ ctx[0].overview + "")) set_data_dev(t9, t9_value);
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (div_outro) div_outro.end(1);
				div_intro = create_in_transition(div, fly, { y: 50, duration: 500 });
				div_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (div_intro) div_intro.invalidate();
			div_outro = create_out_transition(div, fly, { duration: 500 });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
			if (detaching && div_outro) div_outro.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(25:4) {#if resReady}",
		ctx
	});

	return block;
}

// (33:16) {#each movieDetail.genres as genre}
function create_each_block(ctx) {
	let li;
	let t_value = /*genre*/ ctx[3].name + "";
	let t;

	const block = {
		c: function create() {
			li = element("li");
			t = text(t_value);
			attr_dev(li, "class", "svelte-16rfqr5");
			add_location(li, file, 33, 20, 1279);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*movieDetail*/ 1 && t_value !== (t_value = /*genre*/ ctx[3].name + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(33:16) {#each movieDetail.genres as genre}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
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
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
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
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	validate_slots('U5Bidu5D', slots, []);
	let movieDetail;
	let resReady = false;

	onMount(async () => {
		$$invalidate(0, movieDetail = await getMovieDetail($params.id));

		try {
			const img = new Image();
			img.src = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`;
			await img.decode();
			console.log("img.decode has been completed");
		} catch(error) {
			
		}

		$$invalidate(1, resReady = true);
		console.log("resReady is set to true");
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		params,
		getMovieDetail,
		onMount,
		Preloader,
		fly,
		movieDetail,
		resReady,
		$params
	});

	$$self.$inject_state = $$props => {
		if ('movieDetail' in $$props) $$invalidate(0, movieDetail = $$props.movieDetail);
		if ('resReady' in $$props) $$invalidate(1, resReady = $$props.resReady);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [movieDetail, resReady];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});
	}
}

export { U5Bidu5D as default };
//# sourceMappingURL=_id_-a69c69a0.js.map
