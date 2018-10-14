<template>
  <div class="card">
    <h5 class="card-header">联系我们</h5>
    <div class="card-body">
      <h5 class="card-title">联系我们</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

      <!-- 三级导航 -->
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link :to="{name:'Phone'}" class="nav-link active">电话</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'personName'}" class="nav-link">联系人</router-link>
        </li>
      </ul>

      <div class="jumbotron">
        <!-- 三级导航对应内容 -->
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>
