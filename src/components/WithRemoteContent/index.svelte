<script>
  import { onMount } from "svelte";

  let loadingPromise;
  onMount(() => {
    loadingPromise = getTime();
  });

  const getTime = async () => {
    const response = await fetch("/api/time");
    const time = await response.text();
    if (response.ok) {
      return time;
    } else {
      throw new Error(time);
    }
  };
</script>

{#await loadingPromise}
  <p>....waiting</p>
{:then time}
  <p>The time is {time}</p>
{:catch error}
  <p class="text-red-600">Failed to retrieve time from server</p>
{/await}
