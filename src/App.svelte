<script>
  import MyComponent from "@/components/MyComponent";
  import WithRemoteContent from "@/components/WithRemoteContent";
</script>

<main
  class="container mx-auto flex flex-col items-center bg-gray-100 min-h-screen
  justify-center"
>
  <MyComponent name="boilerplate" />
  <p class="m-1">
    Visit the
    <a class="underline text-blue-500" href="https://svelte.dev/tutorial">
      Svelte tutorial
    </a>
    to learn how to build Svelte apps.
  </p>
  <WithRemoteContent />
</main>
