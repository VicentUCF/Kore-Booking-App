<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';
</script>

<div class="card card--{variant}">
  <slot />
</div>

<style lang="scss">

  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

    &--primary {
      background-color: #fff;
    }

    &--secondary {
      background-color: #f5f5f5;
    }
  }

</style>
