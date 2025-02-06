<script lang="ts">
    import { getAppContext } from 'stores/app.svelte';
    import { Link } from 'components';
    import House from '@lucide/svelte/icons/house';
    import { page } from '$app/state';

    const app = getAppContext();

    let pathname = $derived(page.url.pathname);

    let darkMode = $state(false);

    $effect(() => {
        if(darkMode) document.documentElement.dataset.mode = 'dark';
        else document.documentElement.dataset.mode = 'light';
    })
</script>

<header class="header">
    {#if pathname === '/'}
        <h2 class="text-xl">
            Объекты: <span class="font-semibold underline">{app.objects.length}</span>
        </h2>
    {:else if pathname === '/events'}
        <h2 class="text-xl">События</h2>
    {:else if pathname === '/profile'}
        <h2 class="text-xl">Профиль</h2>
    {:else if pathname === '/settings'}
        <h2 class="text-xl">Настройки</h2>
    {/if}

    <button onclick={() => {
        darkMode = !darkMode
    }}>Theme</button>
</header>

<style lang="postcss">
    .header {
        @apply fixed top-2 left-2 h-[var(--header-height)]
            bg-violet-100 rounded-md p-1 flex items-center
            shadow-lg shadow-violet-100/10
        ;

        width: calc(100% - 16px);
    }
</style>
