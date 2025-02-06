<script module lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAnchorAttributes } from 'svelte/elements';

    interface LinkEvent {
        rect: DOMRect;
        currentTarget: HTMLAnchorElement;
    }

    type Props = {
        children: Snippet<[]>;
        onactive?: (__event__: LinkEvent) => MaybePromise<void>;
        isActive?: boolean;
        link?: HTMLAnchorElement;
        /**
         * Где отображать статус активности
         * @default "class"
         */
        indicator?: 'class' | 'attr' | 'all';
    } & HTMLAnchorAttributes;
</script>

<script lang="ts">
    import { page } from '$app/state';

    let {
        children,
        onactive,
        isActive = $bindable(false),
        link = $bindable(undefined),
        href,
        indicator = 'class',
        ...initATTRs
    }: Props = $props();

    let attrs = $state<typeof initATTRs & { active?: boolean }>({ ...initATTRs });

    $effect.root(() => {
        $effect(() => {
            if (href) {
                if (href === '/') {
                    if (page.url.pathname === href) isActive = true;
                    else isActive = false;
                } else if (page.url.pathname.startsWith(href)) isActive = true;
                else isActive = false;

                if (indicator === 'attr' || indicator == 'all') attrs.active = isActive;
            }
        });

        $effect(() => {
            if (isActive && link) {
                onactive?.({
                    rect: link.getBoundingClientRect(),
                    currentTarget: link
                });
            }
        });
    });
</script>

<a
    {...attrs}
    {href}
    bind:this={link}
    class={[
        'link',
        attrs.class,
        (indicator == 'class' || indicator == 'all') && isActive && 'active'
    ]}
>
    {@render children?.()}
</a>
