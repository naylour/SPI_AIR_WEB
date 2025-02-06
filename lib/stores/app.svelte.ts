import { setContext, getContext } from 'svelte';

interface AppFooter {
    showNav: boolean;
}

interface AppControls {
    field?: void;
}

interface AppObject {
    field?: void;
}

class App {
    footer = $state<AppFooter>({
        showNav: true
    });

    controls = $state<AppControls>({});

    objects = $state<AppObject[]>([]);
}

export const APP_KEY = Symbol('APP_KEY'),
    setAppContext = () => setContext(APP_KEY, new App()),
    getAppContext = (): ReturnType<typeof setAppContext> => getContext(APP_KEY);
