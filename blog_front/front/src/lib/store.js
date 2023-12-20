import { writable } from 'svelte/store'

export let admin_sidebar = writable(false);

export let user_info = writable('');
export let authStatus = writable('');
export let testCookie = writable('');

export let seoValue = writable({});

export let testStoreArr = writable([1,2,3,4,5,6,7,8,9,11]);