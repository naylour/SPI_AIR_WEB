<script lang="ts">
    import { ObjectCard } from 'components';

    const objects: Record<'name' | 'status' | 'address', string>[] = [
        {
            name: 'First',
            status: 'ok',
            address: 'Krasnodar'
        },
        {
            name: 'Second',
            status: 'ok',
            address: 'Krasnodar'
        },
        {
            name: 'Third',
            status: 'ok',
            address: 'Krasnodar'
        },
    ];
</script>

{#each objects as obj, _(_)}
    <ObjectCard {...obj} />
{/each}
