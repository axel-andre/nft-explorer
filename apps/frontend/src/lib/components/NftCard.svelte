<script>
	export let name, picture, owner;
</script>

<div class="nft-card">
	<div class="nft-card__textbox">
		<h3 class="nft-card__textbox__title">{name}</h3>
		<span class="nft-card__textbox__owner">{owner.slice(0, 10)}</span>
	</div>

	<img
		class="nft-card__image"
		src="https://i.picsum.photos/id/17/300/300.jpg?hmac=KxvSSOugjB6gpoBNWDjhfj5DxC8fvBVrp-vDzzFAMPo"
		alt=""
	/>
</div>

<style lang="scss">
	.nft-card {
		background: rgba(255, 255, 255, 0.1);
		max-width: 500px;
		border-radius: 16px;
		padding: 2rem;

		&__textbox {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			&__title {
				margin: 0;
			}
			&__owner {
				border: 1px solid rgba(128, 128, 156, 0.6);
				background-color: rgba(128, 128, 156, 0.2);
				padding: 0.25rem;
				border-radius: 0.25rem;
				margin-left: 4rem;
				&::before {
					content: 'Owner:';
					margin-right: 0.5rem;
					font-style: italic;
					opacity: 0.3;
					font-size: 0.75em;
				}
			}
		}
		&__image {
			border-radius: 0.25rem;
			margin-top: 1rem;
		}
	}
</style>
