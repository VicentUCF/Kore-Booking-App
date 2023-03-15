<script lang="ts">
	export let title: string;
	export let routes: {
		name: string;
		path: string;
	}[];

	// primary secondary
	export let variant: 'primary' | 'secondary' = 'primary';
</script>

<header class="header header--{variant}">
	<h1 class="header__title">{title}</h1>
	<nav class="header__nav">
		<ul>
			{#each routes as route}
				<li class="header__route"><a href={route.path}>{route.name}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	.header {
		background-color: #333;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__nav {
			display: flex;
			justify-content: flex-end;
		}

		&__route {
			display: inline-block;
			margin: 0 1rem;
			a {
				text-decoration: none;
			}
		}

    &--primary {
      background-color: #333;
      color: #fff;
      .header{
        &__route{
          a{
            color: #fff;
          }
        }
      }
    }

    &--secondary {
      background-color: #ccc;
      color: #333;
      .header{
        &__route{
          a{
            color: #333;
          }
        }
      }
    }
	}

</style>
