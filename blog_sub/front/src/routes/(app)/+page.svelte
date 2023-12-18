<script>
    import { page } from "$app/stores";
    console.log($page);
    let subView = {};
    export let data;

    $: data, setData();

    function setData() {
        subView = data.subView;
    }
</script>

<div class="bg-gray-200 pt-8 pb-8 suit-font px-2">
    <div class="container mx-auto max-w-4xl px-4 py-3 bg-white rounded-lg">
        <div>
            {subView.sb_subject}
        </div>

        <hr class="my-4" />

        <div class="ql-editor">
            {@html subView.sb_content}
        </div>
    </div>
</div>
<hr class="mt-6" />
<div class="container mx-auto max-w-4xl mb-10 p-4 suit-font">
    copyright@ {$page.url.origin}
</div>
