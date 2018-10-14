<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="company"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="team"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="hr"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>

</style>
