<script lang="ts">
    import 'styles/index.postcss';

    import { Footer, Header } from 'sections';
    import { setAppContext } from 'stores/app.svelte';

    const { children } = $props();

    const app = setAppContext();
</script>

<Header />

<div class="content text-sm">
    {@render children()}
</div>

<Footer />

<style lang="postcss">
    .content {
        @apply pt-[var(--header-height)] pb-[var(--footer-height)];
    }
</style>
