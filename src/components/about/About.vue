<template>
  <div>
    <div class="row mt-3">
      <div class="col-3">
        <!-- 二级导航 -->
        <ul class="list-group">
          <li class="list-group-item">
            <router-link :to="{name:'companyLink'}">公司简介</router-link>
          </li>
          <li class="list-group-item">
            <router-link :to="{name:'teamLink'}">公司团队</router-link>
          </li>
          <li class="list-group-item">
            <router-link :to="{name:'hrLink'}">人才招聘</router-link>
          </li>
          <li class="list-group-item">
            <router-link :to="{name:'contactLink'}">联系我们</router-link>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <!-- 二级导航对应内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
