<template>
  <div id="nav">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/img/difolt.png" alt="bttaxe" /> Api</a
        >

        <div class="navbar-nav">
          <router-link class="nav-link active" aria-current="page" to="/"
            >Home</router-link
          >

          <router-link class="nav-link" aria-current="page" to="/about"
            >About</router-link
          >

          <router-link class="nav-link" aria-current="page" to="/api"
            >Api</router-link
          >
                    <router-link class="nav-link" aria-current="page" to="/carrito"
            >Carrito</router-link
          >
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  .navbar-brand {
    color: rgb(27, 117, 9);
  }
  .nav-link,
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
