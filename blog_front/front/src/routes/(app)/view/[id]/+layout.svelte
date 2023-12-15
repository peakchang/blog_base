<script>
    import { authStatus, seoValue } from "$lib/store";
    import { page } from "$app/stores";

    console.log($page);

    export let data;
    $: data, setData();
    function setData() {
        $seoValue = data.seoValue;
    }
</script>

<svelte:head>
    {#if $page.url.pathname.includes("view")}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{$seoValue.title}</title>
        <meta name="title" content={$seoValue.title} />
        <meta name="description" content={$seoValue.description} />
        <link rel="icon" href={$seoValue.icon} />
        <meta property="og:title" content={$seoValue.title} />
        <meta property="og:url" content={$seoValue.url} />
        <meta property="og:type" content="blog" />
        <meta property="og:description" content={$seoValue.description} />
        <meta property="og:image" content={$seoValue.image} />
        <meta name="date" content={$seoValue.date} />
        <meta
            property="article:published_time"
            content={$seoValue.published_time}
        />
        <meta
            name="naver-site-verification"
            content="28132e9c935c914b3823c502418d6fcb424e1399"
        />

        <!-- SUIT 폰트 CSS -->
        <link
            href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
            rel="stylesheet"
        />
        <link
            href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
            rel="stylesheet"
        />
    {/if}
</svelte:head>

<slot />
