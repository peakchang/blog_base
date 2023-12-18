<script>
    import Sortable from "sortablejs";
    import { onMount } from "svelte";
    import { admin_sidebar } from "$src/lib/store";

    let sortableEle;

    onMount(() => {
        new Sortable(sortableEle, {
            //이동 시 부드러운 애니메이션 효과
            animation: 150,
            //요소 클릭(이동)중, ghostClass에 할당 된 값을 해당 요소의 Class명으로 부여
            ghostClass: "active",
            onEnd: function (evt) {
                var itemEl = evt.item; // dragged HTMLElement
                evt.to; // target list
                evt.from; // previous list
                evt.oldIndex; // element's old index within old parent
                evt.newIndex; // element's new index within new parent
                evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
                evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
                evt.clone; // the clone element
                evt.pullMode; // when item is in another sortable: `"clone"` if cloning, `true` if moving
            },
            onChange: function (/**Event*/ evt) {
                evt.newIndex; // most likely why this event is used is to get the dragging element's current index
                // same properties as onEnd
                console.log(evt.newIndex);
            },
        });
    });
</script>

<div class="mt-14 px-5 text-sm suit-font" class:ml-52={!$admin_sidebar}>
    <div>
        <h1>drag and drop</h1>
        <ul class="cursor-pointer flex gap-1" bind:this={sortableEle}>
            <li class="w-9 h-9 border">list1</li>
            <li class="w-9 h-9 border">list2</li>
            <li class="w-9 h-9 border">list3</li>
            <li class="w-9 h-9 border">list4</li>
        </ul>
    </div>
</div>
