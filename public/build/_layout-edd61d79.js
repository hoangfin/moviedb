
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, N as create_slot, a as validate_slots, e as element, b as space, f as attr_dev, h as add_location, k as append_dev, j as insert_dev, O as update_slot_base, P as get_all_dirty_from_scope, Q as get_slot_changes, z as transition_in, x as transition_out, o as detach_dev } from './main-ff8789af.js';

/* src\pages\_layout.svelte generated by Svelte v3.46.4 */

const file = "src\\pages\\_layout.svelte";

function create_fragment(ctx) {
	let link0;
	let link1;
	let link2;
	let t0;
	let nav;
	let a;
	let t2;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	const block = {
		c: function create() {
			link0 = element("link");
			link1 = element("link");
			link2 = element("link");
			t0 = space();
			nav = element("nav");
			a = element("a");
			a.textContent = "Movie Database";
			t2 = space();
			if (default_slot) default_slot.c();
			document.title = "Movie DB";
			attr_dev(link0, "rel", "preconnect");
			attr_dev(link0, "href", "https://fonts.googleapis.com");
			add_location(link0, file, 2, 4, 48);
			attr_dev(link1, "rel", "preconnect");
			attr_dev(link1, "href", "https://fonts.gstatic.com");
			attr_dev(link1, "crossorigin", "");
			add_location(link1, file, 3, 4, 113);
			attr_dev(link2, "href", "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Roboto:wght@400;700&display=swap");
			attr_dev(link2, "rel", "stylesheet");
			add_location(link2, file, 4, 4, 187);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "svelte-p1kelj");
			add_location(a, file, 7, 4, 347);
			attr_dev(nav, "class", "svelte-p1kelj");
			add_location(nav, file, 6, 0, 336);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link0);
			append_dev(document.head, link1);
			append_dev(document.head, link2);
			insert_dev(target, t0, anchor);
			insert_dev(target, nav, anchor);
			append_dev(nav, a);
			insert_dev(target, t2, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[0],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[0])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[0], dirty, null),
						null
					);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(link0);
			detach_dev(link1);
			detach_dev(link2);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(nav);
			if (detaching) detach_dev(t2);
			if (default_slot) default_slot.d(detaching);
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
	validate_slots('Layout', slots, ['default']);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Layout> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class Layout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Layout",
			options,
			id: create_fragment.name
		});
	}
}

export { Layout as default };
//# sourceMappingURL=_layout-edd61d79.js.map
