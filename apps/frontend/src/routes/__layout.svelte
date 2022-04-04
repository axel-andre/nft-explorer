<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div>
	<slot />
</div>
<style>
    * {
        font-family: 'Roboto';
    }
    :global(html) {
        background-color: #002;
        color: white;
    }
</style>