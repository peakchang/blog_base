<script>

    let getSubDomainName = ""
    export let data;
    $:data, setData();
    function setData() {
        getSubDomainName = data.returnSubDomainName
    }
</script>
<div class="container mx-auto max-w-4xl px-4 mt-5">
    서브도메인 명은 {getSubDomainName} 입니다.
</div>