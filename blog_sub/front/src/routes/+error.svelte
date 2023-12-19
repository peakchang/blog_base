<script>
	import { page } from "$app/stores";
	import "$src/app.pcss";
</script>

<svelte:head>
	<!-- SUIT 폰트 CSS -->
	<link
		href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
		rel="stylesheet"
	/>
</svelte:head>
<div class="container max-w-xl mx-auto mt-5 px-3">
	<div class="border overflow-hidden rounded-3xl">
		<img src="/error.jpg" class="w-full" alt="" />
		<div class="text-center kbo-font text-2xl my-8">
			존재하지 않는 페이지 입니다.
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: "KBO-Dia-Gothic_bold";
		src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KBO-Dia-Gothic_bold.woff")
			format("woff");
		font-weight: 700;
		font-style: normal;
	}

	:global(.kbo-font) {
		font-family: "KBO-Dia-Gothic_bold";
	}
</style>
