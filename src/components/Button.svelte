<script lang="ts" module>
    import type { Snippet } from 'svelte';
    import type { HTMLButtonAttributes } from 'svelte/elements';

    interface Props extends HTMLButtonAttributes {
        children: Snippet<[]>;
    }
</script>

<script lang="ts">
    let { children, ...initATTRs }: Props = $props();
</script>

<button {...initATTRs}>
    {@render children()}
</button>
