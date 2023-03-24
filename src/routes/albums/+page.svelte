<script>
  export let data;
  console.log(data.albums);
</script>

<main>
  <h1>CPNT 200: Achievement 2</h1>

  <h1>Albums:</h1>
</main>

<ul>
  {#each data.albums as albums}
    <a href="/jsonplaceholder.typicode.com/albums/{albums._id}">
      <article>
        <h3>{albums.userId}</h3>
        <h3>{albums.id}</h3>
        <h3>{albums.title}</h3>
      </article>
    </a>
  {/each}
</ul>
