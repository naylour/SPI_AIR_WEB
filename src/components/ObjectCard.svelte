<script lang="ts" module>
    interface Props {
        name: string;
        status: string;
        address: string;
    }
</script>


<script lang="ts">
    const { name, status, address }: Props = $props();
</script>


<div class="object">
    {name}
</div>
