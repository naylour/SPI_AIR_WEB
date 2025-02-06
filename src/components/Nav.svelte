<script lang="ts">
    import { Link } from 'components';
    import { navlinks } from 'lib/links';
</script>

<nav class="nav">
    <ul class="nav-list">
        {#each navlinks as { title, icon, ...navlink }, _ (_)}
            {@const Icon = icon}
            <li class="nav-list_elem">
                <Link {...navlink} class="nav-list_link">
                    <Icon name={title} size={22} strokeWidth={1.4} />
                    {title}
                </Link>
            </li>
        {/each}
    </ul>
</nav>

<style lang="postcss">
    .nav {
        @apply w-full;
        @apply @xl:max-w-[60vw];
        @apply @4xl:max-w-[50vw];
        @apply @7xl:max-w-[30vw];
    }
    .nav-list {
        @apply flex gap-1 rounded-md bg-indigo-100 p-[4px] shadow-lg shadow-indigo-200/10;
    }

    .nav-list_elem {
        @apply flex w-full justify-center;
    }

    :global .nav-list_link {
        @apply flex w-full flex-col items-center rounded-md px-[4px] py-[2px];
    }
    :global .nav-list_link.active {
        @apply bg-indigo-300 text-white;
    }
</style>
