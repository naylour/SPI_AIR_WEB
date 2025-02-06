<script lang="ts">
    import { Controls, Nav } from 'components';
    import { getAppContext } from 'stores/app.svelte';

    const app = getAppContext();
</script>

<footer class="footer">
    {#if app.footer.showNav}
        <Nav />
    {:else}
        <Controls />
    {/if}
</footer>

<style lang="postcss">
    .footer {
        @apply fixed left-2 bottom-2 flex items-center justify-center
            h-[var(--footer-height)] text-xs font-medium
            @container;
        width: calc(100% - 16px);
    }
</style>
